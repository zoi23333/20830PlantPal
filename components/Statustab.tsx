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
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import { Dimensions } from "react-native";

type StatustabType = {
  style?: StyleProp<ViewStyle>;
};

const Statustab = ({ style }: StatustabType) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.statustab, style]}>
      <Pressable
        style={styles.frameParent}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "PlantStatusPage" })
        }
      >
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={styles.status}>STATUS</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;
<<<<<<< HEAD

=======
>>>>>>> fbb137784be78287bc8122bcb942744880c83ac0
const styles = StyleSheet.create({
  vectorIconLayout: {
    width: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  frameIcon1: {
    width: 28,
    height: 28,
    zIndex: 0,
    overflow: "hidden",
  },
  status: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    color: Color.colorGray_200,
    textAlign: "center",
    width: 41,
    height: 15,
    zIndex: 1,
    marginTop: 2,
  },
  vectorIcon2: {
    height: "0.22%",
    top: "50.34%",
    bottom: "49.44%",
    left: "20.74%",
    zIndex: 2,
  },
  vectorIcon3: {
    height: "0.45%",
    top: "50.56%",
    bottom: "48.99%",
    left: "70.12%",
    zIndex: 3,
  },
  frameParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  statustab: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: screenWidth / 2,
    height: 88,
    paddingHorizontal: Padding.p_33xl,
    paddingVertical: Padding.p_lg,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Statustab;
