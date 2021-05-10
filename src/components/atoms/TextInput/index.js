import React, { useState } from "react";
import { TextInput as Input, StyleSheet, Text, View } from "react-native";

function TextInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  label,
}) {
  const [borderColor, setBorderColor] = useState("black");

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontWeight: "400",
    fontSize: 16,
    color: "#020202",
    marginBottom: 6,
  },
});

export default TextInput;
