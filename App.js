import { StyleSheet, View } from "react-native";
import MyTabs from "./MyTabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Raleway_300Light,
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
  Raleway_400Regular,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_300Light,
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_500Medium,
  });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
