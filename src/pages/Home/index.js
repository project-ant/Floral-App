import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {HeaderUser, Card} from '../../components/molecules';
import {Buy} from '../../pages';
import firebase from '../../config/Firebase';

const Tab = createMaterialBottomTabNavigator();

function Home(props) {
  const {id} = props.route.params;

  const [user, setUser] = useState({});
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    var starCountRef = firebase.database().ref('users/' + id);
    starCountRef.on('value', snapshot => {
      const data = snapshot.val();
      setUser(data);
    });

    // get flowers
    const starCountRef2 = firebase.database().ref('flowers/');
    starCountRef2.on('value', snapshot => {
      const data = snapshot.val();
      const productArray = [];
      Object.keys(data).map(i => {
        return productArray.push({id: i, ...data[i]});
      });
      setFlowers(productArray);
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeContent"
      activeColor="#e91e63"
      barStyle={{backgroundColor: '#FFC700'}}>
      <Tab.Screen
        name="Home"
        // component={HomeContent}
        children={() => (
          <HomeContent
            user={user}
            flowers={flowers}
            navigation={props.navigation}
            userId={id}
          />
        )}
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

function HomeContent(props) {
  const user = props.user;
  const flowers = props.flowers;
  const navigation = props.navigation;

  if (flowers.length === 0) {
    return (
      <View>
        <HeaderUser image={user.imageBase64} />

        <ActivityIndicator size="large" color="black" style={{marginTop: 20}} />
      </View>
    );
  }

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderUser image={user.imageBase64} />
      {flowers.map((i, index, elements) => {
        if (index % 2 === 0) {
          if (elements[index + 1] !== undefined) {
            return (
              <View style={styles.contentWrapper} keys={index}>
                <Card
                  image={i.image}
                  flower={i.name}
                  price={i.price}
                  id={i.id}
                  data={i}
                  navigation={navigation}
                  userId={props.userId}
                />
                <Card
                  image={elements[index + 1].image}
                  flower={elements[index + 1].name}
                  price={elements[index + 1].price}
                  id={elements[index + 1].id}
                  data={elements[index + 1]}
                  navigation={navigation}
                  userId={props.userId}
                />
              </View>
            );
          } else {
            return (
              <View style={styles.contentWrapper} keys={index}>
                <Card
                  image={i.image}
                  flower={i.name}
                  price={i.price}
                  id={i.id}
                  data={i}
                  userId={props.userId}
                  navigation={navigation}
                  height={500}
                />
              </View>
            );
          }
        }
      })}
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
