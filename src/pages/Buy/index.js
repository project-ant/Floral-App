import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import {Header} from '../../components/molecules';
import {Gap, Hr, Button} from '../../components/atoms';
import firebase from '../../config/Firebase';

function Buy(props) {
  const {flower, userId} = props.route.params;

  const isFocused = useIsFocused();
  const [flowers, setFlowers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const temp = [];
    let tempTotal = 0;
    flower.map(i => {
      // get all flower from current user baset
      const starCountRef2 = firebase
        .database()
        .ref('users/' + userId + '/basket/' + i);
      starCountRef2.on('value', snapshot => {
        const data = snapshot.val();
        temp.push(data);
        tempTotal += parseInt(data.price) * parseInt(data.count);
      });
    });

    setFlowers(temp);
    setTotal(tempTotal);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        label="Floral-App"
        bgColor="#FFC700"
        miniText="Choose your flower"
        onBack={() => props.navigation.goBack()}
      />

      <View style={{padding: 7}}>
        {flowers.map((i, index) => {
          return (
            <View keys={index}>
              <Gap height={2} />
              <TestCard
                name={i.name}
                image={i.image}
                price={i.price}
                count={i.count}
                index={index + 1}
              />
              <Gap height={2} />
              <Hr />
            </View>
          );
        })}

        <Gap height={15} />
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 25,
            }}>
            Total: Rp. {total}
          </Text>
        </View>
        <Gap height={10} />
        <Button text="Buy" />
        <Gap height={15} />
      </View>
    </ScrollView>
  );
}

function TestCard(props) {
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
        <View style={{alignItems: 'center'}}>
          <Text>{props.index}</Text>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'green',
          height: '100%',
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: '97%', height: '97%'}}
          activeOpacity={0.8}>
          <Image
            source={{uri: props.image}}
            style={{borderRadius: 5, width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
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
          <Text>{`Quantity: ${props.count} Total: ${
            props.count * props.price
          }`}</Text>
        </View>
      </View>
    </View>
  );
}

export default Buy;
