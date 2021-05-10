import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {HeaderUser, Header} from '../../components/molecules';
import {Gap, Button} from '../../components/atoms';
import Buy from '../Buy';

const Tab = createMaterialBottomTabNavigator();

function FlowerDetail(props) {
  const {data} = props.route.params;

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Header
        label="Floral-App"
        bgColor="#FFC700"
        miniText="Choose your flower"
        onBack={() => props.navigation.goBack()}
      />

      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.image}} />
        <Gap height={20} />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{`Rp. ${data.price}`}</Text>
        <Gap height={5} />

        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <Button text="Put in basket" />
          <Gap height={7} />
          <Button text="Buy" onPress={() => props.navigation.navigate('Buy')}/>
        </View>
      </View>
    </ScrollView>
  );
}

export default FlowerDetail;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    // backgroundColor: 'red',
    // height: 700,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 23,
  },
});
