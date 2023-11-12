import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Geolocation1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.geolocation1}>
      <View style={[styles.gotosettings, styles.noturnonLayout]}>
        <View style={[styles.gotosettingsChild, styles.childLayout]} />
        <Text style={[styles.goToSetting1, styles.iDontWant1Typo]}>
          Go To Setting
        </Text>
      </View>
      <Pressable
        style={[styles.noturnon, styles.noturnonLayout]}
        onPress={() => navigation.navigate("Schedulemethod")}
      >
        <View style={[styles.noturnonChild, styles.childLayout]} />
        <Text style={[styles.iDontWant1, styles.iDontWant1Typo]}>
          I Don’t Want to Turn On It
        </Text>
      </Pressable>
      <View
        style={[
          styles.undrawLocationSearchReTtojParent,
          styles.enableGeolocationTo1Layout,
        ]}
      >
        <Image
          style={styles.undrawLocationSearchReTtojIcon}
          contentFit="cover"
          source={require("../assets/undraw-location-search-re-ttoj-1.png")}
        />
        <Text style={styles.enableGeolocation}>Enable Geolocation</Text>
        <Text
          style={[
            styles.enableGeolocationTo1,
            styles.enableGeolocationTo1Layout,
          ]}
        >{`Enable Geolocation to water your plants at the perfect time. 

We respect your privacy and won't use it for anything else.`}</Text>
      </View>
      <Pressable
        style={styles.backbutton}
        onPress={() => navigation.navigate("Schedulemethod")}
      >
        <View style={styles.backbuttonChild} />
        <Image
          style={styles.backbuttonItem}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  noturnonLayout: {
    height: 50,
    width: 329,
    left: 35,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 50,
    width: 329,
    position: "absolute",
  },
  iDontWant1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },
  enableGeolocationTo1Layout: {
    width: 339,
    position: "absolute",
  },
  gotosettingsChild: {
    backgroundColor: Color.colorSeagreen,
  },
  goToSetting1: {
    left: 116,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: 15,
    textAlign: "center",
    position: "absolute",
  },
  gotosettings: {
    top: 680,
  },
  noturnonChild: {
    backgroundColor: "#cfcfcf",
  },
  iDontWant1: {
    left: 70,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: 15,
    textAlign: "center",
    position: "absolute",
  },
  noturnon: {
    top: 740,
  },
  undrawLocationSearchReTtojIcon: {
    left: 45,
    width: 268,
    height: 207,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  enableGeolocation: {
    top: 275,
    left: 32,
    fontSize: FontSize.size_8xl,
    lineHeight: 30,
    color: Color.colorSeagreen,
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  enableGeolocationTo1: {
    top: 356,
    fontSize: FontSize.size_base,
    lineHeight: 18,
    color: Color.colorBlack,
    height: 124,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    left: 0,
    width: 339,
  },
  undrawLocationSearchReTtojParent: {
    top: 171,
    left: 30,
    height: 480,
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
  geolocation1: {
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

export default Geolocation1;
