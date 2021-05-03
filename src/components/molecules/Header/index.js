import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Gap } from "../../atoms";

function Header(props) {
  return (
    <View style={styles.container}>
      {props.onBack && (
        <TouchableOpacity onPress={props.onBack}>
          <IconBack />
        </TouchableOpacity>
      )}
      <Gap width={32} />
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingVertical: 37,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
  },
});

export default Header;
