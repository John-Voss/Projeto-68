import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import RentBikeScreen from '../screens/bike'
import LeaseHistoryScreen from '../screens/history'

const Tab = createBottomTabNavigator();

export default class BottomTab extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route})=>({
                        tabBarIcon: ({focused, color, size})=>{
                            let iconName;
                            if(route.name === 'Rent a Bike'){
                                iconName='bicycle';
                            }else if(route.name === 'Lease history'){
                                iconName='time'
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        }
                    })}

                    tabBarOptions={{
                        activeTintColor: "#FF007A",
                        inactiveTintColor: "black",
                        style: {
                            height: 100,
                            borderTopWidth: 0,
                            backgroundColor: "#000030",
                        },
                        labelStyle: {
                            fontSize: 20,
                        },
                        labelPosition: "below-icon",
                        tabStyle: {
                            alignItems: "center",
                            justifyContent: "center",
                            
                        }
                    }}
                
                >
                    <Tab.Screen name='Rent a bike' component={RentBikeScreen} />
                    <Tab.Screen name='Lease history' component={LeaseHistoryScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}