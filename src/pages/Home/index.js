import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {HeaderUser} from '../../components/molecules';
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
    <View>
      <HeaderUser image={user.imageBase64} />
      <Text>Dummy Home Page</Text>
    </View>
  );
}

export default Home;
