import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type Hometab2Type = {
  style?: StyleProp<ViewStyle>;
};

const Hometab2 = ({ style }: Hometab2Type) => {
  return (
    <View style={[styles.hometab, style]}>
      <View style={styles.homebutton}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={styles.home}>HOME</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon1: {
    width: 26,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 31,
    height: 15,
    marginTop: 3,
    marginLeft: 2,
  },
  homebutton: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  hometab: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: 130,
    height: 88,
    overflow: "hidden",
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "flex-end",
    alignItems: "center",
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal distance of shadow
      height: 2, // Vertical distance of shadow
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Blur radius of shadow
    elevation: 5, // Elevation for Android
  },
});

export default Hometab2;
