import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native-web";
import AppbarHeader from "./AppbarHeader";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import Modal from "react-native-modal";
import FloatingButtonAction from "./FloatingButtonAction";
import ModalAddCategory from "./ModalAddCategory";

const Categories = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const list = [
    { nombre: "item 1", id: "1" },
    { nombre: "item 2", id: "2" },
    { nombre: "item 3", id: "3" },
    { nombre: "item 4", id: "4" },
    { nombre: "item 5", id: "5" },
    { nombre: "item 6", id: "6" },
    { nombre: "item 7", id: "7" },
    { nombre: "item 8", id: "8" },
    { nombre: "item 9", id: "9" },
    { nombre: "item 10", id: "10" },
  ];

  return (
    <>
      <AppbarHeader title="Categories" />
      <ScrollView>
        <View style={styles.viewContainerButtonsMain}>
          <Text style={styles.textMainTitle}>Category</Text>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <AntDesign name="pluscircle" style={styles.iconButton} />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          animationIn={"slideInUp"}
          animationOut={"slideOutUp"}
          animationInTiming={10}
          style={{
            alignItems: "center",
          }}
        >
          <ModalAddCategory hideModal={toggleModal} />
        </Modal>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Lista de ingresos</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Lista de egresos</Text>
        </View>
      </ScrollView>
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({
  textMainTitle: {
    fontSize: 20,
  },
  textList: {
    fontSize: 13,
    padding: 5,
  },
  container: {
    backgroundColor: "white",
    margin: 5,
  },
  textTitle: {
    fontSize: 20,
    padding: 10,
  },
  viewContainerButtonsMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  button: {
    marginStart: 5,
    paddingTop: 4,
  },
  iconButton: {
    fontSize: 20,
    color: "#28a745",
    fontWeight: "bold",
  },
});

export default Categories;
