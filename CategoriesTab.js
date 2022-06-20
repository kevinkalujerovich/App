import * as React from "react";
import { Text, View } from "react-native";
import {
  colorPrincipal,
  fontExtraBold,
  fontSemiBold,
  fontLight300,
  fontRegular400,
  fontLight,
  fontMedium500,
  colorSecundario,
} from "./Variables";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function Ingreso() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function Egreso() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function CategoriesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 2,
        },
        tabBarLabelStyle: { fontSize: 14, fontFamily: fontMedium500 },
        tabBarStyle: {
          height: 30,
          justifyContent: "center",
          backgroundColor: colorPrincipal,
        },
      }}
    >
      <Tab.Screen name="Ingreso (29)" component={Ingreso} />
      <Tab.Screen name="Egreso (9)" component={Egreso} />
    </Tab.Navigator>
  );
}
