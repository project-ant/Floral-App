import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Gap} from '../../atoms';

function Header(props) {
  return (
    <View style={styles.container(props.bgColor)}>
      {props.onBack && (
        <TouchableOpacity onPress={props.onBack}>
          <Image
            style={styles.image}
            source={require('../../../assets/icons/Back.png')}
          />
          <Gap width={32} />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.text}>{props.label}</Text>
        <Text style={styles.miniText}>{props.miniText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: bgColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingVertical: 37,
    backgroundColor: bgColor,
  }),
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  miniText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
  },
});

export default Header;
