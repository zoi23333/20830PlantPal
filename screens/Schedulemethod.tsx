import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Schedulemethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.schedulemethod}>
      <Text style={styles.myPlants}>Available reminder time</Text>
      <Pressable
        style={[styles.manualinput, styles.manualinputLayout]}
        onPress={() => navigation.navigate("ManualChooseSchedule")}
      >
        <View style={[styles.manualinputChild, styles.manualinputLayout]} />
        <Text style={[styles.myPlants1, styles.plantsTypo]}>
          <Text style={styles.manualInput1}>{`Manual input `}</Text>
          <Text style={styles.default}>(default)</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.geolocation1, styles.manualinputLayout]}
        onPress={() => navigation.navigate("Geolocation")}
      >
        <View style={[styles.manualinputChild, styles.manualinputLayout]} />
        <Text style={[styles.myPlants2, styles.plantsTypo]}>Geolocation</Text>
      </Pressable>
      <Pressable style={styles.backbutton} onPress={() => navigation.goBack()}>
        <View style={styles.backbuttonChild} />
        <Image
          style={styles.backbuttonItem}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  manualinputLayout: {
    height: 68,
    width: 350,
    position: "absolute",
  },
  plantsTypo: {
    textAlign: "left",
    fontWeight: "500",
    left: "6.63%",
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  myPlants: {
    marginTop: -358.7,
    left: "25.31%",
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  manualinputChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  manualInput1: {
    color: Color.colorDarkslategray,
  },
  default: {
    color: Color.colorGray_200,
  },
  myPlants1: {
    marginTop: -11.4,
  },
  manualinput: {
    top: 116,
    left: 20,
    width: 350,
  },
  myPlants2: {
    marginTop: -11.5,
    color: Color.colorDarkslategray,
  },
  geolocation1: {
    top: 192,
    left: 20,
    width: 350,
  },
  backbuttonChild: {
    backgroundColor: Color.colorGray_100,
    width: 35,
    height: 32,
    zIndex: 0,
  },
  backbuttonItem: {
    top: 5,
    left: 9,
    borderRadius: Border.br_11xs,
    width: 11,
    height: 23,
    zIndex: 1,
    position: "absolute",
  },
  backbutton: {
    top: 64,
    left: 28,
    width: 30,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  schedulemethod: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(31, 31, 31, 0.1)",
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowRadius: 140,
    elevation: 140,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Schedulemethod;
