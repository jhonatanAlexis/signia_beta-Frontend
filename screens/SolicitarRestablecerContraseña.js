import React, {useState} from "react";
import {SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Alert } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native"
import { solicitarRestablecerContraseña } from "../axios/AllApis";

export default function SolicitarRestablecerContraseña(){
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleSolicitarRestablecerContraseña = async () => {
      setIsLoading(true)
      try{
        const response = await solicitarRestablecerContraseña(email)
        Alert.alert("Restablecer contraseña", response.message)
        navigation.navigate("RestablecerContraseña")
      }catch(error){
        Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
      }finally{
        setIsLoading(false)
      }
    }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={[styles.container, styles.backgroundColor]}>
          <AppText text="Signia beta" style={styles.header} />
          {isLoading && <ActivityIndicator size="large" color="black" />}
          <AppText text={"Solicitar restablecer contraseña"} />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={setEmail}
            editable={!isLoading}
          />

          <AppButton
            texto={"Solicitar"}
            color={"primary"}
            onPress={handleSolicitarRestablecerContraseña}
            disabled={isLoading}
          />
          <AppButton
            texto={"Regresar"}
            color={"secondary"}
            onPress={() => navigation.navigate("Login")}
            disabled={isLoading}
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