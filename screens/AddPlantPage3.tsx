import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AddPlantPage3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addPlantPage31, styles.iconLayout]}>
      <View style={styles.mainContent}>
        <View style={styles.topFlexBox}>
          <Pressable
            style={styles.return2}
            onPress={() => navigation.navigate("AddPlantPage2")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/return.png")}
            />
          </Pressable>
          <Text style={[styles.myPlants, styles.save2Typo]}>
            Add your plant
          </Text>
        </View>
        <View style={styles.questions}>
          <View style={styles.pleaseSelectTheSizeCategorParent}>
            <Text
              style={[styles.pleaseSelectThe1, styles.pleaseTypo]}
            >{`Please select the size category that best 
describes your plant`}</Text>
            <View style={[styles.groupParent, styles.groupParentLayout]}>
              <View style={[styles.frameParent, styles.groupFrameLayout]}>
                <View style={styles.rectangleParentPosition}>
                  <View style={[styles.frameChild, styles.rectangleLayout]} />
                  <View style={styles.upTo30CmOr12InchesParent}>
                    <Text style={[styles.upTo301, styles.upTo301Clr]}>
                      Up to 30 cm or 12 inches
                    </Text>
                    <Text style={[styles.small, styles.smallTypo]}>Small</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
              <View style={[styles.frameGroup, styles.groupFrameLayout]}>
                <View style={styles.rectangleParentPosition}>
                  <View style={[styles.frameChild, styles.rectangleLayout]} />
                  <View
                    style={[
                      styles.cmTo90CmOr12InchesTo36Parent,
                      styles.or6ParentPosition,
                    ]}
                  >
                    <Text style={[styles.cmTo901, styles.upTo301Clr]}>
                      30 cm to 90 cm or 12 inches to 36 inches
                    </Text>
                    <Text style={[styles.medium, styles.mediumPosition]}>
                      Medium
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
              <View style={[styles.groupView, styles.groupFrameLayout]}>
                <View style={styles.rectangleParentPosition}>
                  <View style={[styles.frameChild, styles.rectangleLayout]} />
                  <View
                    style={[
                      styles.over90CmOr36InchesParent,
                      styles.or6ParentPosition,
                    ]}
                  >
                    <Text style={[styles.cmTo901, styles.upTo301Clr]}>
                      Over 90 cm or 36 inches
                    </Text>
                    <Text
                      style={[styles.medium, styles.mediumPosition]}
                    >{`Large `}</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.pleaseChooseTheSizeCategorParent}>
            <Text style={[styles.pleaseChooseThe1, styles.pleaseTypo]}>
              Please choose the size category of the pot diameter
            </Text>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={[styles.frameParent, styles.groupFrameLayout]}>
                <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
                  <View
                    style={[styles.rectangleView, styles.rectangleLayout]}
                  />
                  <View
                    style={[
                      styles.upTo15CmOr6InchesParent,
                      styles.or6ParentPosition,
                    ]}
                  >
                    <Text style={[styles.cmTo901, styles.upTo301Clr]}>
                      Up to 15 cm or 6 inches
                    </Text>
                    <Text style={[styles.medium, styles.mediumPosition]}>
                      Small
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
              <View style={[styles.frameGroup, styles.groupFrameLayout]}>
                <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
                  <View
                    style={[styles.rectangleView, styles.rectangleLayout]}
                  />
                  <View
                    style={[
                      styles.cmTo30CmOr6InchesTo12Parent,
                      styles.or6ParentPosition,
                    ]}
                  >
                    <Text style={[styles.cmTo901, styles.upTo301Clr]}>
                      15 cm to 30 cm or 6 inches to 12 inches
                    </Text>
                    <Text style={[styles.medium, styles.mediumPosition]}>
                      Medium
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
              <View style={[styles.groupView, styles.groupFrameLayout]}>
                <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
                  <View
                    style={[styles.rectangleView, styles.rectangleLayout]}
                  />
                  <Text style={[styles.over30Cm1, styles.large1Typo]}>
                    Over 30 cm or 12 inches
                  </Text>
                  <Text
                    style={[styles.large1, styles.large1Typo]}
                  >{`Large `}</Text>
                </View>
                <Image
                  style={[styles.groupChild, styles.mediumPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-249.png")}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.save1, styles.topFlexBox]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
            }
          >
            <Text style={[styles.save2, styles.save2Typo]}>Save</Text>
          </Pressable>
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
  save2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  pleaseTypo: {
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
  },
  groupParentLayout: {
    height: 215,
    left: 0,
    width: 322,
    position: "absolute",
  },
  groupFrameLayout: {
    height: 65,
    left: 0,
    width: 322,
    position: "absolute",
  },
  rectangleLayout: {
    width: 302,
    height: 65,
  },
  upTo301Clr: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
  },
  smallTypo: {
    left: "0%",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  mediumPosition: {
    left: 0,
    position: "absolute",
  },
  or6ParentPosition: {
    height: 40,
    left: 15,
    top: 13,
    position: "absolute",
  },
  large1Typo: {
    left: 15,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  topFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
  },
  return2: {
    width: 24,
    height: 29,
  },
  myPlants: {
    fontSize: FontSize.size_3xl,
    width: 187,
    marginLeft: 63,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  pleaseSelectThe1: {
    left: 4,
    width: 317,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_8xs,
    width: 302,
  },
  upTo301: {
    top: "60%",
    left: "0%",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  small: {
    top: "0%",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
  },
  upTo30CmOr12InchesParent: {
    height: "61.54%",
    width: "46.36%",
    top: "20%",
    right: "48.68%",
    bottom: "18.46%",
    left: "4.97%",
    zIndex: 1,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 20,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 26,
    width: 12,
    height: 12,
  },
  frameParent: {
    top: 0,
  },
  cmTo901: {
    top: 24,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
  },
  medium: {
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    top: 0,
  },
  cmTo90CmOr12InchesTo36Parent: {
    width: 234,
    zIndex: 1,
  },
  frameGroup: {
    top: 75,
  },
  over90CmOr36InchesParent: {
    width: 141,
    zIndex: 1,
  },
  groupView: {
    top: 150,
  },
  groupParent: {
    top: 55,
  },
  pleaseSelectTheSizeCategorParent: {
    height: 270,
    width: 322,
  },
  pleaseChooseThe1: {
    left: 1,
    width: 320,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_8xs,
    width: 302,
    left: 0,
    position: "absolute",
    top: 0,
  },
  upTo15CmOr6InchesParent: {
    width: 132,
  },
  rectangleParent1: {
    left: 20,
    top: 0,
    position: "absolute",
  },
  cmTo30CmOr6InchesTo12Parent: {
    width: 222,
  },
  over30Cm1: {
    top: 37,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
  },
  large1: {
    top: 13,
    left: 15,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
  },
  groupParent1: {
    top: 48,
  },
  pleaseChooseTheSizeCategorParent: {
    height: 263,
    marginTop: 35,
    width: 322,
  },
  save2: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  save1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    width: 321,
    paddingHorizontal: 81,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    marginTop: 35,
  },
  questions: {
    marginTop: 20,
  },
  mainContent: {
    marginLeft: -161,
    top: 66,
    left: "50%",
    position: "absolute",
  },
  addPlantPage31: {
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
    height: 844,
  },
});

export default AddPlantPage3;
