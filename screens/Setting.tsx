import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <Text style={[styles.myPlants, styles.plantsTypo]}>Setting</Text>
      <Pressable style={styles.backbutton} onPress={() => navigation.goBack()}>
        <View style={styles.backbuttonChild} />
        <Image
          style={styles.backbuttonItem}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.myPlantsWrapper, styles.plantsLayout]}
        onPress={() => navigation.navigate("Schedulemethod")}
      >
        <Text style={[styles.myPlants1, styles.plantsTypo]}>
          Available reminder time
        </Text>
      </Pressable>
      <Pressable
        style={[styles.myPlantsContainer, styles.plantsLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={[styles.myPlants1, styles.plantsTypo]}>Notifications</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  plantsTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_lg,
  },
  plantsLayout: {
    paddingVertical: Padding.p_4xl,
    width: 350,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  myPlants: {
    marginTop: -357.7,
    top: "50%",
    left: "41.67%",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  myPlants1: {
    fontWeight: "500",
    textAlign: "left",
  },
  myPlantsWrapper: {
    top: 116,
    paddingHorizontal: Padding.p_8xl,
  },
  myPlantsContainer: {
    top: 191,
    paddingHorizontal: Padding.p_7xl,
  },
  setting: {
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

export default Setting;
