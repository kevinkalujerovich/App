import { StyleSheet, View } from "react-native";
import MyTabs from "./MyTabs";
import Prueba from "./prueba";
export default function App() {
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
