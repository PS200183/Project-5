import { createStackNavigator } from "@react-navigation/stack";
import OenfeningDetailsScreen from "../view/Gasten/OenfeningDetailsScreen";
import OenfeningGastenScreen from "../view/Gasten/OenfeningGastenScreen";

const Stack = createStackNavigator();

const GastenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Oefening" component={OenfeningGastenScreen} />
      <Stack.Screen name="OefeningDetails" component={OenfeningDetailsScreen} />
    </Stack.Navigator>
  );
};

export default GastenStack;
