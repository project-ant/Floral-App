import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Card(props) {
  const height = props.height ? props.height : 257;
  const handleClick = e => {
    console.log(e);
  };

  const handleImageClick = () => {
    props.navigation.navigate('FlowerDetail');
  };

  return (
    <View style={styles.container(height)}>
      <TouchableOpacity
        onPress={handleImageClick}
        style={{borderRadius: 1, width: '99.5%', height: '75%'}}
        activeOpacity={0.8}>
        <Image
          source={{uri: props.image}}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImageClick}>
        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 17}}>
          {props.flower}
        </Text>
      </TouchableOpacity>
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
        {`Rp. ${props.price}`}
      </Text>

      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => handleClick(props.id)}>
          <Image
            source={require('../../../assets/icons/add.png')}
            style={{width: 22, height: 20, margin: 4}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: height => ({
    height: height,
    alignItems: 'center',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
  }),
});
