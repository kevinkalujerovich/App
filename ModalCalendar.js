import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import Modal from "react-native-modal";
import { FontAwesome } from "@expo/vector-icons";
import { colorPrincipal } from "./Variables";

function ModalCalendar() {
  const [isModalVisible, setModalVisible] = useState(false);
  const dateNow = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(dateNow);
  const [datePreview, setDatePreview] = useState("");

  const buttonAceptar = () => {
    setDate(datePreview);
    toggleModal();
  };

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.viewContainerButtonsMain}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome
            name="angle-left"
            style={{ fontSize: 15, color: "white" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}>
          <Button
            title={
              mes[new Date(date).getMonth()] +
              " " +
              new Date(date).getFullYear()
            }
            onPress={toggleModal}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome
            name="angle-right"
            style={{ fontSize: 15, color: "white" }}
          />
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
        <View style={styles.viewContainerText}>
          <Text style={styles.textYear}>
            {new Date(datePreview).getFullYear().toString()}
          </Text>
          <Text style={styles.textDay}>
            {days[new Date(datePreview).getDay()] +
              ", " +
              new Date(datePreview).getDate().toString() +
              " " +
              mes[new Date(datePreview).getMonth().toString()] +
              " ."}
          </Text>
        </View>
        <DatePicker
          options={{
            backgroundColor: "white",
            textHeaderColor: "black",
            textDefaultColor: "black",
            selectedTextColor: "white",
            fontWeight: "bold",
            mainColor: "#0c8cfc",
            textSecondaryColor: "black",
            borderColor: "rgba(122, 146, 165, 0.1)",
            borderBottomColor: "3px solid red",
          }}
          current={date}
          selected={date}
          mode="calendar"
          style={{
            width: 280,
            heigth: 280,
          }}
          onSelectedChange={(date) => setDatePreview(date)}
        />
        <View style={styles.viewContainerButton}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={toggleModal}
          >
            <Text style={styles.appButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={buttonAceptar}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  viewContainerButtonsMain: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  touchableOpacityButton: {},
  textYear: {
    color: "gray",
    fontSize: 15,
    marginLeft: 10,
  },
  textDay: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  appButtonContainer: {
    width: 140,
    borderWidth: 0.1,
    borderRightColor: "#ECF0F1",
    borderColor: "#ECF0F1",
  },
  appButtonText: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    margin: 10,
  },
  viewContainerButton: {
    width: 280,
    heigth: 280,
    backgroundColor: "white",
    flexDirection: "row",
  },
  viewContainerText: {
    width: 280,
    heigth: 280,
    backgroundColor: "#71f09b",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colorPrincipal,
  },
});

export default ModalCalendar;
