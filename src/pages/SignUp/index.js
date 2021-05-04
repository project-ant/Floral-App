import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components/molecules/";

function SignUp() {
  return (
    <View>
      <Header label="Sign Up" bgColor="#FFC700" onBack={true} />
    </View>
  );
}

export default SignUp;
