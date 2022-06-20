import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native-web";

const FloatingButtonAction = (props) => {
  const clickHandler = () => {
    alert("Floating Button Clicked");
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.funcion}
        style={styles.touchableOpacityStyle}
      >
        <Entypo name="plus" style={styles.floatingButtonStyle} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    right: 10,
    bottom: 10,
    backgroundColor: "#71f09b",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
});

export default FloatingButtonAction;
