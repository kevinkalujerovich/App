import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Overview from "./Overview";
import Statistics from "./Statistics";
import Goals from "./Goals";
import Savings from "./Savings";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#0c8cfc"
          inactiveColor="white"
          barStyle={{
            backgroundColor: "white",
            height: 60,
          }}
        >
          <Tab.Screen
            name="Overwiew"
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
                      color: focused ? "#0c8cfc" : "#32322f",
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Statistics"
            component={Statistics}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <MaterialIcons
                    name="equalizer"
                    style={{
                      fontSize: 25,
                      color: focused ? "#0c8cfc" : "#32322f",
                    }}
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Savings"
            component={Savings}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <MaterialCommunityIcons
                    name="piggy-bank"
                    style={{
                      fontSize: 25,
                      color: focused ? "#0c8cfc" : "#32322f",
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Goals"
            component={Goals}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <MaterialCommunityIcons
                    name="text-box-check"
                    style={{
                      fontSize: 25,
                      color: focused ? "#0c8cfc" : "#32322f",
                    }}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MyTabs;
