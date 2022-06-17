import React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";
import ModalCalendar from "./ModalCalendar";

const Overview = () => {
  return (
    <>
      <AppbarHeader title="Overview" />
      <ModalCalendar />
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({});

export default Overview;
