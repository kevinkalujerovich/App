import * as React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";

const Goals = () => {
  return (
    <>
      <AppbarHeader title="Goals" />
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Goals;
