import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class RentBikeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>RENT A BIKE</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text:{
        color: 'white',
        fontSize: 30
    }
})