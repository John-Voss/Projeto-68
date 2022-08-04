import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class RentBikeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            domState: 'normal',
            hasCameraPermissions: null,
            scanned: false, 

            bikeId: '',
            userId: ''
        }
    }

    getCameraPermissions= async (domState)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status==='granted',
            domState: domState,
            scanned: false
        })
    }

    render(){
        const {domState, scanned, bikeId, userId} = this.state;
        if(domState!='normal'){
            return(
                <BarCodeScanner
                    onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            )
        }

        
        return(
            <View style={styles.container}>
                <Text style={styles.text}>LET THE APP USE YOUR CAMERA.</Text>

                <Text style={styles.text_bike}>Bike ID:</Text>
                <TouchableOpacity style={styles.qrCode} onPress={()=>this.getCameraPermissions('bikeId')}>
                    <Text style={styles.textButton}>DIGITALIZAÇÃO</Text>
                </TouchableOpacity>

                <Text style={styles.text_user}>User ID:</Text>
                <TouchableOpacity style={styles.qrCode} onPress={()=>this.getCameraPermissions('userId')}>
                    <Text style={styles.textButton}>DIGITALIZAÇÃO</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue'
    },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        marginTop: -280
    },
    qrCode:{
        width: 200,
        height: 50,
        backgroundColor: "orange",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 100
    },
    textButton:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text_bike:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -270,
        position: 'relative',
        top: 46
    },
    text_user:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -270,
        position: 'relative',
        top: 46
    }
})