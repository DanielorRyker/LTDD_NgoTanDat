import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BikeListScreen from './BikeListScreen';
import DetailItem from './DetailItem';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BikeListScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="BikeListScreen" component={BikeListScreen}/>
        <Stack.Screen name="DetailItem" component={DetailItem}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
