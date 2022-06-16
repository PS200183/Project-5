import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
import StudentStack from "./routes/StudentStack.js";
import StartScherm from "./view/startscherm.js";


const BegginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="StartScherm" component={StartScherm} />
      <Stack.Screen name="Studenten" component={StudentStack} />
    </Stack.Navigator>
  );
};

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <BegginStack />
    </NavigationContainer>
  );
};

export default App;
