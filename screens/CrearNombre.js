import React from "react";
import { Text, SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard , ScrollView, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function CrearNombre({route}){
  const {categoria } = route.params
  const navigation = useNavigation()

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <AppText text={"Signia beta"} style={styles.header} />
          <AppText text={"Crear nombre"} />
          <Text style={styles.texto}>
            Nota: Tienes que haber guardado tu video haciendo cada letra del
            abecedario para que existan todas las letras para crear un nombre
          </Text>
          <TextInput style={styles.input} placeholder="Nombre" />
          <AppButton texto={"Crear"} color={"primary"} />
          <AppButton
            texto={"Ir atras"}
            color={"secondary"}
            onPress={() => navigation.navigate("SubcategoriasScreen", {categoria})}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 30,
    width: "40%",
    borderColor: colors.black,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 8,
  },
  texto: {
    marginHorizontal: "5%",
    marginVertical: "3%"
  },
  header: {
    position: "absolute", 
    top: 80, 
    fontSize: 24,
  }
});
