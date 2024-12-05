import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Modal, StyleSheet, Image, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard() {
  const navigation = useNavigation()
  const [menuVisible, setMenuVisible] = useState(false);
  const navigateToCategory = (categoria) => {
    navigation.navigate("SubcategoriasScreen", { categoria }); //navegando a SubcategoriasScreen (route) y tiene como parametro (categoria)
  };

  const cerrarSesion = async () => {
    try{
      await AsyncStorage.removeItem('token') //elimina el token
      Alert.alert("¡Sesion cerrada con exito!")
      navigation.navigate("Sesion") 
    }catch(error){
      Alert.alert("Error al cerrar sesion")
    }
  }

  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      {/* Encabezado */}
      <View style={styles.headerContainer}>
        {/* Texto de la izquierda */}
        <TouchableOpacity onPress={() => navigation.navigate("VideosUsuario")}>
          <View style={styles.leftContainer}>
            <AppText text={"Mis videos"} />
          </View>
        </TouchableOpacity>

        {/* Texto centrado */}
        <View style={styles.centerContainer}>
          <AppText text={"Signia beta"} />
        </View>

        {/* Icono de menú a la derecha */}
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={() => setMenuVisible(true)}
        >
          <Ionicons name="menu" size={25} />
        </TouchableOpacity>
      </View>
      {/* fin encabezado */}

      {/* menu desplegable gracias al modal que pone contenido encima de una vista */}
      <Modal
        visible={menuVisible}
        transparent={true} //para que el contenido de la vista principal sea visible
        animationType="slide"
      >
        {/* para que cuando se toque en cualquier parte de cierre */}
        {/* para mostrar donde se mostrara el menu y como (el menuContainer envuelve todo el contenedor del menu) */}
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false); //cierra el menu para que no aparezca en la otra pantalla
                navigation.navigate("DatosUsuario");
              }}
            >
              <AppText text={"Mi perfil"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("ActualizarPerfil");
              }}
            >
              <AppText text={"Actualizar perfil"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("EliminarPerfil");
              }}
            >
              <AppText text={"Eliminar perfil"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                cerrarSesion()
              }}
            >
              <AppText text={"Cerrar Sesion"}  />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.cardsContainer}>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigateToCategory("Abecedario")}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: colors.background,
  },
  menuContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 25
  },
  dropdownMenu: {
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    marginRight: 17,
  },
  headerContainer: {
    flexDirection: "row", //una sola fila
    justifyContent: "space-between", //espacio entre el contenido
    paddingHorizontal: 20, //espacio horizontal
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
    flexWrap: "wrap", // Permite que las cards pasen a la siguiente fila
    justifyContent: "space-around",
    paddingHorizontal: "5%",
    flex: 1,
    alignContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  texto: {
    textAlign: "center",
  },
});
