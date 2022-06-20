import React from "react";
import { useState } from "react";
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native-web";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import FloatingButtonAction from "../FloatingButtonAction";
import {
  colorPrincipal,
  fontExtraBold,
  fontSemiBold,
  fontLight300,
  fontRegular400,
  fontLight,
  fontMedium500,
  colorSecundario,
} from "../Variables";
import ListCategory from "./ListCategory";

const arr = [
  { id: "1", descripcion: "Tarjeta Banco Santander" },
  { id: "2", descripcion: "Tajeta Banco ICBC" },
  { id: "3", descripcion: "Edesur" },
  { id: "4", descripcion: "Metrogas" },
  { id: "5", descripcion: "ARBA" },
  { id: "6", descripcion: "ARQUI" },
  { id: "7", descripcion: "ANSES" },
  { id: "8", descripcion: "Prestamo Banco ICBC" },
  { id: "9", descripcion: "ABL" },
  { id: "10", descripcion: "Patente ASD 154" },
  { id: "11", descripcion: "Seguro Rivadavia Seguro" },
  { id: "12", descripcion: "Tarjeta Banco Itau" },
  { id: "13", descripcion: "Tarjeta Banco Provincia" },
  { id: "14", descripcion: "Hipoteca Banco Galicia" },
];

const Egresos = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addEgresos = () => {
    console.log("ingresaste a agregar egresos");
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ListCategory list={arr} />
        </ScrollView>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <FloatingButtonAction funcion={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSecundario,
    height: "100%",
  },
  cardContainer: { marginTop: 2.5, marginBottom: 2.5 },
  cardViewContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  cardIcon: {
    fontSize: 20,
    paddingEnd: 5,
    paddingStart: 10,
  },
  viewBtnActions: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardText: {
    fontSize: 20,
    marginStart: 20,
    fontFamily: fontRegular400,
  },
});

export default Egresos;
