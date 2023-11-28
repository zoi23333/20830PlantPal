import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
// @ts-ignore
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { ScreenWidth } from "@rneui/base";
import Svg, { Path } from "react-native-svg";

type RadioOption = {
  label: string | JSX.Element;
  value: string;
};

const ManualChooseSchedule = () => {
  const navigation = useNavigation();

  const [selectedPlaceOptions, setSelectedPlaceOptions] = useState([]);
  const handleSelectOption = (value: string) => {
    if (selectedPlaceOptions.includes(value)) {
      setSelectedPlaceOptions(
        selectedPlaceOptions.filter((item) => item !== value)
      );
    } else {
      setSelectedPlaceOptions([...selectedPlaceOptions, value]);
    }
  };

  const OptionMorning: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-1",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-2",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-3",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-4",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-5",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-6",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>8-13</text>
          </View>
        </Text>
      ),
      value: "1-7",
    },
  ];

  const OptionAfternoon: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-1",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-2",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-3",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-4",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-5",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-6",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>14-18</text>
          </View>
        </Text>
      ),
      value: "2-7",
    },
  ];

  const OptionEvening: RadioOption[] = [
    // Evening
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-1",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-2",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-3",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-4",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-5",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-6",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text style={styles.optionText}>19-21</text>
          </View>
        </Text>
      ),
      value: "3-7",
    },
  ];

  return (
    <View style={[styles.manualChooseSchedule1, styles.saveWrapperFlexBox]}>
      <View style={styles.backbuttonParent}>
        <Pressable
          style={[styles.backbutton, styles.backbuttonFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backbuttonChild} />
          <Image
            style={styles.backbuttonItem}
            contentFit="cover"
            source={require("../assets/return3.png")}
          />
        </Pressable>
        <Text style={[styles.whenAreYou1, styles.saveTypo]}>
          When are you available for plant care?
        </Text>

        <View style={styles.manualselect}>
          <View style={styles.daysweek}>
            <Text> Mon</Text>
            <Text>Tue</Text>
            <Text>Wed</Text>
            <Text>Thu</Text>
            <Text>Fri</Text>
            <Text>Sat</Text>
            <Text>Sun</Text>
          </View>

          <View style={styles.backbuttonFlexBox}>
            <View style={styles.optionWapper}>
              {OptionMorning.map((option) => (
                <View
                  key={option.value}
                  style={[
                    styles.AnswerBackground1,
                    selectedPlaceOptions.includes(option.value) &&
                      styles.AnswerBackgroundSelected1,
                  ]}
                >
                  <Pressable
                    style={styles.radioOption}
                    onPress={() => handleSelectOption(option.value)}
                  >
                    <Svg
                      height="28" // Adjust as needed
                      width="28" // Adjust as needed
                      viewBox="0 0 1024 1024" // Your SVG's viewbox
                      style={styles.yourSvgIconStyle}
                    >
                      <Path
                        d="M896 640H128a42.666667 42.666667 0 0 1 0-85.333333h42.666667a341.333333 341.333333 0 1 1 682.666666 0h42.666667a42.666667 42.666667 0 0 1 0 85.333333z m-128 170.666667H256a42.666667 42.666667 0 0 1 0-85.333334h512a42.666667 42.666667 0 0 1 0 85.333334zM256 554.666667h512a256 256 0 1 0-512 0z"
                        fill="#f4e6ca" // Your SVG's fill color
                        strokeWidth="2"
                        // Add other path properties as needed
                      />
                    </Svg>

                    <Text
                      style={[
                        styles.radioLabel,
                        selectedPlaceOptions.includes(option.value) &&
                          styles.radioLabelSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                </View>
              ))}

              {OptionAfternoon.map((option) => (
                <View
                  key={option.value}
                  style={[
                    styles.AnswerBackground2,
                    selectedPlaceOptions.includes(option.value) &&
                      styles.AnswerBackgroundSelected2,
                  ]}
                >
                  <Pressable
                    style={styles.radioOption}
                    onPress={() => handleSelectOption(option.value)}
                  >
                    <Svg
                      height="31" // Adjust as needed
                      width="31" // Adjust as needed
                      viewBox="0 0 1024 1024" // Your SVG's viewbox
                      style={styles.yourSvgIconStyle}
                    >
                      <Path
                        d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667a42.666667 42.666667 0 1 1-85.333334 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m301.696 124.970667a42.666667 42.666667 0 0 1 0 60.330667l-30.165333 30.165333a42.666667 42.666667 0 1 1-60.330667-60.330667l30.165333-30.165333a42.666667 42.666667 0 0 1 60.330667 0z m-603.392 0a42.666667 42.666667 0 0 1 60.330667 0l30.165333 30.165333A42.666667 42.666667 0 0 1 240.469333 300.8l-30.165333-30.165333a42.666667 42.666667 0 0 1 0-60.330667zM512 341.333333a170.666667 170.666667 0 1 0 0 341.333334 170.666667 170.666667 0 0 0 0-341.333334z m-256 170.666667a256 256 0 1 1 512 0 256 256 0 0 1-512 0z m-170.666667 0a42.666667 42.666667 0 0 1 42.666667-42.666667h42.666667a42.666667 42.666667 0 1 1 0 85.333334H128a42.666667 42.666667 0 0 1-42.666667-42.666667z m725.333334 0a42.666667 42.666667 0 0 1 42.666666-42.666667h42.666667a42.666667 42.666667 0 1 1 0 85.333334h-42.666667a42.666667 42.666667 0 0 1-42.666666-42.666667zM240.469333 723.2a42.666667 42.666667 0 0 1 60.330667 60.330667l-30.165333 30.165333a42.666667 42.666667 0 0 1-60.330667-60.330667l30.165333-30.165333z m482.730667 60.330667a42.666667 42.666667 0 0 1 60.330667-60.330667l30.165333 30.165333a42.666667 42.666667 0 0 1-60.330667 60.330667l-30.165333-30.165333zM512 810.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v42.666667a42.666667 42.666667 0 1 1-85.333334 0v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666666z"
                        fill="#f4e6ca"
                        strokeWidth="2"
                      />
                    </Svg>
                    <Text
                      style={[
                        styles.radioLabel,
                        selectedPlaceOptions.includes(option.value) &&
                          styles.radioLabelSelected2,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                </View>
              ))}
              {OptionEvening.map((option) => (
                <View
                  key={option.value}
                  style={[
                    styles.AnswerBackground3,
                    selectedPlaceOptions.includes(option.value) &&
                      styles.AnswerBackgroundSelected3,
                  ]}
                >
                  <Pressable
                    style={styles.radioOption}
                    onPress={() => handleSelectOption(option.value)}
                  >
                    <Svg
                      height="28" // Adjust as needed
                      width="28" // Adjust as needed
                      viewBox="0 0 1024 1024" // Your SVG's viewbox
                      style={styles.yourSvgIconStyle}
                    >
                      <Path
                        d="M676.64 72.373333a21.333333 21.333333 0 0 0-28.426667 24.96c7.733333 32 17.333333 77.973333 17.333334 108.64a407.36 407.36 0 0 1-585.173334 366.4 21.333333 21.333333 0 0 0-30.293333 23.04 469.333333 469.333333 0 0 0 485.333333 385.333334c243.84-11.84 439.413333-212.16 445.76-456.213334a469.333333 469.333333 0 0 0-304.533333-452.16zM512 906.666667a395.306667 395.306667 0 0 1-357.333333-226.4 2.186667 2.186667 0 0 1 2.453333-3.04 480 480 0 0 0 100.96 10.666666 482.506667 482.506667 0 0 0 481.92-481.92v-11.68a2.186667 2.186667 0 0 1 3.466667-1.813333 395.52 395.52 0 0 1 81.44 78.986667A390.826667 390.826667 0 0 1 906.666667 512a395.146667 395.146667 0 0 1-394.666667 394.666667zM202.293333 262.72a8.96 8.96 0 0 0 2.88 0.426667 75.946667 75.946667 0 0 1 75.733334 75.733333 7.626667 7.626667 0 0 0 0.48 2.88 11.52 11.52 0 0 0 22.186666 0 8.746667 8.746667 0 0 0 0.426667-2.88 76 76 0 0 1 75.733333-75.733333 8.746667 8.746667 0 0 0 2.88-0.426667 11.573333 11.573333 0 0 0 0-22.24 8.746667 8.746667 0 0 0-2.88-0.426667A75.946667 75.946667 0 0 1 304 164.32a8.746667 8.746667 0 0 0-0.426667-2.88 11.52 11.52 0 0 0-22.186666 0 7.626667 7.626667 0 0 0-0.48 2.88A75.893333 75.893333 0 0 1 205.386667 240a8.96 8.96 0 0 0-2.88 0.426667 11.573333 11.573333 0 0 0 0 22.24z"
                        fill="#eaddde"
                        strokeWidth="2"
                      />
                    </Svg>
                    <Text
                      style={[
                        selectedPlaceOptions.includes(option.value) &&
                          styles.radioLabelSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.theDefaultAvailable1}>
          The default available times are in the evenings
        </Text>

        <Pressable
          style={[styles.saveWrapper, styles.saveWrapperFlexBox]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
          }
        >
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveWrapperFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },

  saveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },
  tueTypo: {
    marginTop: 54,
    height: 22,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
  },
  daybuttonwithtimeLayout: {
    height: 67,
    alignItems: "center",
  },
  textTypo: {
    height: 7,
    fontFamily: FontFamily.roboto,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_300,
    textAlign: "center",
    fontWeight: "500",
  },
  dayFlexBox: {
    height: 529,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backbuttonChild: {
    width: 35,
    height: 36,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  backbuttonItem: {
    top: 1,
    left: 8,
    borderRadius: Border.br_11xs,
    width: 11,
    height: 23,
    zIndex: 1,
    position: "absolute",
  },
  backbutton: {
    height: 30,
  },
  whenAreYou1: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    width: 336,
    height: 29,
    marginTop: 20,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },

  daysweek: {
    height: 465,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text21: {
    width: 34,
    height: 7,
    fontFamily: FontFamily.roboto,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  daybuttonwithtime: {
    justifyContent: "space-between",
  },
  text25: {
    marginTop: 10,
    width: 34,
    height: 7,
    fontFamily: FontFamily.roboto,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  daybuttonwithtime4: {
    width: 70,
  },
  day1: {
    marginLeft: 26,
  },
  text35: {
    width: 37,
    height: 7,
    fontFamily: FontFamily.roboto,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  text36: {
    width: 29,
    height: 7,
    fontFamily: FontFamily.roboto,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },

  theDefaultAvailable1: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    height: 24,
    color: Color.colorDimgray_300,
    width: 315,
    marginTop: 20,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },
  save: {
    top: 12,
    left: 100,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.colorWhite,
    width: 137,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    position: "absolute",
    zIndex: 0,
  },
  saveWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    height: 50,
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  backbuttonParent: {
    width: 339,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    justifyContent: "center",
  },
  manualChooseSchedule1: {
    shadowColor: "rgba(31, 31, 31, 0.1)",
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowRadius: 140,
    elevation: 140,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },

  //
  placeOption: {
    position: "relative",
  },

  backbuttonFlexBox: {
    flexDirection: "row",

    justifyContent: "center",
  },

  optionWapper: {
    flexDirection: "column",
    flexWrap: "wrap", // Allowing change rows
    zIndex: -1,
    height: 500,
    // justifyContent: "space-between",
    gap: 18,
    // justifyContent: "space-between",
  },

  manualselect: {
    justifyContent: "space-between",
    width: ScreenWidth * 0.7,
    marginTop: 20,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  AnswerBackground1: {
    backgroundColor: "#fff",
    borderColor: "#DDAE51",
    width: 55,
    height: 55,
    borderRadius: 6,
    borderWidth: 2,
    display: "flex",
    zIndex: -1,
    marginRight: 10,
  },

  AnswerBackgroundSelected1: {
    backgroundColor: "#DDAE51",
    borderWidth: 2,
    borderColor: "#fff",
  },

  AnswerBackground2: {
    backgroundColor: "#fff",

    width: 55,
    height: 55,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#F4A261",
    display: "flex",
    zIndex: -1,
    marginRight: 10,
  },

  AnswerBackgroundSelected2: {
    backgroundColor: "#F4A261",
    borderWidth: 2,
    borderColor: "#fff",
  },

  AnswerBackground3: {
    backgroundColor: "#fff",
    borderColor: "#BC8F92",
    width: 55,
    height: 55,
    borderRadius: 6,
    borderWidth: 2,
    display: "flex",
    zIndex: -1,
    marginRight: 10,
  },

  AnswerBackgroundSelected3: {
    backgroundColor: "#BC8F92",
    borderWidth: 2,
    borderColor: "#fff",
  },

  optionText: {
    position: "absolute",
    top: 42,
    zIndex: 1100,
    width: 50,
    marginLeft: 13,
    left: "50%",
    fontSize: 10,
    color: "#444",
  },

  radioLabelSelected: {
    color: "white",
    fontWeight: "600",
  },

  radioOption: {
    flex: 1,
    // alignItems: "center",
    // marginVertical: 8,
    // justifyContent: "center",
  },

  yourSvgIconStyle: {
    position: "absolute",
    alignSelf: "center",

    top: "43%",
    transform: [{ translateY: -10 }], // Adjust based on the size of your icon
    color: "#f4e6ca",
    zIndex: 1100,
  },
});

export default ManualChooseSchedule;
