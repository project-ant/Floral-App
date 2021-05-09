import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import {Header} from '../../components/molecules';
import {Gap, Hr} from '../../components/atoms';
import firebase from '../../config/Firebase';

function Basket(props) {
  const isFocused = useIsFocused();
  const [flowers, setFlowers] = useState([]);

  const getData = () => {
    // get all flower from current user baset
    const starCountRef2 = firebase
      .database()
      .ref('users/' + props.userId + '/basket');
    starCountRef2.on('value', snapshot => {
      const data = snapshot.val();
      const productArray = [];
      Object.keys(data).map(i => {
        return productArray.push({
          id: data[i].id,
          name: data[i].name,
          price: data[i].price,
          count: data[i].count,
          image: data[i].image,
        });
      });

      // get flower with count > 0
      const tempFlower = [];
      productArray.map(i => {
        if (i.count > 0) {
          tempFlower.push(i);
        }
      });
      setFlowers(tempFlower);
      //   console.log('flowers', flowers);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // rerender tab
  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        label="Floral-App"
        bgColor="#FFC700"
        miniText="Choose your flower"
        onBack={() => props.navigation.goBack()}
      />

      <Gap height={15} />

      <View style={{paddingHorizontal: 8, marginBottom: 7}}>
        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20}}>Basket</Text>
        <Hr />

        {flowers.map(i => {
          return (
            <View>
              <Gap height={2} />
              <TestCard
                name={i.name}
                image={i.image}
                price={i.price}
                count={i.price}
              />
              <Gap height={2} />
              <Hr />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

function TestCard(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 150,
        width: '100%',
      }}>
      <View
        style={{
          //   backgroundColor: 'blue',
          height: '100%',
          width: '10%',
          justifyContent: 'center',
        }}>
        <RadioButton
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          height: '100%',
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: props.image}}
          style={{borderRadius: 5, width: '97%', height: '97%'}}
        />
      </View>
      <View
        style={{
          //   backgroundColor: 'yellow',
          height: '100%',
          width: '60%',
          padding: 5,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            height: '50%',
            width: '100%',
          }}>
          <Text style={{fontSize: 14, fontFamily: 'Poppins-Medium'}}>
            {props.name}
          </Text>
          <Text style={{fontSize: 14, fontFamily: 'Poppins-Medium'}}>
            {`Rp. ${props.price}`}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'blue',
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text>Quantity: {props.count}</Text>
        </View>
      </View>
    </View>
  );
}

export default Basket;
