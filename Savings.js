import * as React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";

const Savings = () => {
  return (
    <>
      <AppbarHeader title="Savings" />
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Savings;
