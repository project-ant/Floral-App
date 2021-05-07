import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function HeaderUser(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContainerText}>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 22}}>
              Floral-App
            </Text>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Choose your flower
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 5,
            }}
            source={{
              uri: `data:image/png;base64, ${props.image}`,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default HeaderUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    height: 108,
  },
  headerWrapper: {flexDirection: 'row', flex: 2},
  headerContainer: {
    //   backgroundColor: 'red',
    width: '75%',
  },
  headerContainerText: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    width: '25%',
  },
});
