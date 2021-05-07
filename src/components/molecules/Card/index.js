import React from 'react';
import {View, Text, Image} from 'react-native';

function Card() {
  return (
    <View
      style={{
        height: 250,
        alignItems: 'center',
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 0.3,
        backgroundColor: 'white',
        margin: 10,
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
    </View>
  );
}

export default Card;
