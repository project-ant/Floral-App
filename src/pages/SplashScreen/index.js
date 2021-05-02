import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Arter Tendean</Text>
      <Image
        style={styles.image}
        source={require("../../assets/icons/Logo.png")}
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
  },
});
