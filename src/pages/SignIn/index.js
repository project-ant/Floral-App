import React, { useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import { Button, Gap } from "../../components/atoms";
import { Header } from "../../components/molecules";

const SignIn = ({ navigation }) => {
  StatusBar.setBarStyle("dark-content");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.page}>
      <Header label="Sign In" bgColor="#FFC700" />
      {/* <Gap height={25} />
      <View style={styles.signInCard}>
        <LabeledInput
          value={email}
          setValue={setEmail}
          validation={emailValidationHandler}
          placeholder="Type your email address"
          label="Email Address"
        />
        <Gap height={16} />
        <LabeledInput
          value={password}
          setValue={setPassword}
          placeholder="Type your password"
          label="Password"
          isPassword
        />
        <Gap height={24} />
        <View style={{ height: 112 }}>
          <Button label="Sign In" bgColor="#FFC700" onPress={loginHandler} />
          <Gap height={12} />
          <Button
            label="Create New Account"
            bgColor="#8D92A3"
            textColor="white"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View> */}
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
