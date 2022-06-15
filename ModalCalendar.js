import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import Modal from "react-native-modal";

function ModalCalendar() {
  const [isModalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState("");
  console.log(date);
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const mese = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        animationIn={"slideInUp"}
        animationOut={"slideOutUp"}
        animationInTiming={10}
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 280,
            heigth: 280,
            backgroundColor: "#71f09b",
          }}
        >
          <Text style={styles.textYear}>{date.substring(0, 4)}</Text>
          <Text style={styles.textDay}>
            {days[new Date(date).getDay()] +
              ", " +
              new Date(date).getDate().toString() +
              " " +
              mese[new Date(date).getMonth().toString()] +
              "."}
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
          current="2020-07-13"
          selected="2020-07-23"
          mode="calendar"
          style={{
            width: 280,
            heigth: 280,
          }}
          onSelectedChange={(date) => setDate(date)}
        />
        <View
          style={{
            width: 280,
            heigth: 280,
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default ModalCalendar;
