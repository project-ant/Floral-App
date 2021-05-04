import React, { useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import { Button, Gap, TextInput } from "../../components/atoms";
import { Header } from "../../components/molecules";

const SignIn = ({ navigation }) => {
  StatusBar.setBarStyle("dark-content");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log("login handler");
    console.log(email, password);
  };

  return (
    <View style={styles.page}>
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
        <Button text="Sign In" onPress={loginHandler} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FAFAFC",
    flex: 1,
  },
  signInCard: {
    backgroundColor: "white",
    flex: 1,
    padding: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: "Arial-Regular",
  },
});

export default SignIn;
