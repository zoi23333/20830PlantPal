import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
  const navigation = useNavigation();

  const route = useRoute();

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

  const plantDataAll = route.params?.combinedData;

  console.log("Date at HomePage:", plantDataAll);

  if (plantDataAll) {
    console.log("Data at HomePage:", plantDataAll);
    storeData(plantDataAll);
  }

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
        <View style={[styles.plantcontainer, styles.myPlantsParentSpaceBlock]}>
          <Pressable
            style={[
              styles.plantcardcontainer,
              styles.plantimageAParentPosition,
            ]}
            onPress={() => navigation.navigate("PlantDetails")}
          >
            <View style={[styles.plantcard, styles.parentFlexBox]}>
              <View style={styles.plantcardbackground1} />
              <View
                style={[
                  styles.plantimageAParent,
                  styles.plantimageAParentPosition,
                ]}
              >
                <Image
                  style={styles.plantimageAIcon}
                  contentFit="cover"
                  source={require("../assets/plantimage-a1.png")}
                />
                <View style={[styles.sitetext, styles.parentFlexBox]}>
                  <Text style={[styles.livingRoom, styles.emilyTypo]}>
                    Living room
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.plantname, styles.parentFlexBox]}>
              <Text style={[styles.emily, styles.emilyTypo]}>Emily</Text>
            </View>
          </Pressable>
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
  plantimageAParentPosition: {
    position: "absolute",
    alignItems: "center",
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
  plantcardbackground1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.khaki,
    width: 110,
    height: 190,
    zIndex: 0,
  },
  plantimageAIcon: {
    width: 108,
    height: 103,
  },
  livingRoom: {
    color: Color.darkturquoise,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
  },
  sitetext: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: 3,
    paddingVertical: Padding.p_11xs,
    marginTop: 24,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  plantimageAParent: {
    top: 37,
    left: 1,
    zIndex: 1,
    alignItems: "center",
  },
  plantcard: {
    flexDirection: "row",
  },
  emily: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  plantname: {
    marginTop: 11,
    flexDirection: "row",
  },
  plantcardcontainer: {
    top: 1,
    left: 0,
    alignItems: "center",
  },
  plantcontainer: {
    height: 525,
    overflow: "hidden",
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
