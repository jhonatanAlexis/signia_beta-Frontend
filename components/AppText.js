import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({text, style}){
    return (
        //se pone style para que pueda recibir otros estilos desde otra vista
        <Text style={[styles.text, style]} >
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto': 'Avenir',
        fontWeight: 'bold',
        marginBottom: 5
    }
})