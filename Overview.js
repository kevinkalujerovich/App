import * as React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";

const Overview = () => {
  return (
    <>
      <AppbarHeader title="Overview" />
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({});

export default Overview;
