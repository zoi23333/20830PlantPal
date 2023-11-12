import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AddPlantPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addPlantPage21, styles.iconLayout]}>
      <View style={styles.topParent}>
        <View style={styles.topFlexBox}>
          <Pressable
            style={styles.return}
            onPress={() => navigation.navigate("AddPlantPage1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/return1.png")}
            />
          </Pressable>
          <Text style={[styles.myPlants, styles.nextTypo]}>Add your plant</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.whatIsTheCurrentLightingSParent}>
            <Text style={styles.whatIsTheContainer}>
              <Text style={styles.whatIsThe1}>{`What is the current `}</Text>
              <Text style={styles.lightingSituation}>lighting situation</Text>
              <Text style={styles.whatIsThe1}> for the plant?</Text>
            </Text>
            <View style={styles.answersSinglechoose}>
              <View style={[styles.groupParent, styles.groupLayout1]}>
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.rectangleLayout]} />
                  <View
                    style={[
                      styles.atLeast6HoursOfDirectSunParent,
                      styles.parentPosition,
                    ]}
                  >
                    <Text style={[styles.atLeast61, styles.lightTypo1]}>
                      At least 6 hours of direct sun per day
                    </Text>
                    <Text style={[styles.directSunlight, styles.lightTypo]}>
                      Direct Sunlight
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupItem, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-2491.png")}
                />
              </View>
              <View
                style={[styles.answersSinglechooseInner, styles.groupLayout1]}
              >
                <View style={[styles.groupParent, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupItem, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-2491.png")}
                  />
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View style={[styles.groupChild, styles.rectangleLayout]} />
                    <View
                      style={[
                        styles.brightFilteredLightWithoutParent,
                        styles.brightLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.brightFilteredLight1,
                          styles.brightLayout,
                        ]}
                      >
                        Bright, filtered light without direct sun exposure.
                      </Text>
                      <Text
                        style={[styles.indirectSunlight, styles.lightTypo]}
                      >{`Indirect Sunlight `}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.ellipseGroup, styles.groupLayout1]}>
                <Image
                  style={[styles.groupItem, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-2491.png")}
                />
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View
                    style={[styles.rectangleContainer, styles.rectangleLayout]}
                  >
                    <View style={[styles.groupChild, styles.rectangleLayout]} />
                    <View
                      style={[
                        styles.noDirectSunlightOftenInCParent,
                        styles.directLayout,
                      ]}
                    >
                      <Text
                        style={[styles.noDirectSunlight1, styles.directLayout]}
                      >
                        No direct sunlight, often in completely shaded or dark
                        areas.
                      </Text>
                      <Text style={[styles.fullShade, styles.lightTypo]}>
                        Full Shade
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.ellipseContainer, styles.groupLayout1]}>
                <Image
                  style={[styles.groupItem, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-2491.png")}
                />
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.rectangleLayout]} />
                  <View
                    style={[
                      styles.noDirectSunlightOftenInCParent,
                      styles.directLayout,
                    ]}
                  >
                    <Text
                      style={[styles.noDirectSunlight1, styles.directLayout]}
                    >
                      Man-made light sources, like fluorescent, LED, or grow
                      lights, used for plant growth.
                    </Text>
                    <Text
                      style={[styles.artificialLight, styles.lightTypo]}
                    >{`Artificial Light: `}</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.answersSinglechooseChild, styles.groupLayout1]}
              >
                <View style={[styles.groupParent, styles.groupLayout1]}>
                  <Image
                    style={[styles.groupItem, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-2491.png")}
                  />
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View style={[styles.groupChild, styles.rectangleLayout]} />
                    <View
                      style={[
                        styles.minimalNaturalLightOftenIParent,
                        styles.minimalLayout,
                      ]}
                    >
                      <Text
                        style={[
                          styles.minimalNaturalLight1,
                          styles.minimalLayout,
                        ]}
                      >
                        Minimal natural light, often in shaded areas or rooms
                        with few windows.
                      </Text>
                      <Text
                        style={[styles.lowLight, styles.lightTypo]}
                      >{`Low Light: `}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.mainContentInner, styles.buttonPrimarySpaceBlock]}
          >
            <View style={[styles.groupFrame, styles.groupFrameLayout]}>
              <View
                style={[
                  styles.doesThePotHaveADrainageHParent,
                  styles.groupFrameLayout,
                ]}
              >
                <Text style={[styles.doesThePot1, styles.lightTypo]}>
                  Does the pot have a drainage hole?
                </Text>
                <View
                  style={[styles.ellipseParent2, styles.ellipseParentPosition]}
                >
                  <Image
                    style={[styles.groupChild7, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-255.png")}
                  />
                  <Text style={[styles.yes, styles.lightTypo]}>Yes</Text>
                </View>
                <View
                  style={[styles.ellipseParent3, styles.ellipseParentPosition]}
                >
                  <Image
                    style={[styles.groupChild7, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-255.png")}
                  />
                  <Text style={[styles.yes, styles.lightTypo]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.buttonPrimary, styles.buttonPrimarySpaceBlock]}
            onPress={() => navigation.navigate("AddPlantPage3")}
          >
            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
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
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  groupLayout1: {
    height: 75,
    left: 0,
    width: 324,
    position: "absolute",
  },
  rectangleLayout: {
    width: 303,
    height: 75,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 46,
    top: 13,
    left: 14,
  },
  lightTypo1: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  lightTypo: {
    fontSize: FontSize.size_sm,
    top: 0,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  groupLayout: {
    height: 12,
    width: 12,
    left: 0,
    position: "absolute",
  },
  brightLayout: {
    width: 276,
    position: "absolute",
  },
  directLayout: {
    width: 263,
    position: "absolute",
  },
  minimalLayout: {
    width: 274,
    position: "absolute",
  },
  buttonPrimarySpaceBlock: {
    marginTop: 30,
    justifyContent: "center",
  },
  groupFrameLayout: {
    width: 233,
    height: 47,
  },
  ellipseParentPosition: {
    height: 19,
    top: 28,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  return: {
    width: 24,
    height: 29,
  },
  myPlants: {
    fontSize: FontSize.size_3xl,
    width: 187,
    marginLeft: 63,
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  topFlexBox: {
    flexDirection: "row",
    width: 329,
    alignItems: "center",
  },
  whatIsThe1: {
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
  },
  lightingSituation: {
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  whatIsTheContainer: {
    fontSize: 14,
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_300,
    left: 0,
  },
  atLeast61: {
    top: 30,
    fontSize: FontSize.size_xs,
    width: 255,
    position: "absolute",
  },
  directSunlight: {
    width: 128,
    left: 0,
  },
  atLeast6HoursOfDirectSunParent: {
    width: 255,
    position: "absolute",
  },
  rectangleParent: {
    left: 21,
  },
  groupItem: {
    top: 31,
  },
  groupParent: {
    top: 0,
  },
  brightFilteredLight1: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
    top: 30,
  },
  indirectSunlight: {
    width: 142,
    left: 0,
  },
  brightFilteredLightWithoutParent: {
    height: 46,
    top: 13,
    left: 14,
  },
  answersSinglechooseInner: {
    top: 95,
  },
  noDirectSunlight1: {
    top: 21,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  fullShade: {
    width: 148,
    left: 0,
  },
  noDirectSunlightOftenInCParent: {
    top: 11,
    height: 53,
    left: 14,
  },
  rectangleContainer: {
    left: 0,
  },
  ellipseGroup: {
    top: 285,
  },
  artificialLight: {
    width: 155,
    left: 0,
  },
  ellipseContainer: {
    top: 380,
  },
  minimalNaturalLight1: {
    top: 23,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    left: 0,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  lowLight: {
    width: 119,
    left: 0,
  },
  minimalNaturalLightOftenIParent: {
    top: 10,
    height: 55,
    left: 14,
  },
  answersSinglechooseChild: {
    top: 190,
  },
  answersSinglechoose: {
    height: 455,
    marginTop: 20,
    width: 324,
  },
  whatIsTheCurrentLightingSParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  doesThePot1: {
    left: 1,
  },
  groupChild7: {
    top: 3,
  },
  yes: {
    left: 20,
  },
  ellipseParent2: {
    width: 43,
    left: 0,
  },
  ellipseParent3: {
    left: 181,
    width: 39,
  },
  doesThePotHaveADrainageHParent: {
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupFrame: {
    height: 47,
  },
  mainContentInner: {
    width: 313,
  },
  next: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  buttonPrimary: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: 111,
    paddingVertical: Padding.p_5xs,
    height: 47,
    flexDirection: "row",
    width: 329,
    alignItems: "center",
  },
  mainContent: {
    width: 384,
    height: 647,
    marginTop: 29,
    alignItems: "center",
  },
  topParent: {
    marginLeft: -195,
    top: 69,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  addPlantPage21: {
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

export default AddPlantPage2;
