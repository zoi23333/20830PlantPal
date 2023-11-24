import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { color } from "@rneui/themed/dist/config";
import RadioButton from "../components/RadioButton";

type RadioOption = {
  label: string | JSX.Element;
  value: string;
};

const AddPlantPage1: React.FC = () => {
  // Get the value of Nickname
  const [plantNickname, setPlantNickname] = useState("");
  // Get the value of the date of acquisition
  const [plantdate, setplantdate] = useState("");
  /** For Plant location choose */
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] =
    useState(undefined);
  const navigation = useNavigation();

  const [PlaceOption, setPlaceOption] = useState<string | null>(null);
  const PlaceOptions: RadioOption[] = [
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Living Room</text>
          </View>
        </Text>
      ),
      value: "livingroom",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Bed Room</text>
          </View>
        </Text>
      ),
      value: "bedroom",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Kitchen</text>
          </View>
        </Text>
      ),
      value: "kitchen",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Bath Room</text>
          </View>
        </Text>
      ),
      value: "bathroom",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Balcony</text>
          </View>
        </Text>
      ),
      value: "balcony",
    },
    {
      label: (
        <Text>
          <View style={styles.placeOption}>
            <text>Others</text>
          </View>
        </Text>
      ),
      value: "others",
    },
  ];

  /** For auto compelet input box of Plant type */
  const [plantInput, setPlantInput] = useState("");
  const [showPlantDropdown, setShowPlantDropdown] = useState(false);
  const plantTypeOptions = ["Monstera", "Cactaceae", "Kalanchoe"];

  const [cityCountryInput, setCityCountryInput] = useState("");
  const [showCityCountryDropdown, setShowCityCountryDropdown] = useState(false);
  const cityCountryOptions = [
    "Afghanistan",
    "Austria",
    "Azerbaijan",
    "Bangladesh",
    "Belgium",
    "Bulgaria",
    "Cambodia",
    "China",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lithuania",
    "Luxembourg",
    "Malaysia",
    "Malta",
    "Myanmar",
    "Nepal",
    "Netherlands",
    "North Korea",
    "Pakistan",
    "Philippines",
    "Poland",
    "Portugal",
    "Romania",
    "Saudi Arabia",
    "Slovakia",
    "Slovenia",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Syria",
    "Tajikistan",
    "Thailand",
    "Turkey",
    "United Arab Emirates",
    "United States",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ];

  // Store values and pass to next page
  const handleNextPress = () => {
    const plantData1 = {
      plantNickname: plantNickname,
      plantType: plantInput,
      plantdate: plantdate,
      plantLocation: PlaceOption,
      cityCountry: cityCountryInput,
    };
    navigation.navigate("AddPlantPage2", { plantData1 });
    console.log(plantData1); //Test
  };

  return (
    <View style={styles.addPlantPage11}>
      <View style={styles.content}>
        <View style={[styles.top, styles.topFlexBox]}>
          <Pressable style={styles.return} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/return3.png")}
            />
          </Pressable>
          <Text style={[styles.myPlants, styles.nextTypo]}>Add your plant</Text>
        </View>
        <View style={styles.frameView}>
          <View style={styles.questionwapper}>
            <View style={[styles.questionTitle]}>
              Your Plant Nickname <Text style={styles.asterisk}> {"*"}</Text>
            </View>
            <TextInput
              style={styles.Inputbox}
              placeholder="Enter the name for your plant"
              placeholderTextColor="#666"
              value={plantNickname}
              onChangeText={setPlantNickname}
            />
          </View>

          <View style={[styles.frameView, styles.UpperContainer]}>
            <View style={[styles.questionwapper]}>
              <Text style={styles.questionTitle}>
                Plant Type <Text style={styles.asterisk}> {"*"}</Text>
              </Text>

              <View style={styles.dropdownContainer}>
                <TextInput
                  style={styles.inputBox}
                  value={plantInput}
                  editable={false}
                  placeholder="Select plant type"
                  placeholderTextColor="#666"
                />
                <Pressable
                  style={styles.dropdownButton}
                  onPress={() => setShowPlantDropdown(!showPlantDropdown)}
                >
                  <Text>▼</Text>
                </Pressable>
              </View>
              {showPlantDropdown && (
                <ScrollView
                  style={[styles.scrollView, styles.suggestionsContainer]}
                >
                  {plantTypeOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => {
                        setPlantInput(option);
                        setShowPlantDropdown(false);
                      }}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          </View>

          <View style={styles.frameView}>
            <View style={styles.questionwapper}>
              <View style={styles.questionTitle}>
                Plant Location <Text style={styles.asterisk}> {"*"}</Text>{" "}
                <Text style={styles.greytext}>
                  {" "}
                  {"(Choose one location below)"}
                </Text>
              </View>
              <View style={styles.optionWapper}>
                {PlaceOptions.map((option) => (
                  <View
                    style={[
                      styles.AnswerBackground,
                      PlaceOption === option.value &&
                        styles.AnswerBackgroundSelected,
                    ]}
                  >
                    <Pressable
                      key={option.value}
                      style={styles.radioOption}
                      onPress={() => setPlaceOption(option.value)}
                    >
                      <Text
                        style={[
                          styles.radioLabel,
                          PlaceOption === option.value &&
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

            <View style={styles.frameView}>
              <View style={styles.questionwapper}>
                <View style={styles.questionTitle}>
                  Date of Acquisition <Text style={styles.asterisk}> *</Text>
                </View>

                <TextInput
                  style={styles.Inputbox}
                  placeholder="dd/mm/yyyy"
                  placeholderTextColor="#666"
                  value={plantdate}
                  onChangeText={setplantdate}
                />
              </View>
            </View>
          </View>

          <View style={styles.theCityOrRegionGrowingTheParent}>
            <View style={styles.questionwapper}>
              <Text style={styles.questionTitle}>
                Select country <Text style={styles.asterisk}> {"*"}</Text>
              </Text>
              <View style={styles.dropdownContainer}>
                <TextInput
                  style={styles.inputBox}
                  value={cityCountryInput}
                  editable={false}
                  placeholder="Select city or region"
                  placeholderTextColor="#666"
                />
                <Pressable
                  style={styles.dropdownButton}
                  onPress={() =>
                    setShowCityCountryDropdown(!showCityCountryDropdown)
                  }
                >
                  <Text>▼</Text>
                </Pressable>
              </View>
              {showCityCountryDropdown && (
                <ScrollView
                  style={[styles.scrollView, styles.suggestionsContainer]}
                >
                  {cityCountryOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => {
                        setCityCountryInput(option);
                        setShowCityCountryDropdown(false);
                      }}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          </View>
        </View>

        <Pressable
          style={[styles.button1, styles.topFlexBox]}
          onPress={handleNextPress}
        >
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionwapper: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },

  questionTitle: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
    marginBottom: 10,
    fontWeight: "500",
    color: Color.colorDarkslategray,
    display: "flex",
    flexDirection: "row",
    // zIndex: -1,
  },

  asterisk: { color: "#E33589" },

  frameRadioText: {
    fontFamily: "DM Sans",
    fontSize: 14,
    color: "#666",
  },
  frameRadioRadio: {
    padding: 30,
  },
  topFlexBox: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "600",
  },
  theCityOr1Typo: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
  },
  textTypo: {
    top: 0,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
  },
  plantPosition: {
    left: 0,
    fontWeight: "500",
    color: Color.colorDarkslategray,
  },
  frameBorder: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#737b7d",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
    flexDirection: "row",
  },
  chooseTypo: {
    top: 1,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
  },
  containerFlexBox: {
    flexWrap: "wrap",
    width: 336,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  return: {
    width: 11,
    height: 23,
  },
  myPlants: {
    fontSize: FontSize.size_3xl,
    width: 187,
    marginLeft: 64,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  top: {
    alignItems: "center",
  },
  yourPlantNickname1: {
    width: 153,
  },
  text4: {
    marginLeft: -2,
    width: 7,
    color: Color.colorMediumvioletred,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
  },
  nicknameinput: {
    height: 38,
    minWidth: 336,
    minHeight: 38,
    maxWidth: 336,
    maxHeight: 38,
    padding: Padding.p_3xs,
    borderWidth: 1,
    borderColor: "#737b7d",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    marginLeft: -2,
    fontSize: FontSize.size_sm,
    width: 336,
    fontFamily: FontFamily.dMSans,
    alignItems: "center",
    flexDirection: "row",
  },
  text5: {
    left: 70,
    width: 7,
    color: Color.colorMediumvioletred,
    position: "absolute",
    fontWeight: "500",
  },

  container: {
    marginTop: 13,
  },
  frameView: {
    marginTop: 23,
  },

  theCityOrRegionGrowingTheParent: {
    marginTop: 23,
  },
  next: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  button1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: 142,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    marginTop: 35,
    width: "100%",
    height: 47,
    alignItems: "center",
    zIndex: -1,
  },
  content: {
    height: 723,
    display: "flex",
  },
  addPlantPage11: {
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
    overflow: "hidden",
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: 66,
    width: "100%",
  },

  // Style for radio box
  placeOption: {},

  optionWapper: {
    flexDirection: "row",
    flexWrap: "wrap", // Allowing change rows
    gap: 8,
    zIndex: -1,
    // justifyContent: "space-between",
  },

  AnswerBackground: {
    backgroundColor: "#f2f2f2",
    width: "23%",
    height: 75,
    borderRadius: 6,
    display: "flex",
    zIndex: -1,
    // justifyContent: "center",
    // alignItems: "center",
  },

  AnswerBackgroundSelected: {
    backgroundColor: "#4B8364",
  },

  radioOption: {
    flex: 1,
    alignItems: "center",
    // marginVertical: 8,
    justifyContent: "center",
  },

  radioLabel: {
    fontSize: 12,
    width: 60,
    fontFamily: FontFamily.dMSans,
    textAlign: "center",
  },

  radioLabelSelected: {
    color: "white",
    fontWeight: "600",
  },

  greytext: {
    color: "#777",
    fontSize: 12,
  },

  suggestionsContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#f9f9f9",
    zIndex: 1100,
    top: 60,
    borderColor: "#eeeeee",
    borderWidth: 1,
    borderRadius: 6,
  },

  UpperContainer: {
    zIndex: 1100,
  },

  scrollView: {
    maxHeight: 180,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  selectedOption: {
    backgroundColor: "#e0e0e0",
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },

  Inputbox: {
    width: "100%",
    padding: Padding.p_3xs,
    // marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#737b7d",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
  },

  // For single choose box
  inputBox: {
    flex: 1,
    padding: 10,
    borderColor: "#f1f1f1",
    borderWidth: 0.5,
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.dMSans,
  },

  dropdownButton: {
    padding: 10,
    fontFamily: FontFamily.dMSans,
  },
});

export default AddPlantPage1;
