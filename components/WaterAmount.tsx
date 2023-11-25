import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

type WaterAmountType = {
  onClose: () => void;
};

const WaterAmount = ({ onClose }: WaterAmountType) => {
  const handleOkPress = () => {
    onClose(); // Close the modal
  };
  return (
    <View style={[styles.wateramount, styles.button1Layout]}>
      <View style={[styles.wateramountInner, styles.rectangleParentPosition]}>
        <View style={styles.rectangleParentPosition}>
          <View style={[styles.frameChild, styles.wateramountLayout]} />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <Image
                style={[styles.frameIcon, styles.button1Layout]}
                contentFit="cover"
                source={require("../assets/frame7.png")}
              />
              <View style={styles.frameView}>
                <View style={styles.frameGroup}>
                  <Text style={[styles.youreAlmostThere4, styles.youreFlexBox]}>
                    For planters with a drainage hole
                  </Text>
                  <Text style={[styles.youreAlmostThere5, styles.youreTypo]}>
                    Water until you see excess water drain out of the bottom of
                    the planter.
                  </Text>
                </View>
                <View style={styles.youreAlmostThereGroup}>
                  <Text style={[styles.youreAlmostThere6, styles.youreFlexBox]}>
                    For planters without a drainage hole
                  </Text>
                  <Text style={[styles.youreAlmostThere7, styles.youreTypo]}>
                    Water up to one-fourth or one-third of the volume of your
                    planter.
                  </Text>
                </View>
              </View>
            </View>
<<<<<<< HEAD
            <Pressable onPress={handleOkPress} style={[styles.button1, styles.youreFlexBox]}>
=======
            <Pressable
              onPress={handleOkPress}
              style={[styles.button1, styles.youreFlexBox]}
            >
>>>>>>> fbb137784be78287bc8122bcb942744880c83ac0
              <Text style={styles.okISee}>OK, I see</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1Layout: {
    overflow: "hidden",
    borderRadius: Border.br_7xs,
  },
  rectangleParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  wateramountLayout: {
    height: 277,
    width: 344,
  },
  youreFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  youreTypo: {
    width: 300,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    lineHeight: 14,
    alignItems: "center",
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
    width: 344,
    borderRadius: Border.br_7xs,
  },
  frameIcon: {
    width: 63,
    height: 58,
  },
  youreAlmostThere4: {
    width: 282,
    display: "flex",
    color: Color.colorRoyalblue_100,
    lineHeight: 14,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  youreAlmostThere5: {
    marginTop: 7,
  },
  frameGroup: {
    alignItems: "center",
  },
  youreAlmostThere6: {
    width: 278,
    display: "flex",
    color: Color.colorRoyalblue_100,
    lineHeight: 14,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  youreAlmostThere7: {
    marginTop: 6,
  },
  youreAlmostThereGroup: {
    marginTop: 23,
    alignItems: "center",
  },
  frameView: {
    marginTop: 10,
  },
  okISee: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  button1: {
    backgroundColor: Color.colorSeagreen,
    width: 124,
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_5xs,
    marginTop: 18,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
  },
  frameParent: {
    top: 19,
    left: 22,
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
  },
  wateramountInner: {
    height: 277,
    width: 344,
  },
  wateramount: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 277,
    width: 344,
    backgroundColor: Color.colorWhite,
  },
});

export default WaterAmount;
