import React, { useState } from "react";
import { TextInput as Input, StyleSheet } from "react-native";

const TextInput = ({
  placeholder,
  value,
  setValue,
  validation,
  filter,
  isPassword,
}) => {
  const [isValid, setIsValid] = useState("");
  const [borderColor, setBorderColor] = useState("black");

  const onChangeHandler = ({ nativeEvent: { text: e } }) => {
    if (validation == undefined) validation = e => "";
    if (filter == undefined) filter = e => e;

    setIsValid(validation(e));
    isValid ? setBorderColor("red") : setBorderColor("green");
    const filteredText = filter(e);
    setValue(filteredText);
  };

  const textInputStyles = {
    ...styles.inputField,
    borderColor: borderColor,
  };

  return (
    <Input
      style={textInputStyles}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      secureTextEntry={isPassword}
      onFocus={e => (isValid ? setBorderColor("red") : setBorderColor("green"))}
      onBlur={e => (isValid ? setBorderColor("red") : setBorderColor("black"))}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});

export default TextInput;
