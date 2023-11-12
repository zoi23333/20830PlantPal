import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type HometabType = {
  style?: StyleProp<ViewStyle>;
};

const Hometab = ({ style }: HometabType) => {
  return (
    <View style={[styles.hometab, style]}>
      <View style={styles.homebutton}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector2.png")}
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
    marginLeft: 2,
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
  },
  homebutton: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  hometab: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: 195,
    height: 88,
    overflow: "hidden",
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
  },
});

export default Hometab;
