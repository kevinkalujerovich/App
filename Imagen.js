import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native-web";
import {
  colorPrincipal,
  fontExtraBold,
  fontSemiBold,
  fontLight,
} from "./Variables";

const Imagen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 220,
          height: 200,
        }}
        source={require("./assets/morlacoIcon.png")}
      />
      <Text>asñldjaslñdjslña</Text>
      <Text>asñldjaslñdjslña</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Imagen;
