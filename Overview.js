import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native-web";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";
import Imagen from "./Imagen";
import {
  colorPrincipal,
  fontExtraBold,
  fontSemiBold,
  fontLight300,
  fontRegular400,
  fontLight,
  fontMedium500,
  colorSecundario,
} from "./Variables";
import ModalCalendar from "./ModalCalendar";

const Overview = () => {
  return (
    <View style={styles.container}>
      <AppbarHeader title="Home" />
      <ModalCalendar />
      <Imagen />
      <FloatingButtonAction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSecundario,
    flex: 1,
  },
});

export default Overview;
