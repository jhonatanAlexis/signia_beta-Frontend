import React from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton"
import { useNavigation } from "@react-navigation/native";

export default function SubcategoriasScreen({ route }) {
  const navigateToVideos = (nombre, descripcion, categoria) => (
    navigation.navigate("Videos", { nombre , descripcion, categoria})
  )

  const navigateToNombres = (categoria) => (
    navigation.navigate("CrearNombre", {categoria})
  )

  const navigation = useNavigation();
  const { categoria } = route.params; //obtiene el parametro de la ruta ("categoria")

  const subcategorias = [
    {nombre: "Abecedario", imagen: require("../assets/imagenes/a.jpg.avif"),descripcion: "A",categoria: categoria},
    {nombre: "Abecedario",imagen: require("../assets/imagenes/b.avif"),descripcion: "B",categoria: categoria},
    {nombre: "Abecedario", imagen: require("../assets/imagenes/c.png"),descripcion: "C",categoria: categoria},
    {nombre: "Abecedario", imagen: require("../assets/imagenes/d.avif"),descripcion: "D",categoria: categoria},
    {nombre: "Abecedario",imagen: require("../assets/imagenes/e.png"),descripcion: "E",categoria: categoria},
    {nombre: "Abecedario", imagen: require("../assets/imagenes/f.webp"),descripcion: "F",categoria: categoria},
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/g.jpg"),
      descripcion: "G",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/h.png"),
      descripcion: "H",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/i.jpg"),
      descripcion: "I",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/j.png"),
      descripcion: "J",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/k.avif"),
      descripcion: "K",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/l.png"),
      descripcion: "L",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/ll.png"),
      descripcion: "LL",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/m.png"),
      descripcion: "M",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/n.jpg"),
      descripcion: "N",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/letra.png"),
      descripcion: "Ñ",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/o.avif"),
      descripcion: "O",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/p.avif"),
      descripcion: "P",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/q.avif"),
      descripcion: "Q",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/r.avif"),
      descripcion: "R",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/rr.avif"),
      descripcion: "RR",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/s.avif"),
      descripcion: "S",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/t.png"),
      descripcion: "T",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/u.avif"),
      descripcion: "U",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/v.avif"),
      descripcion: "V",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/w.avif"),
      descripcion: "W",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/x.avif"),
      descripcion: "X",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/y.avif"),
      descripcion: "Y",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/z.avif"),
      descripcion: "Z",
      categoria: categoria,
    },
    {
      nombre: "Abecedario",
      imagen: require("../assets/imagenes/nombres.png"),
      descripcion: "Nombres",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/cocina.avif"),
      descripcion: "Cocina",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/cama.avif"),
      descripcion: "Cama",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/bano.avif"),
      descripcion: "Baño",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/puerta.avif"),
      descripcion: "Puerta",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/cuarto.avif"),
      descripcion: "Cuarto",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/estufa.avif"),
      descripcion: "Estufa",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/tv.avif"),
      descripcion: "Television",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/comedor.avif"),
      descripcion: "Comedor",
      categoria: categoria,
    },
    {
      nombre: "Hogar",
      imagen: require("../assets/imagenes/closet.avif"),
      descripcion: "Closet",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/pizza.avif"),
      descripcion: "Pizza",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/helado.avif"),
      descripcion: "Helado",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/pollo.avif"),
      descripcion: "Pollo",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/taco.avif"),
      descripcion: "Tacos",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/pastel.jpg"),
      descripcion: "Pastel",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/pasta.jpg"),
      descripcion: "Pasta",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/hotdog.avif"),
      descripcion: "Hot Dog",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/ensalada.avif"),
      descripcion: "Ensalada",
      categoria: categoria,
    },
    {
      nombre: "Comida",
      imagen: require("../assets/imagenes/huevo.jpg"),
      descripcion: "Huevo",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/futbol.avif"),
      descripcion: "Futbol",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/tennis.avif"),
      descripcion: "Tennis",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/gym.avif"),
      descripcion: "Gimnasio",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/natacion.jpg"),
      descripcion: "Natación",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/golf.avif"),
      descripcion: "Golf",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/box.avif"),
      descripcion: "Box",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/ciclismo.avif"),
      descripcion: "Ciclismo",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/karate.jpg"),
      descripcion: "Karate",
      categoria: categoria,
    },
    {
      nombre: "Deportes",
      imagen: require("../assets/imagenes/volley.avif"),
      descripcion: "Volleyball",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/mama.avif"),
      descripcion: "Mamá",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/papa.avif"),
      descripcion: "Papá",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/hermano.jpg"),
      descripcion: "Hermano",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/tia.jpg"),
      descripcion: "Tia",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/abuelo.webp"),
      descripcion: "Abuelo",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/sobrina.avif"),
      descripcion: "Sobrina",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/hombre.jpg"),
      descripcion: "Yerno",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/cunada.jpg"),
      descripcion: "Cuñada",
      categoria: categoria,
    },
    {
      nombre: "Familia",
      imagen: require("../assets/imagenes/primo.jpg"),
      descripcion: "Primo",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/1.png"),
      descripcion: "1",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/2.png"),
      descripcion: "2",
      categoria: categoria
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/3.png"),
      descripcion: "3",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/4.avif"),
      descripcion: "4",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/5.png"),
      descripcion: "5",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/6.jpg"),
      descripcion: "6",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/7.jpg"),
      descripcion: "7",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/8.avif"),
      descripcion: "8",
      categoria: categoria,
    },
    {
      nombre: "Numeros",
      imagen: require("../assets/imagenes/9.png"),
      descripcion: "9",
      categoria: categoria,
    },
  ];

  //filter crea un nuevo array con los elementos de subcategorias y lo almacena en la variable filterSubcategorias
  const filterSubcategorias = subcategorias.filter(
    //por cada objeto en subcategorias  se compara el valor de la propiedad nombre con el nombre de la categoria que le pase en los parametros de la ruta {categoria}
    //subcategoria es el array que va recurriendo uno por uno hasta encontrar el correcto
    //basicamente estamos guardando en el nuevo array (subcategoria) todos los elementos de "subcategorias" donde coincida el "nombre" de este y la categoria que le pase desestructurando {categoria}
    (subcategoria) => subcategoria.nombre === categoria
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <AppText text={"Signia beta"} />
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <AppText text={categoria} />
        </View>

        <View style={styles.rightContainer}>
          <></>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          {/* mapea sobre el array filterSubcategorias, asgina una variable nueva llamada subcategoria que es donde se va iterando y la key va de la par con index para asignar una clave a cada elemento que se renderizara */}
          {filterSubcategorias.map((subcategoria, index) => (
            <TouchableOpacity
              onPress={() =>
                  subcategoria.descripcion === "Nombres"
                  ? navigateToNombres(subcategoria.categoria)
                  : navigateToVideos(
                      subcategoria.nombre,
                      subcategoria.descripcion,
                      subcategoria.categoria
                    )
              }
              style={styles.cardContainer}
              key={index}
            >
              <Image source={subcategoria.imagen} style={styles.cardImage} />
              <AppText text={subcategoria.descripcion} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <AppButton
        texto={"Regresar"}
        color={"primary"}
        onPress={() => navigation.navigate("Dashboard")}
        anotherStyle={styles.atras}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "30%",
    height: 160,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    shadowOffset: { width: 2, height: 5 },
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
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
  atras: {
    alignSelf: "center"
  },
});
