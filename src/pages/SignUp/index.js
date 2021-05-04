import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Header } from "../../components/molecules/";
import { TextInput, Gap, Button } from "../../components/atoms";

function SignUp({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("signup");
    console.log(fullName, email, password);
  };

  return (
    <View>
      <Header
        label="Sign Up"
        bgColor="#FFC700"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.signUpWrapper}>
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
        <Button
          text="Continue"
          bgColor="#FFC700"
          textColor="#020202"
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  signUpWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
