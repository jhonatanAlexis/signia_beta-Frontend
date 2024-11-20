import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function EliminarPerfil() {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* array para poder usar mas estilos */}
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        <AppText text={"Ingrese su contraseña"} style={styles.texto} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder={"Contraseña"} />

        <View style={styles.buttonContainer}>
          <AppButton
            texto={"Eliminar cuenta"}
            color={"primary"}
            onPress={() => navigation.navigate("Sesion")}
          />
          <AppButton
            texto={"Ir atras"}
            color={"secondary"}
            onPress={() => navigation.navigate("Dashboard")}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "50%",
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: 5,
    textAlign: "center",
    borderRadius: 8,
    marginHorizontal: "auto",
  },
  texto: {
    textAlign: "center",
  },
  buttonContainer: {
    marginHorizontal: "auto",
  },
  backgroundColor: {
    backgroundColor: colors.background,
  },
  header: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
    fontSize: 24
  },
});