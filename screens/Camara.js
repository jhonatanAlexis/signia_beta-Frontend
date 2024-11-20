import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { useAudioPlayer } from "expo-audio";
import AppButton from "../components/AppButton";

export default function Camara() {
  const [facing, setFacing] = useState("front"); //para ajustar la camara frontal o trasera
  const [permission, requestPermission] = useCameraPermissions(); //para los permisos
  const [isRecording, setIsRecording] = useState(false); //paraempezar a grabar
  const cameraRef = useRef(null); //referencia a la camara, sirve para acceder a metodos como .current.tal y asi
  const [timeElapsed, setTimeElapsed] = useState(0); // tiempo transcurrido de grabacion
  const timerRef = useRef(null);
  const audioPlayer  = useAudioPlayer(require("../assets/sonidos/grabar.mp3"));
  const audioStop = useAudioPlayer(require("../assets/sonidos/detener.mp3"));

  //el permiso de la camara esta cargando
  if (!permission) {
    return (
      <View>
        <AppText text={"Cargando...."}/>
      </View>
    );
  }

  //si no hay permiso aun
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <AppText text={"Se necesita del permiso para acceder a la camara"} style={styles.message} />
        <AppButton texto={"Permitir acceso"} color={"primary"} onPress={()=>requestPermission}/>
      </View>
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

      audioPlayer.seekTo(0); //resetea hasta el comienzo el sonido
      audioPlayer.play(); //reproduce el sonido

      await cameraRef.current.recordAsync(); //empieza a grabar
    }
  };

  const detener = async () => {
    if (cameraRef.current && isRecording) {
      setIsRecording(false);
      cameraRef.current.stopRecording();
      audioStop.seekTo(0);
      audioStop.play()
      clearInterval(timerRef.current) //detiene el intervalo configurado en setInterval pues ya no es neceario que siga
    }
  };

  // Función para formatear el tiempo en minutos:segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} mute={true}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={alternarCamara}>
            <AppText text={"Cambiar camara"} style={styles.text} />
          </TouchableOpacity>
          {!isRecording ? (
            <TouchableOpacity style={styles.button} onPress={grabar}>
              <AppText text={"Grabar"} style={styles.text} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={detener}>
              <AppText text={"Detener"} style={styles.text} />
            </TouchableOpacity>
          )}
        </View>
      </CameraView>
      {isRecording ? (
        <View style={styles.timerContainer}>
          <AppText
            text={"Tiempo: " + formatTime(timeElapsed)}
            style={styles.text}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    padding: 10,
    backgroundColor: colors.black,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
  timerContainer: {
    alignItems: "center",
    backgroundColor: colors.black,
    padding: 13
  }
});
