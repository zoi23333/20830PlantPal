import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding } from "../GlobalStyles";

type AddtabType = {
  style?: StyleProp<ViewStyle>;
};

const Addtab = ({ style }: AddtabType) => {
  return (
    <View style={[styles.addtab, style, styles.addtabFlexBox]}>
      <View style={[styles.bottomTab, styles.bottomTabLayout]}>
        <View style={[styles.addplantbutton, styles.addtabFlexBox]}>
          <Image
            style={[styles.addplantbuttonChild, styles.bottomTabLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <Image
            style={styles.addplantbuttonItem}
            contentFit="cover"
            source={require("../assets/frame-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addtabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabLayout: {
    height: 60,
    width: 60,
  },
  addplantbuttonChild: {
    zIndex: 0,
  },
  addplantbuttonItem: {
    top: 19,
    left: 18,
    width: 23,
    height: 23,
    zIndex: 1,
    position: "absolute",
  },
  addplantbutton: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  bottomTab: {
    overflow: "hidden",
  },
  addtab: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: 130,
    height: 88,
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_2xl,
    overflow: "hidden",
  },
});

export default Addtab;
