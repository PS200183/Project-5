import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import OefeningScreen from "../view/student/OefeningScreen";
import OenfeningDetailsScreen from "../view/student/OenfeningDetailsScreen";
import Prestaties from "../view/PrestatiesScreens/Prestaties";
import Prestatiesaanmaken from "../view/PrestatiesScreens/Prestatiesaanmaken";
import Prestatiesverwijderen from "../view/PrestatiesScreens/Prestatiesverwijderen";
import Prestatiesupdaten from "../view/PrestatiesScreens/Prestatiesupdaten";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};
const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const OefeningStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Oefening" component={OefeningScreen} />
      <Stack.Screen name="OefeningDetails" component={OenfeningDetailsScreen} />
    </Stack.Navigator>
  );
};

const StudentStack = () => {
  return (
    <Tab.Navigator
      activeColor="#D70073"
      shifting={true}
      barStyle={{ backgroundColor: "#24126E" }}
    >
      <Tab.Screen
        name="Oefeningen"
        component={OefeningStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="arm-flex" size={30} color="black" />
          ),
          globalScreenOptions,
        }}
      />
      <Tab.Screen
        name="Prestaties"
        component={PrestatiesStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="av-timer" size={30} color="black" />
          ),
          globalScreenOptions,
        }}
      />
    </Tab.Navigator>
  );
};

const globalScreenOptions = {
  headerStyle: { backgroundColor: "black" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};
const PrestatiesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={Prestaties} />
      <Stack.Screen
        name="Prestatiesverwijderen"
        component={Prestatiesverwijderen}
      />
      <Stack.Screen name="Prestatiesupdate" component={Prestatiesupdaten} />
      <Stack.Screen name="Prestatiesaanmaken" component={Prestatiesaanmaken} />
    </Stack.Navigator>
  );
};

export default StudentStack;
