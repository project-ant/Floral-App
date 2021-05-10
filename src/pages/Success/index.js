import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Success({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purchase Successful</Text>
      <Image
        style={styles.image}
        source={require("../../assets/icons/image_1.svg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC700",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 300,
  },
  text: {
    fontSize: 32,
    color: "#020202",
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
});
