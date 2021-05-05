import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ text, color = "#FFC700", textColor = "#020202", onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    height: 45,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  }),

  text: textColor => ({
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
    color: textColor,
  }),
});

export default Button;
