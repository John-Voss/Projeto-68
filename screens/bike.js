import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

var bike_img = require('../assets/bike.png');
var title_img = require('../assets/title.png');

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
                <View style={styles.upperContainer}>
                    <Image source={bike_img} style={styles.appIcon}/>
                    <Image source={title_img} style={styles.appName}/>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Bike ID'}
                        placeholderTextColor={'white'}
                        value={bikeId}
                    />

                </View>
                <TouchableOpacity style={styles.qrCode} onPress={()=>this.getCameraPermissions('bikeId')}>
                    <Text style={styles.textButton}>DIGITALIZAÇÃO</Text>
                </TouchableOpacity>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'User ID'}
                        placeholderTextColor={'white'}
                        value={userId}
                    />

                </View>
                <TouchableOpacity style={styles.qrCode} onPress={()=>this.getCameraPermissions('userId')}>
                    <Text style={styles.textButton}>DIGITALIZAÇÃO</Text>
                </TouchableOpacity>

                <Text style={styles.text}>LET THE APP USE YOUR CAMERA.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000030'
    },
    text:{
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    qrCode:{
        width: 200,
        height: 50,
        backgroundColor: "darkblue",
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 140
    },
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text_user:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -270,
        position: 'relative',
        top: 46
    },
    textInput: {
        width: 320,
        height: 50,
        padding: 10,
        borderColor: "white",
        borderRadius: 10,
        borderRightWidth: 100,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        fontSize: 18,
        fontStyle: 'italic',
        backgroundColor: "darkred",
        color: "#FFFFFF",
        marginLeft: -10,
        position: 'relative',
        top: 60,
        alignItems: 'flex-start',
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    appIcon: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        marginTop: 50,
        alignSelf: 'center'
    },
    appName: {
        width: 180,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: -30
    }
})