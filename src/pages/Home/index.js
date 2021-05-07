import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {HeaderUser, Card} from '../../components/molecules';
import {Buy} from '../../pages';
import firebase from '../../config/Firebase';

const Tab = createMaterialBottomTabNavigator();

function Home(props) {
  const {id} = props.route.params;

  const [user, setUser] = useState({});

  useEffect(() => {
    var starCountRef = firebase.database().ref('users/' + id);
    starCountRef.on('value', snapshot => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{backgroundColor: '#FFC700'}}>
      <Tab.Screen
        name="Home"
        // component={HomeContent}
        children={() => <HomeContent user={user} />}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/icons/Home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image source={require('../../assets/icons/Buy.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeContent(user) {
  user = user.user;

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderUser image={user.imageBase64} />

      <View style={styles.contentWrapper}>
        <Card />
        <Card />
      </View>

      <View style={styles.contentWrapper}>
        <Card />
        <Card />
      </View>

      <View style={styles.contentWrapper}>
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 2,
    flexDirection: 'row',
    // backgroundColor: 'teal',
    padding: 5,
  },
});
