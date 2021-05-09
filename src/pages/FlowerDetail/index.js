import React from 'react';
import {View, Text, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {HeaderUser, Header} from '../../components/molecules';
import Buy from '../Buy';

const Tab = createMaterialBottomTabNavigator();

function FlowerDetail(props) {
  return (
    <View>
      <Header
        label="Floral-App"
        bgColor="#FFC700"
        miniText="Choose your flower"
        onBack={() => props.navigation.goBack()}
      />

      <Text>Dummy Buy Flower Detail</Text>
    </View>
  );
}

export default FlowerDetail;
