import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Alert, SafeAreaView, StyleSheet, TouchableOpacity, View, ActivityIndicator } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { subirVideos } from "../axios/AllApis";
import { VideoView, useVideoPlayer } from "expo-video";
import { useNavigation } from "@react-navigation/native";

export default function Camara({route}) {
  const navigation = useNavigation();
  const {categoria, descripcion} = route.params
  const [facing, setFacing] = useState("front"); //para ajustar la camara frontal o trasera
  const [permission, requestPermission] = useCameraPermissions(); //para los permisos
  const [isRecording, setIsRecording] = useState(false); //para empezar a grabar
  const [timeElapsed, setTimeElapsed] = useState(0); // tiempo transcurrido de grabacion
  const timerRef = useRef(null);
  const cameraRef = useRef(null); //referencia a la camara, sirve para acceder a metodos como .current.tal y asi
  const [videoUri, setVideoUri] = useState(null); //guardar la URI del video grabado
  const [isLoading, setIsLoading] = useState(false)

  const videoPlayer = useVideoPlayer(videoUri, videoPlayer => {
    videoPlayer.play()
  })

  //el permiso de la camara esta cargando
  if (!permission) {
    return (
      <View>
        <AppText text={"Cargando...."} />
      </View>
    );
  }

  //si no hay permiso aun
  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permisosContainer}>
        <AppText
          text={"Necesitamos de su permiso para acceder a la camara"}
          style={styles.message}
        />
        <AppButton
          texto={"Permitir acceso"}
          color={"primary"}
          onPress={() => requestPermission()}
        />
      </SafeAreaView>
    );
  }

  function alternarCamara() {
    setFacing((actual) => (actual === "back" ? "front" : "back"));
  }

  const grabar = async () => {
    if (cameraRef.current && !isRecording) {
      setIsRecording(true);
      setTimeElapsed(0); // resetear el contador cuando empieza a grabar

      //setInterval es una funcion que se ejecuta de manera continua dependiendo del tiempo que le pongas
      timerRef.current = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000); // incrementa cada segundo

      const video = await cameraRef.current.recordAsync(); //empieza a grabar
      setVideoUri(video.uri); //guarda la URI del video que se da cuando se empieza a grabar
    }
  };

  const detener = async () => {
    if (cameraRef.current && isRecording) {
      setIsRecording(false);
      clearInterval(timerRef.current); //detiene el intervalo configurado en setInterval pues ya no es neceario que siga

      await cameraRef.current.stopRecording();
    }
  };

  // Función para formatear el tiempo en minutos:segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSubirVideos = async () => {
    setIsLoading(true)
    try {
      const formData = new FormData()

      const videoFile = {
        uri: videoUri,
        name: descripcion,
      };

      formData.append('archivo', videoFile)

      const response = await subirVideos(categoria, formData);
      Alert.alert(response.message)
      navigation.navigate("SubcategoriasScreen", { categoria });
    } catch (error) {
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
    } finally{
      setIsLoading(false)
    }
  }

  const volverGrabar = () =>{
    setVideoUri(null)
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        mute={true}
        mode="video"
      >
        {/* operador and para renderizar solo si la condicion que queremos se cumple */}
        {!videoUri && (
          <View style={styles.buttonContainer}>
            {/* operador ternario */}
            {!isRecording ? (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={alternarCamara}
                >
                  <AppText text={"Cambiar camara"} style={styles.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={grabar}>
                  <AppText text={"Grabar"} style={styles.text} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.timerContainer}>
                  <AppText
                    text={"Tiempo: " + formatTime(timeElapsed)}
                    style={styles.text}
                  />
                </View>
                <TouchableOpacity style={styles.button} onPress={detener}>
                  <AppText text={"Detener"} style={styles.text} />
                </TouchableOpacity>
              </>
            )}
          </View>
        )}

        {videoUri && (
          <>
            <View style={styles.videoContainer}>
              {isLoading && <ActivityIndicator size="large" color="black" />}
              <VideoView
                style={styles.video}
                player={videoPlayer}
                contentFit="cover"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={volverGrabar}
                disabled={isLoading}
              >
                <AppText text={"Volver a grabar"} style={styles.text} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubirVideos}
                disabled={isLoading}
              >
                <AppText text={"Guardar"} style={styles.text} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  permisosContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    color: colors.white,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    backgroundColor: colors.black,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  timerContainer: {
    alignItems: "center",
    backgroundColor: colors.black,
    padding: 13,
  },
  videoContainer: {
    flex: 1,
    marginVertical: "43%",
    marginHorizontal: "5%",
  },
  video: {
    width: "100%",
    height: "100%",
  }
});
