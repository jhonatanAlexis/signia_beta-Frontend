import React from "react";
import { SafeAreaView, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { VideoView, useVideoPlayer } from "expo-video";

export default function Quizzes({route}){
    const {categoria} = route.params
    const navigation = useNavigation();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.leftContainer}
            onPress={() =>
              navigation.navigate("SubcategoriasScreen", { categoria })
            }
          >
            <AppText text={"Signia beta"} />
          </TouchableOpacity>

          <View style={styles.centerContainer}>
            <AppText text={categoria} />
          </View>

          <View style={styles.rightContainer}>
            <></>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <AppText style={styles.text} text={"Pregunta #"} />
          <AppText style={styles.text} text={"Video: "} />
          <VideoView
            player={useVideoPlayer(require("../assets/videos/a.mov"), player=>{
              player.currentTime = 0
            })}
            style={styles.backgroundVideo}
            contentFit="fill"
          />
          <AppText style={styles.text} text={"Opciones: "} />
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.cardContainer}>
              <View></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
              <View></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
              <View></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
              <View></View>
            </TouchableOpacity>
          </View>

          <AppButton
            texto={"Ir atras"}
            color={"primary"}
            onPress={() =>
              navigation.navigate("SubcategoriasScreen", { categoria })
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  backgroundVideo: {
    width: "80%",
    height: 200,
    borderRadius: 15,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  cardContainer: {
    backgroundColor: colors.white,
    width: "22%",
    height: 100,
    borderRadius: 15,
    marginHorizontal: 5,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  text: {
    marginTop: "5%",
    marginBottom: "2%",
  },
});