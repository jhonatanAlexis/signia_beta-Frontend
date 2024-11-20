import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function ActualizarPerfil() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        <View style={styles.formContainer}>
          <View style={styles.column}>
            <AppText text={"Nombre"} />
            <TextInput style={styles.input} placeholder={"Nombre"} />
            <AppText text={"Apellido paterno"} />
            <TextInput style={styles.input} placeholder={"Apellido paterno"} />
            <AppText text={"Apellido materno"} />
            <TextInput style={styles.input} placeholder={"Apellido materno"} />
            <AppText text={"Email"} />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.column}>
            <AppText text={"Fecha de nacimiento"} />
            <TextInput
              style={styles.input}
              placeholder={"Fecha de nacimiento"}
            />
            <AppText text={"Celular"} />
            <TextInput
              style={styles.input}
              placeholder={"Celular"}
              keyboardType="numeric"
            />
            <AppText text={"Rol"} />
            <TextInput style={styles.input} placeholder={"Rol"} />
          </View>
        </View>
        <AppButton
          texto={"Actualizar datos"}
          color={"primary"}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <AppButton
          texto={"Ir atras"}
          color={"secondary"}
          onPress={() => navigation.navigate("Dashboard")}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "90%",
    borderColor: colors.black,
    borderWidth: 1,
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 8,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  header: {
    position: "absolute",
    top: 80,
    fontSize: 24,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  backgroundColor: {
    backgroundColor: colors.background,
  },
});