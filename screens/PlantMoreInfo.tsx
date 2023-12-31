import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import { getPlantInfo } from "../Database";
import { ScreenWidth } from "@rneui/base";

const plantTypeToImage = {
  "Snake Plant": "snakePlant1.png",
  "Spider Plant": "Spiderplant2.png",
  Pothos: "pothosplant3.png",
  "Peace Lily": "PeacyLilly4.png",
  "Aloe Vera": "aloever5.png",
  "ZZ Plant": "zzplant6.png",
  "Rubber Plant": "rubberplant7.png",
  "Jade Plant": "jadeplant8.png",
  "Boston Fern": "boston9.png",
  Orchid: "orchid10.png",
  "Imaginary Fern": "imaginary11.png",
};

const PlantMoreInfo = () => {
  const navigation = useNavigation();
  //get the plant type from the previous page --> PlantDetails
  const route = useRoute();

  const { plantType } = route.params;

  const plantInfo = getPlantInfo(plantType);

  if (!plantInfo) {
    return (
      <View>
        <Text>Plant information not found</Text>
      </View>
    );
  }

  const descriptionText = plantInfo.description;
  const planttypeText = plantInfo.name;

  // Get the image name from the mapping
  const imageName = plantTypeToImage[plantType];
  if (!imageName) {
    // Handle the case where there is no mapping for the plant type
    return (
      <View>
        <Text>Image not found for {plantType}</Text>
      </View>
    );
  }
  const imageSource = require(`../assets/${imageName}`);

  return (
    <View style={[styles.plantMoreInfo1, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.monsteraParent, styles.parentFlexBox]}>
          <Text style={styles.monstera}>{planttypeText}</Text>
          <Pressable style={styles.close} onPress={() => navigation.goBack()}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/close.png")}
            />
          </Pressable>
        </View>
        <Text style={styles.monsteraAStriking1}>{descriptionText}</Text>
      </View>
      <View style={[styles.plantcardbackgroundParent, styles.parentFlexBox]}>
        <View style={[styles.plantcardbackground1, styles.parentFlexBox]}>
          {/* <Image
            style={styles.plantMoreInfoChild}
            contentFit="cover"
            source={require("../assets/rectangle-627.png")}
          /> */}
          <Image
            style={[styles.plantimageAIcon, { resizeMode: "contain" }]}
            contentFit="cover"
            source={imageSource}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  monstera: {
    fontSize: FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    textAlign: "left",
    width: 206,
    height: 27,
    color: Color.colorBlack,
  },
  icon: {
    height: "100%",
  },
  close: {
    width: 22,
    height: 20,
    marginLeft: 109,
  },
  monsteraParent: {
    flexDirection: "row",
  },
  monsteraAStriking1: {
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.poppins,
    textAlign: "justify",
    width: 334,
    height: 303,
    marginTop: 28,
    color: Color.colorBlack,
  },
  frameParent: {
    top: 400,
    left: 0,
    width: 386,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: 14,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  plantcardbackground1: {
    backgroundColor: Color.khaki,
    width: 391,
    height: 350,
    zIndex: 0,
    position: "relative",
    marginTop: 10,
  },
  plantimageAIcon: {
    top: ScreenWidth * 0.07,
    left: ScreenWidth * 0.2,
    width: ScreenWidth * 0.6,
    height: ScreenWidth * 0.8,
    zIndex: 1,

    position: "absolute",
  },
  plantcardbackgroundParent: {
    top: 30,
    left: -2,
    position: "absolute",
  },
  plantMoreInfoChild: {
    width: 390,
    height: 30,
    zIndex: 1, // higher zIndex to be on top
    position: "absolute",
    top: "50%", // center vertically
    left: "50%", // center horizontally
    transform: [{ translateX: -195 }, { translateY: -15 }], // adjust for half width and height to center
  },

  plantMoreInfo1: {
    shadowColor: "rgba(31, 31, 31, 0.1)",
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowRadius: 140,
    elevation: 140,
    shadowOpacity: 1,
    flex: 1,
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default PlantMoreInfo;
