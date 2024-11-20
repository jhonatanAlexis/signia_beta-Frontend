import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

function AppButton({texto, color, onPress, anotherStyle}){
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}, anotherStyle]} onPress={onPress}>
            <AppText text={texto}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25, 
    alignItems: "center",
    padding: 10,
    marginTop: 15
  },
  texto:{
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default AppButton;