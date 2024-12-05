import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import AppText from "../components/AppText"
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { getDatosUsuario } from "../axios/AllApis";
import { startCase } from "lodash"; //capitaliza

export default function DatosUsuario(){
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
      const fetchUserData = async () => {
        setIsLoading(true)
        try{
          const response = await getDatosUsuario();
          setUsuario(response)
        }catch(error){
          Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
        }finally{
          setIsLoading(false)
        }
      }
      fetchUserData() //se llama a la funcion
    }, [])

    return (
      //se pone ? para esperar a que se termine de cargar el valor
      //verifica que usuario no sea null, si no lo es imprime el nombre, si si es imprime undifined
      <SafeAreaView style={[styles.container, styles.backgroundColor]}>
        {isLoading && <ActivityIndicator size="large" color="black" />}
        <AppText text="Signia beta" style={styles.header} />
        <AppText text={"Nombre(s): " + startCase(usuario?.nombre)} />
        <AppText text={"Apellido Paterno: " + startCase(usuario?.apellido_paterno)} />
        <AppText text={"Apellido Materno: " + startCase(usuario?.apellido_materno)} />
        <AppText text={"Email: " + usuario?.email} />
        <AppText text={"Fecha De Nacimiento: " + (usuario?.fecha_nacimiento || "No Especificado" )} />
        <AppText text={"Celular: " + (usuario?.celular || "No Especificado" )} />
        <AppButton
          texto={"Ir atras"}
          color={"primary"}
          onPress={() => navigation.navigate("Dashboard")}
          disabled={isLoading}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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