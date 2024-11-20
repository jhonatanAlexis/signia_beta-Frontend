import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, View  } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function Login(){
  const navigation = useNavigation();
    return (
      //para que cuando presione en cualquier parte de la pantalla se quite el teclado
      //input para el form
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <AppText text="Signia beta" style={styles.header} />
          <AppText text={"Email"} />
          <TextInput
            style={styles.input}
            keyboardType="email-address" //tipo de teclado que se muestra
            placeholder="Email"
          />
          <AppText text={"Contraseña"} />
          <TextInput
            style={styles.input}
            secureTextEntry={true} // Oculta el texto ingresado
            placeholder="Contraseña"
          />

          <Text
            onPress={() =>
              navigation.navigate("SolicitarRestablecerContraseña")
            }
          >
            ¿Olvidaste tu contraseña?
          </Text>

          <AppButton
            texto={"Iniciar sesion"}
            color={"primary"}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          />
          <AppButton
            texto={"Ir al menu principal"}
            color={"secondary"}
            onPress={() => {
              navigation.navigate("Sesion");
            }}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 30,
    width: "40%",
    borderColor: colors.black,
    borderWidth: 1, //grosor del borde
    marginBottom: 15,
    textAlign: "center", //alinea el texto
    borderRadius: 8, //radio del borde
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute", //lo pone en la parte superior con position: absolute
    top: 80, // Ajusta la distancia desde la parte superior de la pantalla
    fontSize: 24,
  },
});