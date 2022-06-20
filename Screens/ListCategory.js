import * as React from "react";
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
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
import { Card, Title, Paragraph } from "react-native-paper";
const ListCategory = (props) => {
  return props.list.map((x) => (
    <Card style={styles.cardContainer} key={x.id}>
      <View style={styles.cardViewContainer}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.cardText}>{x.descripcion}</Text>
        </View>
        <View style={styles.viewBtnActions}>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity>
              <AntDesign style={styles.cardIcon} name="edit" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity>
              <AntDesign style={styles.cardIcon} name="delete" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  ));
};

const styles = StyleSheet.create({
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

export default ListCategory;
