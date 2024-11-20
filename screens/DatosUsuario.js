import React from "react";
import {SafeAreaView, StyleSheet } from "react-native";
import AppText from "../components/AppText"
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function DatosUsuario(){
    const navigation = useNavigation();

    return (
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        <AppText text={"Nombre: "} />
        <AppText text={"Apellido paterno: "} />
        <AppText text={"Apellido materno: "} />
        <AppText text={"Email: "} />
        <AppText text={"Fecha de nacimiento: "} />
        <AppText text={"Celular: "} />
        <AppText text={"Rol: "} />
        <AppButton texto={"Ir atras"} color={"primary"} onPress={()=>navigation.navigate("Dashboard")} />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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