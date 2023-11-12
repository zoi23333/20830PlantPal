import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AddPlantPage1 = () => {
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] =
    useState(undefined);
  const navigation = useNavigation();

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
        <View style={styles.mainBox1}>
          <View style={styles.containerFlexBox}>
            <Text style={[styles.yourPlantNickname1, styles.theCityOr1Typo]}>
              Your Plant Nickname
            </Text>
            <Text style={styles.text4}>*</Text>
            <TextInput
              style={styles.nicknameinput}
              placeholder="Enter the name for your plant"
              placeholderTextColor="#666"
            />
          </View>
          <View style={styles.groupParent}>
            <View style={styles.parent}>
              <Text style={[styles.text5, styles.textTypo]}>*</Text>
              <Text style={[styles.plantType, styles.plantPosition]}>
                Plant type
              </Text>
            </View>
            <TextInput
              style={[styles.frameChild, styles.frameBorder]}
              placeholder="Enter and choose the plant type"
              placeholderTextColor="#666"
            />
          </View>
          <View style={styles.frameView}>
            <View style={styles.group}>
              <Text style={[styles.text6, styles.textTypo]}>*</Text>
              <Text style={[styles.plantLocation, styles.chooseTypo]}>
                Plant Location
              </Text>
              <Text style={[styles.choose, styles.chooseTypo]}>(choose)</Text>
            </View>
            <RNKRadioGroup
              style={[styles.container, styles.containerFlexBox]}
              selectedIndex={frameRadioselectedIndex}
              onChange={setFrameRadioselectedIndex}
            >
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Living Room</Text>}
              </RNKRadio>
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Bed Room</Text>}
              </RNKRadio>
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Kitchen</Text>}
              </RNKRadio>
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Bath Room</Text>}
              </RNKRadio>
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Balcony</Text>}
              </RNKRadio>
              <RNKRadio>
                {() => <Text style={styles.frameRadioText}> Others</Text>}
              </RNKRadio>
            </RNKRadioGroup>
          </View>
          <View style={styles.frameView}>
            <View style={styles.groupView}>
              <Text style={[styles.text7, styles.textTypo]}>*</Text>
              <Text style={[styles.dateOfAcquisition1, styles.chooseTypo]}>
                Date of Acquisition
              </Text>
            </View>
            <TextInput
              style={[styles.frameItem, styles.frameBorder]}
              placeholder="Enter and choose the plant type"
              placeholderTextColor="#666"
            />
          </View>
        </View>
        <View style={styles.theCityOrRegionGrowingTheParent}>
          <Text style={styles.theCityOr1Typo}>
            The city or region growing the plant
          </Text>
          <TextInput
            style={[styles.cityregion, styles.frameBorder]}
            placeholder="Enter and choose city/region"
            placeholderTextColor="#666"
          />
        </View>
        <Pressable
          style={[styles.button1, styles.topFlexBox]}
          onPress={() => navigation.navigate("AddPlantPage2")}
        >
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    alignItems: "center",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
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
  plantType: {
    top: 0,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
    width: 96,
  },
  parent: {
    height: 18,
    width: 96,
  },
  frameChild: {
    padding: Padding.p_3xs,
    width: 336,
    alignItems: "center",
  },
  groupParent: {
    marginTop: 23,
    justifyContent: "center",
  },
  text6: {
    left: 155,
    width: 7,
    color: Color.colorMediumvioletred,
    position: "absolute",
    fontWeight: "500",
  },
  plantLocation: {
    width: 134,
    left: 0,
    fontWeight: "500",
    color: Color.colorDarkslategray,
  },
  choose: {
    left: 96,
    color: Color.colorDimgray_200,
    width: 60,
  },
  group: {
    width: 162,
    height: 19,
  },
  container: {
    marginTop: 13,
  },
  frameView: {
    marginTop: 23,
  },
  text7: {
    left: 130,
    width: 7,
    color: Color.colorMediumvioletred,
    position: "absolute",
    fontWeight: "500",
  },
  dateOfAcquisition1: {
    width: 147,
    left: 0,
    fontWeight: "500",
    color: Color.colorDarkslategray,
  },
  groupView: {
    width: 147,
    height: 19,
  },
  frameItem: {
    width: 334,
    padding: Padding.p_3xs,
  },
  mainBox1: {
    marginTop: 35,
    width: 336,
  },
  cityregion: {
    width: 327,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
  },
  theCityOrRegionGrowingTheParent: {
    marginTop: 35,
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
    width: 336,
    alignItems: "center",
  },
  content: {
    height: 723,
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
});

export default AddPlantPage1;
