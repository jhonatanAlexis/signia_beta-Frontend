import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { VideoView, useVideoPlayer } from "expo-video";

export default function Videos({route}){
  const { nombre, descripcion, categoria } = route.params;
  const navigation = useNavigation();

  const subcategorias = [
    {
      nombre: "Abecedario",
      video: require("../assets/videos/a.mov"),
      descripcion: "A",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/b.mov"),
      descripcion: "B",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/c.mov"),
      descripcion: "C",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/d.mov"),
      descripcion: "D",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/e.mov"),
      descripcion: "E",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/f.mov"),
      descripcion: "F",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/g.mov"),
      descripcion: "G",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/h.mov"),
      descripcion: "H",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/i.mov"),
      descripcion: "I",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/j.mov"),
      descripcion: "J",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/k.mov"),
      descripcion: "K",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/l.mov"),
      descripcion: "L",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/ll.mov"),
      descripcion: "LL",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/m.mov"),
      descripcion: "M",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/n.mov"),
      descripcion: "N",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/letra.mov"),
      descripcion: "Ñ",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/o.mov"),
      descripcion: "O",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/p.mov"),
      descripcion: "P",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/q.mov"),
      descripcion: "Q",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/r.mov"),
      descripcion: "R",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/rr.mov"),
      descripcion: "RR",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/s.mov"),
      descripcion: "S",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/t.mov"),
      descripcion: "T",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/u.mov"),
      descripcion: "U",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/v.mov"),
      descripcion: "V",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/w.mov"),
      descripcion: "W",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/x.mov"),
      descripcion: "X",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/y.mov"),
      descripcion: "Y",
    },
    {
      nombre: "Abecedario",
      video: require("../assets/videos/z.mov"),
      descripcion: "Z",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/cocina.mov"),
      descripcion: "Cocina",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/cama.mov"),
      descripcion: "Cama",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/bano.mov"),
      descripcion: "Baño",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/puerta.mov"),
      descripcion: "Puerta",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/cuarto.mov"),
      descripcion: "Cuarto",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/estufa.mov"),
      descripcion: "Estufa",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/television.mov"),
      descripcion: "Television",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/comedor.mov"),
      descripcion: "Comedor",
    },
    {
      nombre: "Hogar",
      video: require("../assets/videos/closet.mov"),
      descripcion: "Closet",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/pizza.mov"),
      descripcion: "Pizza",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/helado.mov"),
      descripcion: "Helado",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/pollo.mov"),
      descripcion: "Pollo",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/tacos.mov"),
      descripcion: "Tacos",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/torta.mov"),
      descripcion: "Pastel",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/pasta.mov"),
      descripcion: "Pasta",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/hotdog.mov"),
      descripcion: "Hot Dog",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/ensalada.mov"),
      descripcion: "Ensalada",
    },
    {
      nombre: "Comida",
      video: require("../assets/videos/huevo.mov"),
      descripcion: "Huevo",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/futbol.mov"),
      descripcion: "Futbol",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/tennis.mov"),
      descripcion: "Tennis",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/gimnasio.mov"),
      descripcion: "Gimnasio",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/natacion.mov"),
      descripcion: "Natación",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/golf.mov"),
      descripcion: "Golf",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/box.mov"),
      descripcion: "Box",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/ciclismo.mov"),
      descripcion: "Ciclismo",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/karate.mov"),
      descripcion: "Karate",
    },
    {
      nombre: "Deportes",
      video: require("../assets/videos/volley.mov"),
      descripcion: "Volleyball",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/mama.mov"),
      descripcion: "Mamá",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/papa.mov"),
      descripcion: "Papá",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/hermano.mov"),
      descripcion: "Hermano",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/tia.mov"),
      descripcion: "Tia",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/abuelo.mov"),
      descripcion: "Abuelo",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/sobrina.mov"),
      descripcion: "Sobrina",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/yerno.mov"),
      descripcion: "Yerno",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/cunada.mov"),
      descripcion: "Cuñada",
    },
    {
      nombre: "Familia",
      video: require("../assets/videos/primo.mov"),
      descripcion: "Primo",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/uno.mov"),
      descripcion: "1",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/dos.mov"),
      descripcion: "2",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/tres.mov"),
      descripcion: "3",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/cuatro.mov"),
      descripcion: "4",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/cinco.mov"),
      descripcion: "5",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/seis.mov"),
      descripcion: "6",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/siete.mov"),
      descripcion: "7",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/ocho.mov"),
      descripcion: "8",
    },
    {
      nombre: "Numeros",
      video: require("../assets/videos/nueve.mov"),
      descripcion: "9",
    },
  ];

  //filtrar ahora por la descripcion
  const filterSubcategorias = subcategorias.filter(
    (subcategoria) => subcategoria.descripcion === descripcion
  )


  return (
    <SafeAreaView style={styles.container}>
      <AppText text={'"' + descripcion + '"'} />
      <View style={styles.cardContainer}>
        {filterSubcategorias.map((subcategoria, index) => (
          <VideoView
            key={index}
            style={styles.backgroundVideo}
            player={useVideoPlayer(subcategoria.video, player=>{
              //para configurar el player una vez este este creado, en este caso solo puse que el timepo actual del video inicie en 0 segundos
              player.currentTime = 0
            })}
            contentFit="fill" //como el recize mode
          />
        ))}
      </View>
      <AppButton texto={"¡Aprender!"} color={"primary"} onPress={()=>navigation.navigate("Camara")} />
      <AppButton
        texto={"Ir atras"}
        color={"secondary"}
        onPress={() =>
          navigation.navigate("SubcategoriasScreen", { categoria })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center"
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "70%",
    height: "40%",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignContent: "center",
    marginVertical: "4%"
  },
  backgroundVideo: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
});