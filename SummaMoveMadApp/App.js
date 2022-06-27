import React from "react";
import { StyleSheet, Text, View, Button, Easing } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators
} from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
import StudentStack from "./routes/StudentStack.js";
import StartScherm from "./view/startscherm.js";
import Infoapp from "./view/Infoapp.js";
import LoginStudent from "./view/loginstudent.js";
import GastenStack from "./routes/GastenStack.js";
import { GebuikerProviders } from "./localData/gebruikergegevens.js";

const BegginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
      headerMode="float"
      animation="fade"
    >
      <Stack.Screen name="StartScherm" component={StartScherm} />
      <Stack.Screen name="Gasten" component={GastenStack} />

      {/* <Stack.Screen name="stackVoetbalDetails" component={OefeningScreen} /> */}
      <Stack.Screen name="LoginStudent" component={LoginStudent} />
      <Stack.Screen name="Infoapp" component={Infoapp} />
      <Stack.Screen name="Studenten" component={StudentStack} />
    </Stack.Navigator>
  );
};

const App = ({ navigation }) => {
  return (
    <GebuikerProviders>
      <NavigationContainer>
        <BegginStack />
      </NavigationContainer>
    </GebuikerProviders>
  );
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};
export default App;
