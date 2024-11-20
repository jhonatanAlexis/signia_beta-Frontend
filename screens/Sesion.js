import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/native";

export default function Sesion({ texto }) {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/imagenes/wallpaper.jpg")}
      style={styles.background}
    >
      <View style={styles.textoContainer}>
        <AppText style={styles.header} text={texto} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          texto={"Iniciar Sesion"}
          color={"primary"}
          onPress={handleLoginPress}
        />
        <AppButton
          texto={"Registrarse"}
          color={"secondary"}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    padding: 20,
  },
  textoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  header: {
    fontSize: 24
  }
});
