import React, {useState} from "react";
import { Text, SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native"
import { crearNombre } from "../axios/AllApis";
import { VideoView, useVideoPlayer } from "expo-video"

export default function CrearNombre({route}){
  const { categoria } = route.params
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false) //para controlar la solicitud a la api
  const [nombreACrear, setNombreACrear] = useState("")
  const [nombreUri, setNombreUri] = useState(null)

  const player = useVideoPlayer(nombreUri)

  const handleCrearNombre = async (categoria) => {
    Keyboard.dismiss()
    setIsLoading(true) //empieza la solicitud
    try {
      const response = await crearNombre(categoria, nombreACrear)
      setNombreUri(response.secure_url)
      Alert.alert(response.message);
    } catch (error) {
      Alert.alert("¡Ups! Algo no salió bien", error.response.data.message);
    }finally{
      setIsLoading(false) //termina la solicitud
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {/* si la uri del nombre existe muestra el video y si no, muestra lo otro */}
        {nombreUri ? (
          <>
            <AppText text={nombreACrear} />
            <VideoView player={player} style={styles.video} />
            <AppButton
              texto={"Ir atras"}
              color={"primary"}
              onPress={() => {
                setNombreUri(null), setNombreACrear("");
              }}
            />
            {/* cuando le da click al boton reseta la uri a null */}
          </>
        ) : (
          <>
            <AppText text={"Signia beta"} style={styles.header} />
            <AppText text={"Crear nombre"} />
            <Text style={styles.texto}>
              Nota: Ten en cuenta que, si actualizas el video de una o más letras del
              abecedario, los nombres creados previamente con esas letras no se
              actualizarán automáticamente. Para reflejar los cambios en un
              nombre, deberás actualizarlo o volverlo a crear.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={setNombreACrear}
              editable={!isLoading} //editable es el equivalente a disabled, sirve para ver si es editable el input con base a si esta cargando la solicitud o no
            />
            {/* mostrar spinner mientras se está procesando la solicitud */}
            {isLoading && <ActivityIndicator size="large" color="black" />}
            <AppButton
              texto="Crear"
              color="primary"
              onPress={() => handleCrearNombre("Nombres")}
              disabled={isLoading} //se desabilita el boton si se esta cargando la solicitud
            />
            <AppButton
              texto="Ir atrás"
              color="secondary"
              onPress={() =>
                navigation.navigate("SubcategoriasScreen", { categoria })
              }
              disabled={isLoading}
            />
          </>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "65%",
    height: "60%"
  },
  input: {
    height: 35,
    width: "40%",
    borderColor: colors.black,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 8,
  },
  texto: {
    marginHorizontal: "5%",
    marginVertical: "3%",
  },
  header: {
    position: "absolute",
    top: 80,
    fontSize: 24,
  },
})
