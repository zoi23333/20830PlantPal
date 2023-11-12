import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type Hometab1Type = {
  style?: StyleProp<ViewStyle>;
};

const Hometab1 = ({ style }: Hometab1Type) => {
  return (
    <View style={[styles.hometab, style]}>
      <View style={styles.homebutton}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector3.png")}
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
    color: Color.colorSeagreen,
    textAlign: "left",
    width: 31,
    height: 15,
    marginTop: 3,
  },
  homebutton: {
    alignItems: "center",
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

export default Hometab1;
