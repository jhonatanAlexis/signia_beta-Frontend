import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View, Alert, ActivityIndicator } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { eliminarPerfil } from "../axios/AllApis";

export default function EliminarPerfil() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("")

  const handleEliminarPerfil = async() => {
    setIsLoading(true)
    try {
      const response = await eliminarPerfil(password)
      Alert.alert(response.message)
      navigation.navigate("Sesion");
    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
    }finally{
      setIsLoading(false)
    }
  }

  const confirmarEliminarPerfil = () => {
    Alert.alert("Confirmar eliminación", "¿Estás seguro(a) de que deseas eliminar tu perfil?",
      [
        {text: "Cancelar", style: "cancel"},
        {text: "Eliminar", onPress: handleEliminarPerfil}
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* array para poder usar mas estilos */}
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        {isLoading && <ActivityIndicator size="large" color="black" />}
        <AppText text={"Ingrese su contraseña"} style={styles.texto} />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Contraseña"}
          onChangeText={setPassword}
          editable={!isLoading}
        />

        <View style={styles.buttonContainer}>
          <AppButton
            texto={"Eliminar cuenta"}
            color={"primary"}
            onPress={confirmarEliminarPerfil}
            disabled={isLoading}
          />
          <AppButton
            texto={"Ir atras"}
            color={"secondary"}
            onPress={() => navigation.navigate("Dashboard")}
            disabled={isLoading}
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