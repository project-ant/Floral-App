import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function Card() {
  const handleClick = () => {
    console.log('jalan');
  };

  return (
    <View
      style={{
        height: 257,
        alignItems: 'center',
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 0.5,
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
      }}>
      <Image
        source={require('../../../assets/images/dummy.jpg')}
        style={{borderRadius: 3, width: '100%', height: '75%'}}
      />
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 17}}>
        Bunga Angrek
      </Text>
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
        Rp. 150.000
      </Text>

      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={handleClick}>
          <Image
            source={require('../../../assets/icons/add.png')}
            style={{width: 20, height: 20, margin: 4}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
