import * as React from "react";
import { Text, View, TouchableOpacity, Platform, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import plus from "./assets/plus.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import Overview from "./Overview";
import Savings from "./Savings";
import Goals from "./Goals";
import Statistics from "./Statistics";

const Tab = createBottomTabNavigator();

function Prueba() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Overview"
          component={Overview}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={{ alignItems: "center" }}>
                  <MaterialIcons name="receipt-long" color="red" size={25} />
                  <Text>Overview</Text>
                </View>
              ) : (
                <MaterialIcons name="receipt-long" color="gray" size={25} />
              ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={{ alignItems: "center" }}>
                  <Ionicons name="stats-chart" color="red" size={25} />
                  <Text>Statistics</Text>
                </View>
              ) : (
                <Ionicons name="stats-chart" color="gray" size={25} />
              ),
          }}
        />
        <Tab.Screen
          name="Savings"
          component={Savings}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="text-box-check"
                    color="red"
                    size={25}
                  />
                  <Text>Savings</Text>
                </View>
              ) : (
                <MaterialCommunityIcons
                  name="text-box-check"
                  color="gray"
                  size={25}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Goals"
          component={Goals}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="text-box-check"
                    color="red"
                    size={25}
                  />
                  <Text>Goals</Text>
                </View>
              ) : (
                <MaterialCommunityIcons
                  name="text-box-check"
                  color="gray"
                  size={25}
                />
              ),
          }}
        />
        {/*    <Tab.Screen
          name={"EmptyScreen"}
          component={Mediomedio}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <TouchableOpacity
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: "red",
                  marginBottom: Platform.OS == "android" ? 30 : 30,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Image
                    source={plus}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            ),
          }}
        ></Tab.Screen> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Prueba;
