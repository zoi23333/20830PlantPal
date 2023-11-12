import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

type BottomTabType = {
  style?: StyleProp<ViewStyle>;
};

const BottomTab = ({ style }: BottomTabType) => {
  return (
    <View style={[styles.bottomTab, style]}>
      <View style={[styles.addtab, styles.addtabFlexBox]}>
        <View style={[styles.bottomTab1, styles.bottomTab1Layout]}>
          <View style={[styles.addplantbutton, styles.addtabFlexBox]}>
            <Image
              style={[styles.addplantbuttonChild, styles.bottomTab1Layout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  hometabSpaceBlock: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_30xl,
    overflow: "hidden",
    height: 88,
    width: 130,
    backgroundColor: Color.colorWhitesmoke_300,
  },
  homeTypo: {
    height: 15,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  addtabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTab1Layout: {
    height: 60,
    width: 60,
  },
  vectorIconLayout: {
    width: 0,
    maxHeight: "100%",
    position: "absolute",
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
  bottomTab1: {
    overflow: "hidden",
  },
  addtab: {
    paddingVertical: Padding.p_2xl,
    paddingHorizontal: Padding.p_30xl,
    height: 88,
    width: 130,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    overflow: "hidden",
  },
  bottomTab: {
    flexDirection: "row",
  },
});

export default BottomTab;
