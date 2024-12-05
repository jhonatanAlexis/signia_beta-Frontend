import api from "./Api";
import AsyncStorage from "@react-native-async-storage/async-storage"

//llamadas a todas las apis

export const registrarUsuario = async (userData) =>{
    try{
        const response = await api.post("/registrar", userData) //se llama a la api y le pasa los datos de esa api
        return response.data
    }catch(error){
        console.log("Error en el registro: ",error.response.data)
        throw error
    }
}

export const loginUsuario = async (email, password) => {
    try{
        const response = await api.post("/login", {email, password})
        const {access_token} = response.data //se pone en {} access_token para decirle que queremos extraer ese parametro de response.data
        await AsyncStorage.setItem("token", access_token) //guardamos el token en el storage
        return response.data
    } catch(error){
        console.log("Error en el login: ", error.response.data)
        throw error
    }
}

export const getDatosUsuario = async () => {
    try{
        const response = await api.get("/yo")
        return response.data
    }catch(error){
        console.log("Error en la obtencion de datos: ", error.response.data)
        throw error
    }
}

export const actualizarPerfil = async (userData) => {
    try{
        const response = await api.put("/editarPerfil", userData)
        return response.data
    }catch(error){
        console.log("Error en la actualizacion de perfil: ", error.response.data)
        throw error
    }
}

export const eliminarPerfil = async(password) => {
    try{
         // enviar los datos dentro de `data` porque asi lo require axios para delete
        const response = await api.delete("/eliminar_cuenta", {data: { password }} )
        return response.data
    }catch(error){
        console.log("Error en la eliminacion de perfil: ", error.response.data)
        throw error
    }
}

export const solicitarRestablecerContraseña = async (email) => {
    try{
        const response = await api.post("/solicitarRestablecerContraseña", {email})
        return response.data
    }
    catch(error){
        console.log("Error en la solicitud de restablecer contraseña: ", error.response.data)
        throw error
    }
}

export const restablecerContraseña = async (email, codigo, password) => {
    try{
        const response = await api.post('/restaurar_contraseña', {email, codigo, password})
        return response.data
    }catch(error){
        console.log("Error en la restablecer contraseña: ", error.response.data)
        throw error
    }
}

//como son archivos se tiene que pasar el formData
export const subirVideos = async (categoria, formData) => {
    try{
        const response = await api.post(`/subir_video/${categoria}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    }catch(error){
        console.log("Error en la subida de video: ", error.response.data)
        throw error
    }
}

export const misVideos = async () => {
    try{
        const response = await api.get("/mis_videos")
        return response.data
    }catch(error){
        console.log("Error en la carga de videos: ", error.response.data)
        throw error
    }
}

export const videosCategoria = async (categoria) => {
    try{
        const response = await api.get(`/buscar_por_categoria/${categoria}`)
        return response.data
    }catch(error){
        console.log("Error en la carga de videos: ", error.response.data)
        throw error
    }
}

export const eliminarVideo = async (categoria, nombre_video) => {
    try{
        const response = await api.delete(`/borrar_video/${categoria}/${nombre_video}`)
        return response.data
    }catch(error){
        console.log("Error en la eliminación de video: ", error.response.data)
        throw error
    }
}

export const buscarVideo = async (categoria, nombre_video) => {
    try{
        const response = await api.get(`/buscar_video/${categoria}/${nombre_video}`)
        return response.data
    }catch(error){
        console.log("Error en la búsqueda de video: ", error.response.data)
        throw error
    }
}

export const crearNombre = async (categoria, nombre) => {
    try{
        const response = await api.post(`/crear_nombre_abecedario/${categoria}`, {nombre})
        return response.data
    }catch(error){
        console.log("Error en la creación de nombre: ", error.response.data)
        throw error
    }
}