import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Alert ,Keyboard, ActivityIndicator} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/native";
import { VideoView, createVideoPlayer, useVideoPlayer } from "expo-video";
import { misVideos, videosCategoria, eliminarVideo, buscarVideo } from "../axios/AllApis";
import { TouchableWithoutFeedback } from "react-native";

export default function CargarVideoUsuario({ route }) {
  const navigation = useNavigation()
  const { categoria } = route.params;
  const [videosUris, setVideosUris] = useState([]) //como son varias uris y estan en arreglos se pone igual como arreglo, los mismo con nombre y categoria
  const [videosNombres, setVideosNombres] = useState([])
  const [videosCategorias, setVideosCategorias] = useState([])
  const [videoPlayers, setVideoPlayers] = useState([]); //crear un arreglo de videoPlayers para cada URI
  const [nombrevideoABuscar, setNombreVideoABuscar] = useState("")
  const [videoABuscarUri, setVideoABuscarUri] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true)
      try {
        let response
        if (categoria === "Todos") {
          response = await misVideos();
          //mapea sobre el resultado para obtener solo los secure_url, los mismo con nombre y categoria
          const secure_urls = response.videos.map((video) => video.secure_url);
          const nombres = response.videos.map((video) => video.nombre_video);
          const categorias = response.videos.map((video) => video.categoria_video)
          setVideosUris(secure_urls);
          setVideosNombres(nombres);
          setVideosCategorias(categorias);
        } else {
          response = await videosCategoria(categoria);
          const secure_urls = response.videos.map((video) => video.secure_url)
          const nombres = response.videos.map((video) => video.nombre_video)
          const categorias = response.videos.map((video) => video.categoria_video)
          setVideosUris(secure_urls)
          setVideosNombres(nombres)
          setVideosCategorias(categorias)
        }
      } catch (error) {
        console.log("¡Ups! Algo no salió bien", error.response.data.message);
      }finally{
        setIsLoading(false)
      }
    }
    fetchVideos()
  }, [])

  useEffect(() => {
    const players = videosUris.map((uri) => createVideoPlayer(uri)) //crear un player por cada URI
    setVideoPlayers(players)
  }, [videosUris]); //se ejecuta cada vez que videoUri cambie

  const playerVideoABuscar = useVideoPlayer(videoABuscarUri)

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true)
      try {
        let response
        if (categoria === "Todos") {
          response = await misVideos();
          //mapea sobre el resultado para obtener solo los secure_url, los mismo con nombre y categoria
          const secure_urls = response.videos.map((video) => video.secure_url);
          const nombres = response.videos.map((video) => video.nombre_video);
          const categorias = response.videos.map((video) => video.categoria_video)
          setVideosUris(secure_urls);
          setVideosNombres(nombres);
          setVideosCategorias(categorias);
        } else {
          response = await videosCategoria(categoria);
          const secure_urls = response.videos.map((video) => video.secure_url)
          const nombres = response.videos.map((video) => video.nombre_video)
          const categorias = response.videos.map((video) => video.categoria_video)
          setVideosUris(secure_urls)
          setVideosNombres(nombres)
          setVideosCategorias(categorias)
        }
      } catch (error) {
        console.log("¡Ups! Algo no salió bien", error.response.data.message);
      }finally{
        setIsLoading(false)
      }
    }
    fetchVideos()
  }, [])

  useEffect(() => {
    const players = videosUris.map((uri) => createVideoPlayer(uri)) //crear un player por cada URI
    setVideoPlayers(players)
  }, [videosUris]); //se ejecuta cada vez que videoUri cambie


  const handleEliminarVideo = async(categoria, nombre_video) => {
    setIsLoading(true)
    try{
      const response = await eliminarVideo(categoria, nombre_video)
      Alert.alert(response.message)

      // Filtrar el video eliminado
      const updatedUris = videosUris.filter((_, index) => videosNombres[index] !== nombre_video)
      const updatedNombres = videosNombres.filter((_, index) => videosNombres[index] !== nombre_video)
      const updatedCategorias = videosCategorias.filter((_, index) => videosNombres[index] !== nombre_video)

      // Actualizar los estados
      setVideosUris(updatedUris)
      setVideosNombres(updatedNombres)
      setVideosCategorias(updatedCategorias)

      // También actualiza los videoPlayers
      const updatedPlayers = updatedUris.map((uri) => createVideoPlayer(uri))
      setVideoPlayers(updatedPlayers)

    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message)
    }finally{
      setIsLoading(false)
    }
  }

  const confirmEliminarVideo = (categoria, nombre_video) => {
    Alert.alert("Confirmar eliminación",`¿Estás seguro(a) de que deseas eliminar el video "${nombre_video}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", onPress: () => handleEliminarVideo(categoria, nombre_video) }
      ]
    )
  }

  const handleBuscarVideo = async() => {
    Keyboard.dismiss() //para que cuando se llame se quite el teclado
    //verifica que se haya escrito un video a buscar (si no hay uno no se llamara a la api)
    if (nombrevideoABuscar === "") { 
      Alert.alert("¡Ups! Algo no salió bien", "Por favor, proporciona el nombre del video que deseas buscar")
      return
    }

    setIsLoading(true)
    try{
      const response = await buscarVideo(categoria, nombrevideoABuscar)
      setVideoABuscarUri(response.secure_url)
      Alert.alert(response.message)
    }catch(error){
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
    }finally{
      setIsLoading(false)
    }
  }

  const handleInputChange = (inputValue) => {
    //se la pasa al nombre a buscar lo que se puso en input_value
    setNombreVideoABuscar(inputValue)
    //si el input esta vacio resetea la uri del video a null
    if (inputValue === "") {
      Keyboard.dismiss() 
      setVideoABuscarUri(null)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("VideosUsuario")}
          >
            <AppText text={"Signia beta"} />
          </TouchableOpacity>
        </View>

        <View style={styles.centerContainer}>
          <AppText text={`${categoria}`} />
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Buscar"
              onChangeText={handleInputChange}
              editable={!isLoading}
            />
            <TouchableOpacity onPress={handleBuscarVideo} disabled={isLoading}>
              <Icon name="search" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mostrar solo el video que el usuario buscó si videoABuscarUri tiene un valor */}
      {videoABuscarUri ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1 }}>
            <VideoView
              player={playerVideoABuscar}
              style={styles.backgroundVideoABuscar}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Si no hay videos, muestra el ActivityIndicator mientras se cargan */}
          {/* poniendo un _ es una forma para decir que no es importante esa variable o sea que no se usará */}
          {/* se pone lenght porque es un arreglo */}
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                color="black"
                style={styles.indicator}
              />
            </View>
          ) : videosUris.length > 0 ? (
            videosUris.map((_, index) => (
              <View style={styles.cardsContainer} key={index}>
                <View style={styles.cardWrapper}>
                  <View style={styles.cardContainer}>
                    <AppText text={videosCategorias[index]} />
                    <AppText text={`"${videosNombres[index]}"`} />
                    <VideoView
                      player={videoPlayers[index]}
                      style={styles.backgroundVideo}
                    />
                  </View>
                  {categoria === "Todos" ? (
                    videosCategorias[index] === "Nombres" ? (
                      <View style={styles.buttonsContainer}>
                        <AppButton
                          texto={"Actualizar"}
                          color={"primary"}
                          onPress={() =>
                            navigation.navigate("CrearNombre", {
                              categoria: "Abecedario",
                            })
                          }
                          disabled={isLoading}
                        />
                        <AppButton
                          texto={"Eliminar"}
                          color={"secondary"}
                          onPress={() =>
                            confirmEliminarVideo(
                              videosCategorias[index],
                              videosNombres[index]
                            )
                          }
                        />
                      </View>
                    ) : (
                      <View style={styles.buttonsContainer}>
                        <AppButton
                          texto={"Actualizar"}
                          color={"primary"}
                          onPress={() =>
                            navigation.navigate("Videos", {
                              descripcion: videosNombres[index],
                              categoria: videosCategorias[index],
                            })
                          }
                          disabled={isLoading}
                        />
                        <AppButton
                          texto={"Eliminar"}
                          color={"secondary"}
                          onPress={() =>
                            confirmEliminarVideo(
                              videosCategorias[index],
                              videosNombres[index]
                            )
                          }
                          disabled={isLoading}
                        />
                        {/* se pasa como funcion flecha el confirmEliminarVideo porque por los parentesis de los parametros se ejecuta inmediatamente y no espera al hacer click */}
                      </View>
                    )
                  ) : categoria === "Nombres" ? (
                    <View style={styles.buttonsContainer}>
                      <AppButton
                        texto={"Actualizar"}
                        color={"primary"}
                        onPress={() =>
                          navigation.navigate("CrearNombre", {
                            categoria: "Abecedario",
                          })
                        }
                        disabled={isLoading}
                      />
                      <AppButton
                        texto={"Eliminar"}
                        color={"secondary"}
                        onPress={() =>
                          confirmEliminarVideo(
                            videosCategorias[index],
                            videosNombres[index]
                          )
                        }
                      />
                    </View>
                  ) : (
                    <View style={styles.buttonsContainer}>
                      <AppButton
                        texto={"Actualizar"}
                        color={"primary"}
                        onPress={() =>
                          navigation.navigate("Videos", {
                            descripcion: videosNombres[index],
                            categoria: videosCategorias[index],
                          })
                        }
                        disabled={isLoading}
                      />
                      <AppButton
                        texto={"Eliminar"}
                        color={"secondary"}
                        onPress={() =>
                          confirmEliminarVideo(
                            videosCategorias[index],
                            videosNombres[index]
                          )
                        }
                        disabled={isLoading}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))
          ) : (
            <AppText
              text={
                "No se encontraron videos asociados a este usuario. ¡Graba uno para empezar!"
              }
              style={styles.text}
            />
          )}
        </ScrollView>
      )}

      {videoABuscarUri ? (
        <AppButton
          texto={"Ir atrás"}
          color={"primary"}
          onPress={
            () => navigation.replace("CargarVideoUsuario", { categoria }) //se usa replace porque navega a la misma pantalla
          }
          anotherStyle={styles.atras}
          disabled={isLoading}
        />
      ) : (
        <AppButton
          texto={"Ir atrás"}
          color={"primary"}
          onPress={() => navigation.navigate("VideosUsuario")}
          anotherStyle={styles.atras}
          disabled={isLoading}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  cardsContainer: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
  cardWrapper: {
    borderRadius: 10,
  },
  cardContainer: {
    alignItems: "center",
    padding: 10,
  },
  backgroundVideo: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  buttonsContainer: {
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  atras: {
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: colors.text,
    padding: 10,
  },
  backgroundVideoABuscar: {
    flex: 1,
    marginHorizontal: "10%",
    marginVertical: "10%",
  },
  loadingContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    marginVertical: "80%"
  }
});
