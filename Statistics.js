import * as React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";

const Statistics = () => {
  return (
    <>
      <AppbarHeader title="Statistics" />
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Statistics;
