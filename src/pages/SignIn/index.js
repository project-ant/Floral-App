import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import {Button, Gap, TextInput} from '../../components/atoms';
import {Header} from '../../components/molecules';
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    // set loading for button
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user.uid);
        setIsLoading(false);
        navigation.replace('Home');
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;

        showMessage({
          message: errorMessage,
          type: 'danger',
        });

        setIsLoading(false);
      });
  };

  return (
    <ScrollView style={styles.page}>
      <Header label="Sign In" bgColor="#FFC700" />
      <Gap height={25} />
      <View style={styles.signInCard}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email address"
          label="Email Address"
        />
        <Gap height={16} />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Type your password"
          label="Password"
          secureTextEntry={true}
        />
        <Gap height={24} />
        {isLoading && (
          <Button
            text=<Button text="Sign In" onPress={loginHandler} />
            onPress={loginHandler}
          />
        )}
        {!isLoading && <Button text="Sign In" onPress={loginHandler} />}
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAFC',
    flex: 1,
  },
  signInCard: {
    backgroundColor: 'white',
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial-Regular',
  },
});

export default SignIn;
