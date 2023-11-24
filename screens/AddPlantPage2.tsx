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

// Define a type for the route parameters
// type AddPlantPage2RouteParams = {
//   AddPlantPage2: {
//     plantData: any;
//   };
// };
const AddPlantPage2: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const plantDataFromPage1 = route.params?.plantData1;
  console.log("Data from Page1:", plantDataFromPage1);

  // Combine and pass data to next page
  const handleNextPress = () => {
    const plantData2 = {
      ...plantDataFromPage1, // Data from AddPlantPage1
      lightingOption: lightingOption,
      drainageOption: drainageOption,
    };
    navigation.navigate("AddPlantPage3", { plantData2 });
    console.log("Data for Page2:", plantData2);
  };

  const [lightingOption, setLightingOption] = useState<string | null>(null);
  const [drainageOption, setDrainageOption] = useState<string | null>(null);

  // Define your radio options
  const lightingOptions: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.boldText}>Direct Sunlight</View>
          {"\n"}
          <Text style={styles.normalText}>
            At least 6 hours of direct sun per day
          </Text>
        </Text>
      ),
      value: "direct",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Indirect Sunlight </View>
          {"\n"}
          <Text style={styles.normalText}>
            Bright, filtered light without direct sun exposure.
          </Text>
        </Text>
      ),
      value: "indirect",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Low Light</View>
          {"\n"}
          <Text style={styles.normalText}>
            Minimal natural light, often in shaded areas or rooms with few
            windows.
          </Text>
        </Text>
      ),
      value: "low",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Full Shade</View>
          {"\n"}
          <Text style={styles.normalText}>
            No direct sunlight, often in completely shaded or dark areas.
          </Text>
        </Text>
      ),
      value: "shade",
    },
    {
      label: (
        <Text>
          <View style={styles.boldText}>Artificial Light</View>
          {"\n"}
          <Text style={styles.normalText}>
            Man-made light sources, like fluorescent, LED, or grow lights, used
            for plant growth.
          </Text>
        </Text>
      ),
      value: "artificial",
    },
  ];

  const drainageOptions: RadioOption[] = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <View style={[styles.addPlantPage21]}>
      <View style={styles.topParent}>
        <View style={styles.topFlexBox}>
          <Pressable
            style={styles.return}
            onPress={() => navigation.navigate("AddPlantPage1")}
          >
            <Image
              style={[styles.icon]}
              contentFit="cover"
              source={require("../assets/return1.png")}
            />
          </Pressable>
          <Text style={[styles.myPlants, styles.nextTypo]}>Add your plant</Text>
        </View>

        <View style={styles.mainContent}>
          <View>
            <View style={styles.questionContent}>
              <View style={styles.questionWrapper}>
                {/* Lighting situation question */}
                <Text style={styles.question}>
                  What is the current lighting situation for the plant?
                </Text>
                {lightingOptions.map((option) => (
                  <View style={styles.AnswerBackground}>
                    <Pressable
                      key={option.value}
                      style={styles.radioOption}
                      onPress={() => setLightingOption(option.value)}
                    >
                      <View
                        style={[
                          styles.circle,
                          lightingOption === option.value &&
                            styles.selectedCircle,
                        ]}
                      />
                      <Text style={styles.radioLabel}>{option.label}</Text>
                    </Pressable>
                  </View>
                ))}
              </View>

              <View style={styles.questionWrapper}>
                {/* Drainage question */}
                <Text style={styles.question}>
                  Does the pot have a drainage hole?
                </Text>
                <View style={styles.flatAnswer}>
                  {drainageOptions.map((option) => (
                    <Pressable
                      key={option.value}
                      style={styles.radioOption}
                      onPress={() => setDrainageOption(option.value)}
                    >
                      <View
                        style={[
                          styles.circle,
                          drainageOption === option.value &&
                            styles.selectedCircle,
                        ]}
                      />
                      <Text style={styles.radioLabel}>{option.label}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>

            <Pressable
              style={[styles.buttonPrimary, styles.buttonPrimarySpaceBlock]}
              onPress={handleNextPress}
            >
              <Text style={[styles.next, styles.nextTypo]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    fontFamily: FontFamily.dMSans,
    fontSize: 14,
    marginBottom: 0,
    width: "90%",
  },
  questionWrapper: {
    // display: "flex",

    gap: 8,
    marginTop: 35,
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

  AnswerBackground: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: "auto",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 6,
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

  //The style form Locofy.ai

  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },

  buttonPrimarySpaceBlock: {
    marginTop: 30,
    justifyContent: "center",
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
    width: "100%",
    alignItems: "center",
    // marginLeft: 23,
  },

  groupFrame: {
    height: 47,
  },
  next: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  buttonPrimary: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    height: 47,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },

  questionContent: {
    alignSelf: "center",
  },

  addPlantPage21: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },

  topParent: {
    top: 69,
    paddingLeft: 30,
    paddingRight: 30,
  },

  flatAnswer: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    flex: 1,
    justifyContent: "space-between",
    // paddingRight: 90,
  },
});

export default AddPlantPage2;
