import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.welcomeScreen, styles.parentFlexBox]}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.frameGroup}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame8.png")}
          />
          <Text style={styles.myPlants}>PlantPal</Text>
        </View>
        <View
          style={[
            styles.balancingYourLifeWithPlantParent,
            styles.parentFlexBox,
          ]}
        >
          <Text style={[styles.balancingYourLife1, styles.wedLikeTo1Typo]}>
            Balancing Your Life with Plant Care
          </Text>
          <Image
            style={styles.undrawDesignerRe5v951Icon}
            contentFit="cover"
            source={require("../assets/undraw-designer-re-5v95-1.png")}
          />
          <Text style={[styles.wedLikeTo1, styles.wedLikeTo1Typo]}>
            We’d like to know when you are available to care for your plants, so
            you need to choose:
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.choosetimebutton, styles.uselocatbuttonFlexBox]}
        onPress={() => navigation.navigate("ManualChooseSchedule")}
      >
        <Text style={[styles.chooseAvailableTimes1, styles.useGeolocationTypo]}>
          Choose available times
        </Text>
      </Pressable>
      <Pressable
        style={[styles.uselocatbutton, styles.uselocatbuttonFlexBox]}
        onPress={() => navigation.navigate("Geolocation")}
      >
        <Text style={[styles.useGeolocation, styles.useGeolocationTypo]}>
          Use geolocation
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wedLikeTo1Typo: {
    color: Color.gray_100,
    fontFamily: FontFamily.dMSans,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  uselocatbuttonFlexBox: {
    marginTop: 18,
    width: 318,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  useGeolocationTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dMSans,
    textAlign: "center",
    fontWeight: "500",
  },
  frameIcon: {
    width: 107,
    height: 91,
    overflow: "hidden",
  },
  myPlants: {
    fontSize: 45,
    fontFamily: FontFamily.josefinSans,
    color: Color.colorSeagreen,
    width: 191,
    height: 34,
    textAlign: "center",
    fontWeight: "500",
  },
  frameGroup: {
    width: 251,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  balancingYourLife1: {
    height: 38,
    width: 329,
  },
  undrawDesignerRe5v951Icon: {
    width: 306,
    height: 299,
    marginTop: 33,
    overflow: "hidden",
  },
  wedLikeTo1: {
    width: 304,
    height: 68,
    marginTop: 33,
  },
  balancingYourLifeWithPlantParent: {
    marginTop: 23,
  },
  frameParent: {
    width: 329,
  },
  chooseAvailableTimes1: {
    width: 275,
    height: 28,
  },
  choosetimebutton: {
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: 22,
    paddingVertical: Padding.p_3xs,
  },
  useGeolocation: {
    width: 239,
  },
  uselocatbutton: {
    backgroundColor: "#6f6f6f",
    paddingHorizontal: 40,
    paddingVertical: Padding.p_2xs,
  },
  welcomeScreen: {
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
    paddingHorizontal: 29,
    paddingVertical: 44,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
