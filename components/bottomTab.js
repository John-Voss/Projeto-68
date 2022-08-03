import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RentBikeScreen from '../screens/bike'
import LeaseHistoryScreen from '../screens/history'

const Tab = createBottomTabNavigator();

export default class BottomTab extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Rent a bike' component={RentBikeScreen} />
                    <Tab.Screen name='Lease history' component={LeaseHistoryScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}