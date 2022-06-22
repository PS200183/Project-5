import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
import StudentStack from "./routes/StudentStack.js";
import StartScherm from "./view/startscherm.js";
import Infoapp from "./view/Infoapp.js";
import LoginStudent from "./view/loginStudent.js";
import GastenStack from "./routes/GastenStack.js";
import OefeningScreen from "./view/student/OefeningScreen";



const BegginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="StartScherm" component={StartScherm} />
      <Stack.Screen name="Gasten" component={GastenStack} />

      <Stack.Screen name="stackVoetbalDetails" component={OefeningScreen} />
      <Stack.Screen name="LoginStudent" component={LoginStudent} />
      <Stack.Screen name="Infoapp" component={Infoapp} />
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
