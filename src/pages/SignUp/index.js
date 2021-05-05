import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import {Header} from '../../components/molecules/';
import {TextInput, Gap, Button} from '../../components/atoms';
import firebase from '../../config/Firebase';

function SignUp({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [hasImage, setHasImage] = useState(false);

  const handleSignUp = () => {
    // animate the button
    setIsLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;

        firebase
          .database()
          .ref('users/' + user.uid)
          .set({
            fullName: fullName,
            email: email,
            imageBase64: imageBase64,
          });

        showMessage({
          message: 'Pendaftaran berhasil',
          type: 'success',
        });

        // stop button loading animation
        setIsLoading(false);
        navigation.navigate('SignIn');
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;

        showMessage({
          message: errorMessage,
          type: 'danger',
        });

        // stop button loading animation
        setIsLoading(false);
      });
  };

  const handleImage = () => {
    launchImageLibrary(
      {maxWidth: 300, maxHeight: 300, includeBase64: true},
      response => {
        if (response.didCancel) {
          showMessage({
            message: 'Upload foto dibatalkan',
            type: 'danger',
          });
          setHasImage(false);
        } else {
          setImageBase64(response.base64);
          setImage(response.uri);
          setHasImage(true);
        }
      },
    );
  };

  return (
    <ScrollView>
      <Header
        label="Sign Up"
        bgColor="#FFC700"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.signUpWrapper}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderColor: 'red',
              borderWidth: 2,
              height: 100,
              width: 100,
              borderRadius: 100,
              borderColor: '#c4c4c4',
              padding: 3,
              borderStyle: 'dashed',
            }}>
            <TouchableOpacity
              style={styles.imageWrapper}
              activeOpacity={0.7}
              onPress={handleImage}>
              {!hasImage && (
                <Text style={styles.imageWrapperText}>Add Photo</Text>
              )}
              {hasImage && <Image source={{uri: image}} style={styles.image} />}
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          value={fullName}
          onChangeText={setFullName}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Gap height={16} />
        {isLoading && (
          <Button
            text={<ActivityIndicator size="large" color="black" />}
            bgColor="#FFC700"
            textColor="#020202"
            onPress={handleSignUp}
          />
        )}
        {!isLoading && (
          <Button
            text="Continue"
            bgColor="#FFC700"
            textColor="#020202"
            onPress={handleSignUp}
          />
        )}
      </View>
    </ScrollView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  signUpWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  imageWrapper: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#c4c4c4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapperText: {
    color: 'black',
    width: 50,
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
});
