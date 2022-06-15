import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="stList" component={ListScreen} />
      <Stack.Screen name="stDetails" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tabHome" component={HomeScreen} />
      <Tab.Screen name="tabApp" component={AppStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}
export default App;
