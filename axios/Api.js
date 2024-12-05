import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native";

//se crea la api de manera global
const api = axios.create({
  baseURL: "http://192.168.1.82:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

//intercepctor para incluir el token en las peticiones en llamadas a las apis
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("token") //obtiene el token guardado en asyncstorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}` //agrega un encabezado (headers) de autorizacion y le añade el token
    }

    return config
})

export default api