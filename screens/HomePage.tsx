import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScreenHeight, ScreenWidth } from "@rneui/base";

interface PlantData {
  id: string;
  plantNickname: string;
  // other properties...
}

const HomePage = () => {
  // // Clear the added data
  // const clearSpecificData = async () => {
  //   try {
  //     await AsyncStorage.removeItem("plantDataStorage");
  //     console.log("Data cleared successfully");
  //   } catch (e) {
  //     console.error("Failed to clear the data from AsyncStorage", e);
  //   }
  // };
  // // Call this function where needed to clear specific data
  // clearSpecificData();

  const navigation = useNavigation();

  const route = useRoute();

  const typeGetPath = [
    { "Snake Plant": "snakePlant1.png" },
    { "Spider Plant": "Spiderplant2.png" },
    { Pothos: "pothosplant3.png" },
    { "Peace Lily": "PeacyLilly4.png" },
    { "Aloe Vera": "aloever5.png" },
    { "ZZ Plant": "zzplant6.png" },
    { "Rubber Plant": "rubberplant7.png" },
    { "Jade Plant": "jadeplant8.png" },
    { "Boston Fern": "boston9.png" },
    { Orchid: "orchid10.png" },
    { "Imaginary Fern": "imaginary11.png" },
  ];

  // The function for storeData
  const storeData = async (newData) => {
    try {
      // Retrieve existing data
      const existingData = await AsyncStorage.getItem("plantDataStorage");
      let newDataArray = JSON.parse(existingData);

      if (!newDataArray) {
        newDataArray = []; // If no existing data, create a new array
      }

      // Append new data
      newDataArray.push(newData);

      // Save updated data array
      await AsyncStorage.setItem(
        "plantDataStorage",
        JSON.stringify(newDataArray)
      );
    } catch (e) {
      console.error("Failed to save the data to AsyncStorage", e);
    }
  };

  // read data from adding before
  const plantDataAll = route.params?.combinedData;

  console.log("Date at HomePage:", plantDataAll);

  // Store data
  if (plantDataAll) {
    console.log("Data at HomePage:", plantDataAll);
    storeData(plantDataAll);
  }

  // Getiing data from AddPlantPage3
  const retrieveData = async () => {
    try {
      const existingData = await AsyncStorage.getItem("plantDataStorage");
      return existingData ? JSON.parse(existingData) : null;
    } catch (e) {
      console.error("Failed to fetch the data from AsyncStorage", e);
    }
  };

  const logData = async () => {
    try {
      const addedData = await retrieveData();
      console.log("Retrieved Data:", addedData);
      return addedData;
    } catch (e) {
      console.error("Error logging data", e);
    }
  };

  // Make the data can be used in return
  const [plantData, setPlantData] = useState<PlantData[]>([]);

  useEffect(() => {
    logData().then((addedData) => {
      if (addedData && addedData.length > 0) {
        setPlantData(addedData);
        console.log("Data outside logData function:", addedData);
      }
    });
  }, []); // Empty dependency array means this runs once on component mount

  console.log("The data ready be used in return: ", plantData);

  // Convert imagePath to an object for easier access
  const imagePathMap = typeGetPath.reduce((map, obj) => {
    const key = Object.keys(obj)[0];
    map[key] = obj[key];
    return map;
  }, {});

  // Add imagePath to each plant in plantData
  const updatedPlantData = plantData.map((plant) => {
    const imagePath = imagePathMap[plant.plantType];
    return { ...plant, imagePath };
  });

  console.log("updatedPlantData:", updatedPlantData);

  // The function to replace correct image path
  type ImageMap = {
    [key: string]: NodeRequire;
  };

  // Define the image map
  const imageMap: ImageMap = {
    "snakePlant1.png": require("../assets/snakePlant1.png"),
    "Spiderplant2.png": require("../assets/Spiderplant2.png"),
    "pothosplant3.png": require("../assets/pothosplant3.png"),
    "PeacyLilly4.png": require("../assets/PeacyLilly4.png"),
    "aloever5.png": require("../assets/aloever5.png"),
    "zzplant6.png": require("../assets/zzplant6.png"),
    "rubberplant7.png": require("../assets/rubberplant7.png"),
    "jadeplant8.png": require("../assets/jadeplant8.png"),
    "boston9.png": require("../assets/boston9.png"),
    "orchid10.png": require("../assets/orchid10.png"),
    "imaginary11.png": require("../assets/imaginary11.png"),
  };

  // Function to get the image source
  const getImageSource = (imagePath: string): NodeRequire => {
    return imageMap[imagePath] || require("../assets/group-177832.png"); // Default image if not found
  };
  // The template of a array:
  // cityCountry: "Denmark";
  // drainageOption: "yes";
  // lightingOption: "direct";
  // plantLocation: "livingroom";
  // plantNickname: "Zoe";
  // plantType: "Spider Plant";
  // plantdate: "12/11/2022";
  // plantsize: "smallplant";
  // potsize: "smallpot";
  // imagePath: "imagename.png"

  return (
    <View style={[styles.homePage, styles.iconLayout]}>
      <View style={[styles.hometopbarParent, styles.parentFlexBox]}>
        <View style={styles.hometopbar}>
          <View style={styles.hometopbarChild} />
          <Text style={[styles.pagetitle, styles.myPlantsTypo]}>PlantPal</Text>
          <Pressable
            style={styles.settingbutton}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/settingbutton.png")}
            />
          </Pressable>
        </View>

        <View style={[styles.myPlantsParent, styles.myPlantsParentSpaceBlock]}>
          <Text style={[styles.myPlants, styles.myPlantsTypo]}>My Plants</Text>
        </View>
        <View style={styles.plantcontainer}>
          {updatedPlantData.map((plant, index) => (
            <Pressable
              key={plant.id} // Prefer using unique ID over index
              style={[styles.plantcardcontainer]}
              onPress={() => navigation.navigate("PlantDetails", { plant })}
            >
              <View style={styles.cardContent}>
                <View style={styles.plantcardbackground1} />
                <View style={[styles.plantimageAParent]}>
                  <Image
                    style={styles.plantimageAIcon}
                    contentFit="contain"
                    source={getImageSource(plant.imagePath)}
                  />
                  <View style={[styles.sitetext, styles.parentFlexBox]}>
                    <Text style={[styles.livingRoom, styles.emilyTypo]}>
                      {plant.plantLocation}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={[styles.plantNickname]}>
                <Text style={[styles.emily, styles.emilyTypo]}>
                  {plant.plantNickname}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  myPlantsTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  myPlantsParentSpaceBlock: {
    marginTop: 28,
    alignSelf: "stretch",
  },
  siteTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },

  emilyTypo: {
    fontFamily: FontFamily.inter,
    fontWeight: "500",
    textAlign: "center",
  },
  hometabLayout: {
    paddingVertical: Padding.p_lg,
    height: 88,
    width: 195,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_300,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    height: 15,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dMSans,
  },
  vectorIconLayout: {
    width: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  hometopbarChild: {
    width: 36,
    height: 27,
    backgroundColor: Color.colorWhite,
  },
  pagetitle: {
    fontSize: FontSize.size_7xl,
    marginLeft: 93,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  settingbutton: {
    height: 30,
    width: 28,
    marginLeft: 93,
  },
  hometopbar: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  myPlants: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
  },
  site: {
    marginLeft: 14,
  },
  plantParent: {
    flexDirection: "row",
  },
  myPlantsParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {},
  plantcardbackground1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.khaki,
    width: ScreenWidth * 0.26,
    height: 190,
    zIndex: 0,
    position: "relative",
  },
  plantimageAIcon: {
    width: ScreenWidth * 0.26,
    height: ScreenWidth * 0.26,
  },
  livingRoom: {
    color: Color.darkturquoise,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
  },
  sitetext: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: 3,
    // paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: 130,
  },

  plantimageAParent: {
    top: 37,
    left: 1,
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
  },
  plantcard: {
    flexDirection: "row",
  },
  emily: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  plantNickname: {
    marginTop: 11,
  },
  plantcardcontainer: {
    top: 1,
    left: 0,
    // borderColor: "red",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    width: ScreenWidth * 0.26,
    height: 230,
  },
  plantcontainer: {
    // height: ScreenHeight,
    overflow: "hidden",
    marginTop: 28,
    alignSelf: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 22,
  },
  hometopbarParent: {
    marginLeft: -176,
    top: 59,
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  add: {
    fontSize: FontSize.size_smi,
    color: Color.colorSeagreen,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  homePage: {
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
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage;
