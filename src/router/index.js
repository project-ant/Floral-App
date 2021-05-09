import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SplashScreen,
  SignIn,
  SignUp,
  Home,
  FlowerDetail,
  Basket,
} from '../pages';

export default function Router() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FlowerDetail"
        component={FlowerDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Basket"
        component={Basket}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
