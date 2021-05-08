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
      // setFlowers(Object.entries(data).map(([key, value]) => ({key, value})));
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
        children={() => <HomeContent user={user} flowers={flowers} />}
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
  console.log(flowers.length);
  // const [flowers, setFlowers] = useState([]);

  // useEffect(() => {
  //   // get flowers
  //   const starCountRef = firebase.database().ref('flowers/');
  //   starCountRef.on('value', snapshot => {
  //     const data = snapshot.val();
  //     const productArray = [];
  //     Object.keys(data).map(i => {
  //       return productArray.push({id: i, ...data[i]});
  //     });
  //     setFlowers(productArray);
  //     // setFlowers(Object.entries(data).map(([key, value]) => ({key, value})));
  //   });
  // }, []);
  if (flowers.length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderUser image={user.imageBase64} />
      {/* <Card image={i.image} flower={i.name} price={i.price} id={i.id} /> */}
      {console.log('===========')}
      {flowers.map((i, index, elements) => {
        console.log(index % 2 === 0);
        if (index % 2 === 0) {
          if (elements[index + 1] !== undefined) {
            return (
              <View style={styles.contentWrapper}>
                <Card
                  image={i.image}
                  flower={i.name}
                  price={i.price}
                  id={i.id}
                />
                <Card
                  image={elements[index + 1].image}
                  flower={elements[index + 1].name}
                  price={elements[index + 1].price}
                  id={elements[index + 1].id}
                />
              </View>
            );
          } else {
            return (
              <View style={styles.contentWrapper}>
                <Card
                  image={i.image}
                  flower={i.name}
                  price={i.price}
                  id={i.id}
                  height={500}
                />
              </View>
            );
          }
        }
      })}
      {/* <Card /> */}
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
