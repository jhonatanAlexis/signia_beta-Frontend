import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/native";

export default function CargarVideoUsuario({ route }) {
  const navigation = useNavigation();
  const { categoria } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate("VideosUsuario")}>
            <AppText text={"Signia beta"} />
          </TouchableOpacity>
        </View>

        <View style={styles.centerContainer}>
          <AppText text={'"' + categoria + '"'} />
        </View>

        <View style={styles.rightContainer}>
            <TextInput style={styles.input} placeholder="Buscar"/>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContainer}>
              <AppText text={"Aqui va el video del usuario"} />
            </View>
            <View style={styles.buttonsContainer}>
              <AppButton texto={"Actualizar video"} color={"primary"} />
              <AppButton texto={"Eliminar video"} color={"secondary"} />
            </View>
          </View>
        </View>

        <AppButton
          texto={"Ir atras"}
          color={"primary"}
          onPress={() => navigation.navigate("VideosUsuario")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  categoria: {
    textAlign: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
  },
  cardWrapper: {
    width: "45%",
    marginVertical: 10,
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: 180,
    borderRadius: 15,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  input: {
    height: 30,
    width: "100%",
    borderColor: colors.black,
    borderWidth: 1, 
    textAlign: "center", 
    borderRadius: 8, 
  }
});
