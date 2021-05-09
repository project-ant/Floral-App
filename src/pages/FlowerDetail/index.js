import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {showMessage} from 'react-native-flash-message';

import {Header} from '../../components/molecules';
import {Gap, Button} from '../../components/atoms';
import firebase from '../../config/Firebase';

const Tab = createMaterialBottomTabNavigator();

function FlowerDetail(props) {
  const {data, userId} = props.route.params;

  const [flowerCount, setFlowerCount] = useState(1);

  useEffect(() => {
    const dbRef = firebase
      .database()
      .ref('users/' + userId + '/basket/' + data.id)
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          const response = snapshot.val();
          setFlowerCount(response.count);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePutInBasket = () => {
    const basketData = {
      ...data,
      count: flowerCount,
    };
    firebase
      .database()
      .ref('users/' + userId + '/basket/' + data.id)
      .update(basketData)
      .then(() => {
        if (flowerCount === 0) {
          showMessage({
            message: 'Data berhasil dikosongkan',
            type: 'success',
          });
        } else {
          showMessage({
            message: 'Data berhasil diupdate',
            type: 'success',
          });
        }
      })
      .catch(() => {
        showMessage({
          message: 'Gagal',
          description: 'Silahkan coba lagi',
          type: 'warning',
        });
      });
  };

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
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '10%'}}>
            <Button
              color="grey"
              text="-"
              textColor="white"
              onPress={() => setFlowerCount(parseInt(flowerCount) - 1)}
            />
          </View>
          <Gap width={2} />
          <View style={{width: '10%'}}>
            <TextInput
              style={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'black',
                height: 45,
                borderRadius: 5,
              }}
              textAlign="center"
              value={flowerCount.toString()}
              onChangeText={e => setFlowerCount(e)}
            />
          </View>
          <Gap width={2.3} />
          <View style={{width: '10%'}}>
            <Button
              color="grey"
              text="+"
              textColor="white"
              onPress={() => setFlowerCount(parseInt(flowerCount) + 1)}
            />
          </View>
        </View>

        <Gap height={7} />

        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <Button text="Put in basket" onPress={handlePutInBasket} />
          <Gap height={7} />
          <Button text="Buy" />
        </View>
      </View>
      <Gap height={10} />
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
