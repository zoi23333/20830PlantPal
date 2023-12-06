import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import RadioButton from "../components/RadioButton";

type RadioOption = {
  label: string | JSX.Element;
  value: string;
};

const AddPlantPage3: React.FC = () => {
  const navigation = useNavigation();
  // Get value from last page
  const route = useRoute();

  const plantDataFromPage2 = route.params?.plantData2;

  const handleSavePress = () => {
    // Combine all data (from Page1, Page2, and Page3)
    const combinedData = {
      ...plantDataFromPage2,
      plantsize: plantsizeOption,
      potsize: potOption,
    };

    // Navigate to AddedDataPage with the combined data
    navigation.navigate("BottomTabsRoot", {
      screen: "HomePage",
      params: { combinedData },
    });

    console.log(combinedData);
  };

  const [plantsizeOption, setplantsizeOption] = useState<string | null>(null);

  const plantsizeOptions: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.boldText}>Small</View>
          {"\n"}
          <Text style={styles.normalText}>Up to 30 cm or 12 inches</Text>
        </Text>
      ),
      value: "smallplant",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Medium</View>
          {"\n"}
          <Text style={styles.normalText}>
            30 cm to 90 cm or 12 inches to 36 inches
          </Text>
        </Text>
      ),
      value: "mediumplant",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Large</View>
          {"\n"}
          <Text style={styles.normalText}>Over 90 cm or 36 inches</Text>
        </Text>
      ),
      value: "largeplant",
    },
  ];

  const [potOption, setpotOption] = useState<string | null>(null);
  const potOptions: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.boldText}>Small</View>
          {"\n"}
          <Text style={styles.normalText}>Up to 15 cm or 6 inchess</Text>
        </Text>
      ),
      value: "smallpot",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Medium</View>
          {"\n"}
          <Text style={styles.normalText}>
            15 cm to 30 cm or 6 inches to 12 inches
          </Text>
        </Text>
      ),
      value: "mediumpot",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Large</View>
          {"\n"}
          <Text style={styles.normalText}>Over 30 cm or 12 inches</Text>
        </Text>
      ),
      value: "largepot",
    },
  ];

  return (
    <View style={styles.addPlantPage31}>
      <View style={styles.mainContent}>
        <View style={styles.topFlexBox}>
          <Pressable
            style={styles.return2}
            onPress={() => navigation.navigate("AddPlantPage2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/return.png")}
            />
          </Pressable>
          <Text style={[styles.myPlants, styles.save2Typo]}>
            Add your plant
          </Text>
        </View>
        <View style={styles.Icontent}>
          <View style={styles.questionWrapper}>
            <Text
              style={styles.question}
            >{`Please select the size category that best describes your plant`}</Text>
            <View style={styles.optionWapper}>
              {plantsizeOptions.map((option) => (
                <View style={styles.AnswerBackground}>
                  <Pressable
                    key={option.value}
                    style={styles.radioOption}
                    onPress={() => setplantsizeOption(option.value)}
                  >
                    <View
                      style={[
                        styles.circle,
                        plantsizeOption === option.value &&
                          styles.selectedCircle,
                      ]}
                    />
                    <Text style={styles.radioLabel}>{option.label}</Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.questionWrapper2}>
            <Text style={styles.question}>
              Please choose the size category of the pot diameter
            </Text>
            <View style={styles.optionWapper}>
              {potOptions.map((option) => (
                <View style={styles.AnswerBackground}>
                  <Pressable
                    key={option.value}
                    style={styles.radioOption}
                    onPress={() => setpotOption(option.value)}
                  >
                    <View
                      style={[
                        styles.circle,
                        potOption === option.value && styles.selectedCircle,
                      ]}
                    />
                    <Text style={styles.radioLabel}>{option.label}</Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
          <Pressable
            style={[styles.save1, styles.topFlexBox]}
            onPress={() => {
              handleSavePress();
              // navigation.navigate("HomePage");
            }}
          >
            <Text style={[styles.save2, styles.save2Typo]}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // iconLayout: {
  //   overflow: "hidden",
  //   width: "100%",
  // },
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
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
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
    top: 69,
    alignItems: "center",
    // paddingLeft: 2,
    // paddingRight: 2,
  },

  Icontent: {
    width: "100%",
  },

  addPlantPage31: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignItems: "center",
  },

  // style for options
  question: {
    fontFamily: FontFamily.dMSans,
    fontSize: 14,
    marginBottom: 0,
  },
  questionWrapper: {
    // marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignContent: "center",
    width: "100%",
    marginTop: 35,
  },

  questionWrapper2: {
    // marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignContent: "center",
    width: "100%",
    marginTop: 10,
  },

  boldText: {
    fontSize: 14,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
    marginBottom: 5,
  },

  normalText: {
    fontSize: 12,
    fontFamily: FontFamily.dMSans,
    color: "#555",
  },
  optionWapper: {},

  AnswerBackground: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: "auto",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    borderRadius: 6,
  },

  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4B8364",
    marginRight: 13,
  },
  selectedCircle: {
    backgroundColor: "#4B8364",
    borderColor: "#6CAE39",
  },
  radioLabel: {
    fontSize: 14,
    fontFamily: FontFamily.dMSans,
  },
});

export default AddPlantPage3;
