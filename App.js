import { StyleSheet, View } from "react-native";
import MyTabs from "./MyTabs";
import { useFonts } from "expo-font";
import {
  Raleway_300Light,
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_300Light,
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
  });
  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
