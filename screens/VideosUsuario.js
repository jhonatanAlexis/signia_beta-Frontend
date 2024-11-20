import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function VideosUsuario(){
    const navigation = useNavigation()

    const navigateToCategory = (categoria) => {
      navigation.navigate('CargarVideoUsuario', { categoria })
    }

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")}>
        <AppText style={styles.texto} text={"Signia beta"}/>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.cardsContainer}>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={()=>navigateToCategory("Todos")}>
                <Image
                  source={require("../assets/imagenes/todos.png")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Todos</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigateToCategory("Nombres")}
              >
                <Image
                  source={require("../assets/imagenes/nombres.png")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Nombres</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigateToCategory("Abecedario")}
              >
                <Image
                  source={require("../assets/imagenes/abecedario.png")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Abecedario</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigateToCategory("Hogar")}>
                <Image
                  source={require("../assets/imagenes/hogar.jpg")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Hogar</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigateToCategory("Comida")}>
                <Image
                  source={require("../assets/imagenes/comida.jpg")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Comida</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigateToCategory("Deportes")}>
                <Image
                  source={require("../assets/imagenes/deportes.avif")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Deportes</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigateToCategory("Familia")}>
                <Image
                  source={require("../assets/imagenes/familia.avif")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Familia</Text>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigateToCategory("Numeros")}>
                <Image
                  source={require("../assets/imagenes/numeros.avif")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <Text style={styles.texto}>Números</Text>
            </View>
          </View>

          <AppButton anotherStyle={styles.botonMargen} texto={"Ir atras"} color={"primary"} onPress={()=>navigation.navigate("Dashboard")}/>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "45%",
    height: 180,
    marginVertical: "5%",
    borderRadius: 15,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: "5%"
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  texto: {
    textAlign: "center"
  },
  botonMargen:{
    marginVertical: "5%"
  }
});