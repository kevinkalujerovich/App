import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native-web";
import { Entypo } from "@expo/vector-icons";
import {
  colorPrincipal,
  fontExtraBold,
  fontSemiBold,
  fontLight300,
  fontRegular400,
  fontLight,
  fontMedium500,
} from "./Variables";
const AppbarHeader = (props) => {
  return (
    <Appbar.Header style={styles.container}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <TouchableOpacity style={styles.containerBtnOptions}>
        <Entypo name="dots-three-vertical" style={styles.btnOptions} />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPrincipal,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontFamily: fontSemiBold,
    fontSize: 20,
    paddingStart: 10,
    color: "white",
  },
  containerBtnOptions: {
    justifyContent: "flex-end",
  },
  btnOptions: {
    fontSize: 20,
    color: "white",
  },
});

export default AppbarHeader;
