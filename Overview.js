import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-web";
import AppbarHeader from "./AppbarHeader";
import FloatingButtonAction from "./FloatingButtonAction";
import DatePicker from "react-native-modern-datepicker";
import ModalApp from "./ModalApp";
import ModalCalendar from "./ModalCalendar";

const Overview = () => {
  const [date, setDate] = useState("");

  return (
    <>
      <AppbarHeader title="Overview" />
      <View>
        <Text style={styles.container}>asñkdañlskdñlas</Text>
        <ModalCalendar />
        {/*   <View
          style={{
            backgroundColor: "black",
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 20,
          }}
        >
          <DatePicker
            options={{
              backgroundColor: "black",
              textHeaderColor: "#FFA25B",
              textDefaultColor: "#F6E7C1",
              selectedTextColor: "#fff",
              mainColor: "#F4722B",
              textSecondaryColor: "#D6C7A1",
              borderColor: "rgba(122, 146, 165, 0.1)",
            }}
            current="2020-07-13"
            selected="2020-07-23"
            mode="calendar"
            style={{ width: 300, heigth: 250, marginTop: 10 }}
            onSelectedChange={(date) => setDate(date)}
          />
          <Text style={{ color: "white" }}>asdakl</Text>
        </View> */}
      </View>
      <FloatingButtonAction />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default Overview;
