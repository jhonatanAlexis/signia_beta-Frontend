import React, {useState, useEffect} from "react";
import Sesion from "./screens/Sesion";
import Dashboard from "./screens/Dashboard";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [logeado, setLogeado] = useState(false)
  if(!logeado){
    return (
      <AppNavigator texto="Signia Beta"/>
    )
  }else{
    return (
      <Dashboard/>
    )
  }
}