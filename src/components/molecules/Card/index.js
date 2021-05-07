import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function Card() {
  const handleCLick = () => {
    console.log('jalan');
  };

  return (
    <View
      style={{
        height: 257,
        alignItems: 'center',
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 0.3,
        backgroundColor: 'white',
        margin: 10,
        paddingBottom: 4,
        flex: 1,
      }}>
      <Image
        source={require('../../../assets/images/dummy.jpg')}
        style={{width: 179, height: 179, margin: 0}}
      />
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 17}}>
        Bunga Angrek
      </Text>
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
        Rp. 150.000
      </Text>

      <View
        style={{
          width: '100%',
          padding: 0,
          flex: 2,
          flexDirection: 'row',
          height: 20,
        }}>
        <View
          style={{
            width: '80%',
          }}></View>
        <View
          style={{
            width: '20%',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={handleCLick}>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 3,
                borderRadius: 5,
                textAlign: 'center',
                marginRight: 5,
                fontWeight: '500',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Card;
