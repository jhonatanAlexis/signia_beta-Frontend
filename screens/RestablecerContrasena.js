import React, {useState} from "react";
import {SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, ActivityIndicator } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { restablecerContraseña } from "../axios/AllApis";

export default function RestablecerContraseña(){
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleRestablecerContraseña = async() => {
      setIsLoading(true)
      try{
        const response = await restablecerContraseña(email, codigo, password)
        Alert.alert(response.message)
        navigation.navigate("Login")
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
          <AppText text={"Email"} />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Ingrese su email"
            onChangeText={setEmail}
            editable={!isLoading}
          />
          <AppText text={"Código"} />
          <TextInput
            style={styles.input}
            placeholder="Ingrese el código"
            keyboardType="numeric"
            onChangeText={setCodigo}
            editable={!isLoading}
          />
          <AppText text={"Nueva contraseña"} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Nueva contraseña"
            onChangeText={setPassword}
            editable={!isLoading}
          />

          <AppButton
            texto={"Restablecer contraseña"}
            color={"primary"}
            onPress={handleRestablecerContraseña}
            disabled={isLoading}
          />
          <AppButton
            texto={"Regresar"}
            color={"secondary"}
            onPress={() =>
              navigation.navigate("SolicitarRestablecerContrasena")
            }
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
    paddingHorizontal: "5%",
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
    fontSize: 24,
  },
});