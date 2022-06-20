import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native-web";
import ListCategory from "./ListCategory";
import { StyleSheet } from "react-native";
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
const Ingreso = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ListCategory list={arr} />
        </ScrollView>
      </SafeAreaView>
      <FloatingButtonAction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSecundario,
    height: "100%",
  },
});

export default Ingreso;
