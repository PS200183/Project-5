import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import DetailsScreen from '../view/Student/DetailsScreen';
// import HomeScreen from '../view/Student/HomeScreen';
import LoginStudent from '../view/student/loginstudent';
// import favoriteScreen from '../view/Student/favoriteScreen';
// import begin from '../view/begin';
// import Aanmelden from '../view/Student/Signup';

const Stack = createStackNavigator();


const StudentStack = () => {

    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="LoginStudent" component={LoginStudent} />
           

        </Stack.Navigator>
    );
}

export default StudentStack