import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native-web";
import { TextInput, RadioButton, Divider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { checkPluginState } from "react-native-reanimated/lib/reanimated2/core";

const ModalAddCategory = (props) => {
  const [checked, setChecked] = React.useState("first");
  const [text, setText] = React.useState("");

  const buttonAceptar = () => {
    props.hideModal();
    console.log({ checked: checked, text: text });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textMainTitle}>AGREGAR CATEGORIA</Text>
        <Text style={styles.textMainSubtitle}>Tipo de Categoria</Text>
        <View style={styles.containerViewComponents}>
          <View style={styles.containerViewRadiobutton}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color="#00CED1"
            />
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.textRadioButton}>Ingreso</Text>
            </View>
          </View>
          <View style={styles.containerViewRadiobutton}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color="#00CED1"
              fontSize="10"
            />
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.textRadioButton}>Egreso</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textMainSubtitle}>Descripción</Text>
        <TextInput
          label=""
          mode="outlined"
          style={{ height: 35 }}
          value={text}
          activeOutlineColor="gray"
          onChangeText={(text) => setText(text)}
        />
        <View style={styles.containerViewButtons}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.hideModal}
            style={styles.viewButtonCancel}
          >
            <Text style={styles.textCancel}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={buttonAceptar}
            style={styles.viewButtonAceptar}
          >
            <Text style={styles.textAceptar}>ACEPTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 5,
  },
  textMainTitle: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 13,
    marginBottom: 10,
  },
  textMainSubtitle: {
    marginTop: 30,
    fontFamily: "Raleway_600SemiBold",
  },
  containerViewComponents: {
    flexDirection: "row",
  },
  containerViewRadiobutton: {
    flexDirection: "row",
    paddingRight: 8,
    height: 40,
  },
  textRadioButton: {
    fontSize: 15,
    fontFamily: "Raleway_800ExtraBold",
  },
  viewButtonCancel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    borderColor: "black",
    borderWidth: 1,
    borderColor: "black",
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    elevation: 2,
  },
  viewButtonAceptar: {
    backgroundColor: "#00CED1",
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  textCancel: {
    color: "color",
    fontSize: 10,
    fontFamily: "Raleway_800ExtraBold",
  },
  textAceptar: {
    color: "black",
    fontSize: 10,
    fontFamily: "Raleway_800ExtraBold",
  },
  containerViewButtons: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "flex-end",
  },
});

export default ModalAddCategory;
