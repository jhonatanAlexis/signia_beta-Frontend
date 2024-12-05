import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, View, Alert, ActivityIndicator } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { actualizarPerfil, getDatosUsuario } from "../axios/AllApis";
import { startCase } from "lodash"; 

export default function ActualizarPerfil() {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("")
  const [apellido_paterno, setApellidoPaterno] = useState("")
  const [apellido_materno, setApellidoMaterno] = useState("")
  const [email, setEmail] = useState("")
  const [fecha_nacimiento, setFechaNacimiento] = useState("")
  const [celular, setCelular] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDatosUsuario = async() => {
      setIsLoading(true)
      try{
        const response = await getDatosUsuario()
        setNombre(response.nombre)
        setApellidoPaterno(response.apellido_paterno)
        setApellidoMaterno(response.apellido_materno)
        setEmail(response.email)
        setFechaNacimiento(response.fecha_nacimiento)
        setCelular(response.celular)
        setRol(response.rol)
      }catch(error){
        Alert.alert(error.response.data.message)
      }finally{
        setIsLoading(false)
      }
    }
    fetchDatosUsuario()
  }, [])

  const handleEditarPerfil = async() => {
    setIsLoading(true)
    try{
      const response = await actualizarPerfil({nombre, apellido_materno, apellido_paterno, email, fecha_nacimiento, celular})
      Alert.alert(response.message)
      navigation.navigate("Dashboard")
    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message)
    }finally{
      setIsLoading(false)
    }
  }

  //confimrar que el usuario quiera actualizar el video (este llamada handleActualizarPerfil)
  const confirmarEditarPerfil = () => {
    Alert.alert("Confirmar actualización", "¿Estás seguro(a) de que deseas actualizar tu perfil?",
      [
        {text: "Cancelar", style: "cancel"},
        {text: "Actualizar", onPress: handleEditarPerfil}
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        <AppText text="Signia beta" style={styles.header} />
        {isLoading && <ActivityIndicator size="large" color="black" />}
        <View style={styles.formContainer}>
          <View style={styles.column}>
            <AppText text={"Nombre(s)"} />
            <TextInput
              style={styles.input}
              value={startCase(nombre)}
              onChangeText={setNombre}
              placeholder={"Nombre"}
              editable={!isLoading}
            />
            <AppText text={"Apellido Paterno"} />
            <TextInput
              style={styles.input}
              placeholder={"Apellido Paterno"}
              value={startCase(apellido_paterno)}
              onChangeText={setApellidoPaterno}
              editable={!isLoading}
            />
            <AppText text={"Apellido Materno"} />
            <TextInput
              style={styles.input}
              placeholder={"Apellido Materno"}
              value={startCase(apellido_materno)}
              onChangeText={setApellidoMaterno}
              editable={!isLoading}
            />
          </View>
          <View style={styles.column}>
            <AppText text={"Email"} />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              editable={!isLoading}
            />
            <AppText text={"Fecha De Nacimiento"} />
            <TextInput
              style={styles.input}
              placeholder={"YYYY-MM-DD"}
              value={fecha_nacimiento}
              onChangeText={setFechaNacimiento}
              editable={!isLoading}
            />
            <AppText text={"Celular"} />
            <TextInput
              style={styles.input}
              placeholder={"Celular"}
              keyboardType="numeric"
              value={celular}
              onChangeText={setCelular}
              editable={!isLoading}
            />
          </View>
        </View>
        <AppButton
          texto={"Actualizar datos"}
          color={"primary"}
          onPress={confirmarEditarPerfil}
          disabled={isLoading}
        />
        <AppButton
          texto={"Ir atras"}
          color={"secondary"}
          onPress={() => navigation.navigate("Dashboard")}
          disabled={isLoading}
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
    borderRadius: 8,
    paddingHorizontal: "10%",
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