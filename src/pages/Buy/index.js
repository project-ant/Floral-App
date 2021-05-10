import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import { Header} from '../../components/molecules';
import {Gap, Button} from '../../components/atoms';

const Tab = createMaterialBottomTabNavigator();

function Buy(props) {
  return (
    <View>
      <Header
        label="Floral-App"
        bgColor="#FFC700"
        miniText="Choose your flower"
        onBack={() => props.navigation.goBack()}
      />
      <Text>Dummy Buy Page</Text>
    </View>
  );
}

export default Buy;
