import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, TextInput, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function Register() {
  const navigation = useNavigation();

  const [rol, setRol] = useState("User")
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        {/* contenedor del form (en 2 columnas) */}
        <View style={styles.formContainer}>
          {/* Columna izquierda */}
          <View style={styles.column}>
            <AppText text={"Nombre*"} />
            <TextInput style={styles.input} placeholder="Nombre" />
            <AppText text={"Apellido paterno*"} />
            <TextInput style={styles.input} placeholder="Apellido paterno" />
            <AppText text={"Apellido materno*"} />
            <TextInput style={styles.input} placeholder="Apellido materno" />
            <AppText text={"Fecha de nacimiento"} />
            <TextInput style={styles.input} placeholder="YYYY-MM-DD" />
          </View>

          {/* Columna derecha */}
          <View style={styles.column}>
            <AppText text={"Email*"} />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email"
            />
            <AppText text={"Contraseña*"} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Contraseña"
            />
            <AppText text={"Celular"} />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Celular"
            />
          </View>
        </View>

        <AppButton
          texto={"Registrarse"}
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          texto={"Ir al menú principal"}
          color="secondary"
          onPress={() => navigation.navigate("Sesion")}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  column: {
    flex: 1,
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
  backgroundColor: {
    backgroundColor: colors.background,
  },
  header: {
    position: "absolute", 
    top: 80, 
    fontSize: 24
  },
});
