import { createStackNavigator } from "@react-navigation/stack";
import OenfeningGastenScreen from "../view/Gasten/OenfeningGastenScreen";

const Stack = createStackNavigator();

const GastenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Oefening" component={OenfeningGastenScreen} />
    </Stack.Navigator>
  );
};

export default GastenStack;

