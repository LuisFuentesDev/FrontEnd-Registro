import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ResultsScreen } from '../screens/ResultsScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';




export type StackParamNavigator = {
    HomeScreen: undefined;
    RegistrationScreen: undefined;
    ResultsScreen: undefined;
    AboutScreen: undefined;
}

const Stack = createStackNavigator<StackParamNavigator>();

export const NavigatorApp = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />

        </Stack.Navigator>
    );
}