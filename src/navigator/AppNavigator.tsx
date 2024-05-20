import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChartScreen from '../screens/CartScreen';
import HomeScreenV2 from '../screens/HomeScreenV2';
import MyTabs from './TabNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={MyTabs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Chart Screen" component={ChartScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
