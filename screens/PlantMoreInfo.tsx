import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PlantMoreInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.plantMoreInfo1, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.monsteraParent, styles.parentFlexBox]}>
          <Text
            style={styles.monstera}
          >{`Monstera                           `}</Text>
          <Pressable
            style={styles.close}
            onPress={() => navigation.navigate("PlantDetails")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/close.png")}
            />
          </Pressable>
        </View>
        <Text
          style={styles.monsteraAStriking1}
        >{`Monstera, a striking indoor plant known for its distinctive leaf structure and low-maintenance nature, is a standout choice for any indoor garden. 
With its unique foliage and adaptability, it effortlessly thrives and reproduces, making it a fantastic addition to your home decor. Each Monstera type may have specific care requirements, but overall, these plants are known for their resilience and ease of care. Whether you're a seasoned plant enthusiast or just starting your indoor gardening journey, Monstera will capture your attention and elevate your indoor space with its charming presence.`}</Text>
      </View>
      <View style={[styles.plantcardbackgroundParent, styles.parentFlexBox]}>
        <View style={[styles.plantcardbackground1, styles.parentFlexBox]}>
          {/* <Image
            style={styles.plantMoreInfoChild}
            contentFit="cover"
            source={require("../assets/rectangle-627.png")}
          /> */}
          <Image
            style={styles.plantimageAIcon}
            contentFit="cover"
            source={require("../assets/plantimage-a.png")}
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
    top: 36,
    left: 42,
    width: 307,
    height: 278,
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
