import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LeaseHistoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>LEASE HISTORY</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkred'
    },
    text:{
        color: 'white',
        fontSize: 30
    }
})