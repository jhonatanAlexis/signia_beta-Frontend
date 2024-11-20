import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export default function SolicitarRestablecerContraseña(){
    const navigation = useNavigation()

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={[styles.container, styles.backgroundColor]}>
          <AppText text="Signia beta" style={styles.header} />
          <AppText text={"Solicitar restablecer contraseña"} />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
          />

          <AppButton
            texto={"Solicitar"}
            color={"primary"}
            onPress={() => navigation.navigate("RestablecerContraseña")}
          />
          <AppButton
            texto={"Regresar"}
            color={"secondary"}
            onPress={() => navigation.navigate("Login")}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: "40%",
    borderColor: colors.black,
    borderWidth: 1,
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 8,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  backgroundColor: {
    backgroundColor: colors.background,
  },
  header: {
    position: "absolute",
    top: 80,
    fontSize: 24
  },
});