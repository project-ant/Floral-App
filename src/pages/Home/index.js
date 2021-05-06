import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HeaderUser} from '../../components/molecules';
import {SignIn, SignUp} from '../../pages';

const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={SignIn}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SignUp}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SignIn}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
