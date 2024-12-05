import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Sesion from "../screens/Sesion";
import Dashboard from "../screens/Dashboard";
import RestablecerContrasena from "../screens/RestablecerContrasena";
import Register from "../screens/Register";
import SolicitarRestablerContrasena from "../screens/SolicitarRestablecerContrasena"
import DatosUsuario from "../screens/DatosUsuario";
import ActualizarPerfil from "../screens/ActualizarPerfil";
import EliminarPerfil from "../screens/EliminarPerfil";
import Videos from "../screens/Videos";
import SubcategoriasScreen from "../screens/SubcategoriasScreen";
import VideosUsuario from "../screens/VideosUsuario";
import CrearNombre from "../screens/CrearNombre"
import CargarVideoUsuario from "../screens/CargarVideoUsuario";
import Camara from "../screens/Camara"


const Stack = createStackNavigator()

//headerShown quita el nombre de la pantalla
//{(props) => <Sesion {...props} texto={texto} />} -> se pasan todas las propiedades necesarias para Sesion (gracias a ...props) junto con una propiedad extra texto
export default function AppNavigator({texto}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sesion">
        <Stack.Screen name="Sesion" options={{ headerShown: false }}>
          {(props) => <Sesion {...props} texto={texto} />}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="RestablecerContrasena" component={RestablecerContrasena} options={{headerShown: false}}/>
        <Stack.Screen name="SolicitarRestablecerContrasena" component={SolicitarRestablerContrasena} options={{headerShown: false}}/>
        <Stack.Screen name="DatosUsuario" component={DatosUsuario} options={{headerShown: false}}/>
        <Stack.Screen name="ActualizarPerfil" component={ActualizarPerfil} options={{headerShown: false}}/>
        <Stack.Screen name="EliminarPerfil" component={EliminarPerfil} options={{headerShown: false}}/>
        <Stack.Screen name="Videos" component={Videos} options={{headerShown: false}}/>
        <Stack.Screen name="SubcategoriasScreen" component={SubcategoriasScreen} options={{headerShown: false}}/>
        <Stack.Screen name="VideosUsuario" component={VideosUsuario} options={{headerShown: false}}/>
        <Stack.Screen name="CrearNombre" component={CrearNombre} options={{headerShown: false}}/>
        <Stack.Screen name="CargarVideoUsuario" component={CargarVideoUsuario} options={{headerShown: false}}/>
        <Stack.Screen name="Camara" component={Camara} options={{headerShown: true, headerTitle: '', headerTransparent: true}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
