import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ChartScreen from '../screens/CartScreen';
import HomeScreenV2 from '../screens/HomeScreenV2';
import MyTabs from './TabNavigator';
import DetailProductScreen from '../screens/DetailProductScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={MyTabs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProductDetail" component={DetailProductScreen} />
      <Stack.Screen name="Chart Screen" component={ChartScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
