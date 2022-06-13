import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const AppbarHeader = (props) => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#0c8cfc" },
});

export default AppbarHeader;
