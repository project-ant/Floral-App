import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Gap } from "../../atoms";

function Header(props) {
  return (
    <View style={styles.container(props.bgColor)}>
      {props.onBack && (
        <TouchableOpacity onPress={props.onBack}>
          <Image
            style={styles.image}
            source={require("../../../assets/icons/Back.png")}
          />
          <Gap width={32} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: bgColor => ({
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingVertical: 37,
    backgroundColor: bgColor,
  }),
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 22,
    color: "#020202",
  },
});

export default Header;
