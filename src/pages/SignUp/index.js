import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

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
    <ScrollView>
      <Header
        label="Sign Up"
        bgColor="#FFC700"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.signUpWrapper}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              borderColor: "red",
              borderWidth: 2,
              height: 100,
              width: 100,
              borderRadius: 100,
              borderColor: "#c4c4c4",
              borderWidth: 2,
              padding: 3,
              borderStyle: "dashed",
            }}
          >
            <TouchableOpacity style={styles.imageWrapper} activeOpacity={0.7}>
              <Text style={styles.imageWrapperText}>Add Photo</Text>
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
        <Button
          text="Continue"
          bgColor="#FFC700"
          textColor="#020202"
          onPress={handleSignUp}
        />
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
    backgroundColor: "#c4c4c4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapperText: {
    color: "black",
    width: 50,
    textAlign: "center",
  },
});
