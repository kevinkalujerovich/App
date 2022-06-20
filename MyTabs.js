import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Overview from "./Overview";
import Statistics from "./Statistics";
import Categories from "./Categories";
import Savings from "./Savings";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      activeColor="black"
      inactiveColor="black"
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Overview}
        options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="receipt-long"
                style={{
                  fontSize: 25,
                  color: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Estadísticas"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="equalizer"
                style={{
                  fontSize: 25,
                  color: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Ahorros"
        component={Savings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="piggy-bank"
                style={{
                  fontSize: 25,
                  color: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="tag"
                style={{
                  fontSize: 25,
                  color: focused ? "black" : "gray",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
