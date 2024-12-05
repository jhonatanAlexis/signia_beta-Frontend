import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, TextInput, StyleSheet, View, Alert, ActivityIndicator} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { registrarUsuario } from "../axios/AllApis";

export default function Register() {
  const navigation = useNavigation();

  //se inicializan en vacio los datos
  const [nombre, setNombre] = useState("")
  const [apellido_paterno, setApellidoPaterno] = useState("")
  const [apellido_materno, setApellidoMaterno] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fecha_nacimiento, setFechaNacimiento] = useState("")
  const [celular, setCelular] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async() =>{
    setIsLoading(true)
    try{
      const response = await registrarUsuario({nombre, apellido_materno, apellido_paterno, email, password, fecha_nacimiento, celular}) //se pasan los datos a la api (como espera un objeto se pasan los datos en {})
      Alert.alert(response.message) //muestra el mensaje del backend
      navigation.navigate("Login")
    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message); //se tiene que poner llamando a data cuando es error
    }finally{
      setIsLoading(false)
    }
  }

  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        {isLoading && <ActivityIndicator size="large" color="black" />}
        <AppText text="Signia beta" style={styles.header} />
        {/* contenedor del form (en 2 columnas) */}
        <View style={styles.formContainer}>
          {/* Columna izquierda */}
          <View style={styles.column}>
            <AppText text={"Nombre(s) *"} />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={setNombre} //cuando se cambie el texto se llamara a set para actualizar el dato de nombre a ese que se acaba de escribir
              editable={!isLoading}
            />
            <AppText text={"Apellido paterno *"} />
            <TextInput
              style={styles.input}
              placeholder="Apellido Paterno"
              onChangeText={setApellidoPaterno}
              editable={!isLoading}
            />
            <AppText text={"Apellido Materno *"} />
            <TextInput
              style={styles.input}
              placeholder="Apellido Materno"
              onChangeText={setApellidoMaterno}
              editable={!isLoading}
            />
            <AppText text={"Fecha De Nacimiento"} />
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              onChangeText={setFechaNacimiento}
              editable={!isLoading}
            />
          </View>

          {/* Columna derecha */}
          <View style={styles.column}>
            <AppText text={"Email *"} />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={setEmail}
              editable={!isLoading}
            />
            <AppText text={"Contraseña *"} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Contraseña"
              onChangeText={setPassword}
              editable={!isLoading}
            />
            <AppText text={"Celular"} />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Celular"
              onChangeText={setCelular}
              editable={!isLoading}
            />
          </View>
        </View>

        <AppButton
          texto={"Registrarse"}
          color="primary"
          onPress={handleRegister}
          disabled={isLoading}
        />
        <AppButton
          texto={"Ir al menú principal"}
          color="secondary"
          onPress={() => navigation.navigate("Sesion")}
          disabled={isLoading}
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
    borderRadius: 8,
    paddingHorizontal: "10%"
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
