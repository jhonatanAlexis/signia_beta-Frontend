import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, Alert, ActivityIndicator  } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { loginUsuario } from "../axios/AllApis";

export default function Login(){
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true)
    try{
      const response = await loginUsuario(email, password)
      Alert.alert("Inicio de sesión existoso", "¡Bienvenido(a)!")
      navigation.navigate("Dashboard")
    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
    }finally{
      setIsLoading(false)
    }
  }

    return (
      //para que cuando presione en cualquier parte de la pantalla se quite el teclado
      //input para el form
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          {isLoading && <ActivityIndicator size="large" color="black" />}
          <AppText text="Signia beta" style={styles.header} />
          <AppText text={"Email"} />
          <TextInput
            style={styles.input}
            keyboardType="email-address" //tipo de teclado que se muestra
            placeholder="Email"
            onChangeText={setEmail}
            editable={!isLoading}
          />
          <AppText text={"Contraseña"} />
          <TextInput
            style={styles.input}
            secureTextEntry={true} // Oculta el texto ingresado
            placeholder="Contraseña"
            onChangeText={setPassword}
            editable={!isLoading}
          />

          <Text
            onPress={() =>
              navigation.navigate("SolicitarRestablecerContrasena")
            }
          >
            ¿Olvidaste tu contraseña?
          </Text>

          <AppButton
            texto={"Iniciar sesion"}
            color={"primary"}
            onPress={handleLogin}
            disabled={isLoading}
          />
          <AppButton
            texto={"Ir al menu principal"}
            color={"secondary"}
            onPress={() => {
              navigation.navigate("Sesion");
            }}
            disabled={isLoading}
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
    height: 35,
    width: "40%",
    borderColor: colors.black,
    borderWidth: 1, //grosor del borde
    marginBottom: 15,
    borderRadius: 8, //radio del borde
    paddingHorizontal: "4%",
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