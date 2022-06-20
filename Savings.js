import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";
import { colorPrincipal, colorSecundario } from "./Variables";

const Savings = () => {
  return (
    <View style={styles.container}>
      <AppbarHeader title="Ahorros" />
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

export default Savings;
