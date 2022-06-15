import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
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
    "Diciembre",
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
        animationInTiming={10}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "#7bed9f",
            }}
          >
            <View style={{ marginBottom: 5, marginTop: 5, marginLeft: 20 }}>
              <Text style={styles.textYear}>{date.substring(0, 4)}</Text>
              <Text style={styles.textDay}>
                {days[new Date(date).getDay()] +
                  "., " +
                  new Date(date).getDate().toString() +
                  " " +
                  new Date(date).getMonth().toString()}
              </Text>
            </View>
            {/*        +  */}
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
              }}
              current="2020-07-13"
              selected="2020-07-23"
              mode="calendar"
              style={{ width: 300, heigth: 250 }}
              onSelectedChange={(date) => setDate(date)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  textYear: {
    color: "gray",
    fontSize: 15,
  },
  textDay: {
    color: "white",
    fontSize: 25,
  },
  modalContainer: {
    justifyContent: "center",
    flexDirection: "row-reverse",
    marginLeft: 30,
    marginRight: 30,
  },
});

export default ModalCalendar;
