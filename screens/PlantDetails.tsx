import * as React from "react";
// import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from "react-native";
import { getPlantInfo } from '../path-to-Database';

const PlantDetails = () => {
  const navigation = useNavigation();
  const plantType = "Orchid"; // Set the plant type to "Orchid"
  const plantInfo = getPlantInfo(plantType);

  if (!plantInfo) {
    return (
      <View>
        <Text>Plant information not found</Text>
      </View>
    );
  }

  // Defining parameters for plant details depending of plant selected Assuming plant.temperature is a string lfrom the data base similar to the example
const temperatureText = plantInfo.temperature;
const humidityText = plantInfo.humidity;
const fertiliseText = plantInfo.fertilizingDays + " days";
const repotText = plantInfo.repotting;
const waterText = plantInfo.wateringDays + " days";
const lightText = plantInfo.light;
const planttypeText = plantInfo.name;

//Calculate with other variables  
const lastDateWater = new Date('2023-11-10'); // Replace this with your actual date
const today = new Date();//gets the date in miliseconds 
today.setHours(0, 0, 0, 0); //set clock to midnight to get full days difference
const lastwater = Math.floor((today.getTime() - lastDateWater.getTime())/(3600*24*1000); 

// Use naviagation parameters from screen of add plants to this one
const plantnameText = "Emily";
const locationText = "Copenhagen"; 
const potSizeText = "Small"; // Replace with the actual user selection
const plantSizeText = "Medium"; // Replace with the actual user selection
const drainHoleText = "Yes"; // Replace with the actual user selection
const lightTypeText= "Indirect Sunlight"; 

  
  return (
    <ScrollView
      style={styles.plantDetails}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
    >
      <View style={[styles.picture, styles.picturePosition]}>
        <View style={styles.plantcardbackground1} />
        <Image
          style={[styles.plantimageAIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/plantimage-a.png")}
        />
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={styles.livingRoom}>Living room</Text>
        </View>
      </View>
      <View style={[styles.topTextParent, styles.picturePosition]}>
        <View style={styles.topText}>
          <View style={[styles.frameParent, styles.return21FlexBox]}>
            <View>
              <Text style={[styles.emily, styles.to60Typo]}>
                {plantnameText}
              </Text>
              <View style={styles.monsteraParent}>
                <Text style={styles.daysTypo1}>{planttypeText}</Text>
                <Text style={[styles.days, styles.daysTypo1]}>· 24 days</Text>
              </View>
            </View>
            <Pressable
              style={styles.editbutton}
              onPress={() => navigation.navigate("AddPlantPage1")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/editbutton.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.watringcard}>
          <View style={[styles.watringcardChild, styles.frameItemBorder]} />
          <Image
            style={[styles.dropIcon1, styles.dropIcon1Position]}
            contentFit="cover"
            source={require("../assets/drop.png")}
          />
          <View style={[styles.lastWateringParent, styles.parentPosition]}>
            <Text style={[styles.lastWatering, styles.waterTypo]}>
              Last Watering
            </Text>
            <Text style={[styles.daysAgo, styles.daysAgoTypo]}>4 days ago</Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.frameGroup}>
            <View style={styles.guidesParent}>
              <Text style={styles.guides}>Guides</Text>
              <Pressable
                style={styles.more1}
                onPress={() => navigation.navigate("PlantMoreInfo")}
              >
                <Text style={[styles.more2, styles.more2Typo]}>More</Text>
              </Pressable>
            </View>
            <View style={styles.groupView}>
              <View style={[styles.frameView, styles.groupChildPosition]}>
                <View style={styles.guidesParent}>
                  <View style={styles.boxParent}>
                    <Image
                      style={styles.groupWrapperLayout}
                      contentFit="cover"
                      source={require("../assets/box.png")}
                    />
                    <View style={styles.view}>
                      <Text style={[styles.water, styles.waterTypo]}>
                        Water
                      </Text>
                      <Text style={[styles.every7Days1, styles.daysTypo]}>
                        {waterText}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxGroup}>
                    <Image
                      style={styles.groupWrapperLayout}
                      contentFit="cover"
                      source={require("../assets/box1.png")}
                    />
                    <View style={styles.light}>
                      <Text style={[styles.light1, styles.waterTypo]}>
                        Light
                      </Text>
                      <Text
                        style={[styles.brightIndirectLight1, styles.daysTypo]}
                      >
                        {lightText}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.frameParentFlexBox}>
                  <View style={styles.topText}>
                    <Image
                      style={styles.groupWrapperLayout}
                      contentFit="cover"
                      source={require("../assets/group-17808.png")}
                    />
                    <View style={styles.view1}>
                      <Text style={[styles.humidity, styles.waterTypo]}>
                        Humidity
                      </Text>
                      <Text style={[styles.to60, styles.daysTypo]}>
                        {humidityText}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxGroup}>
                    <Image
                      style={styles.groupWrapperLayout}
                      contentFit="cover"
                      source={require("../assets/box2.png")}
                    />
                    <View style={[styles.light, { flexWrap: "wrap" }]}>
                      {/* 
    The following style property 'flexWrap: 'wrap'' allows the text to wrap onto the next line
    if it exceeds the available width, preventing the letter "e" from being on a separate line.
    Also added a parameter called TemperatureText so that it can change according to plant type
  */}
                      <Text style={[styles.temperature, styles.fertiliseTypo]}>
                        Temperature
                      </Text>
                      <Text
                        style={[styles.brightIndirectLight1, styles.daysTypo]}
                      >
                        {temperatureText}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                  <View style={styles.frameParent4}>
                    <View style={styles.groupParent1}>
                      <View
                        style={[styles.groupWrapper, styles.groupWrapperLayout]}
                      >
                        <View
                          style={[
                            styles.rectangleWrapper,
                            styles.groupWrapperLayout,
                          ]}
                        >
                          <View
                            style={[
                              styles.groupItem,
                              styles.groupWrapperLayout,
                            ]}
                          />
                        </View>
                      </View>
                      <Image
                        style={[styles.frameIcon5, styles.frameIconPosition]}
                        contentFit="cover"
                        source={require("../assets/frame2.png")}
                      />
                    </View>
                    <View style={styles.view3}>
                      <Text style={[styles.fertilise, styles.fertiliseTypo]}>
                        Fertilise
                      </Text>
                      <Text style={[styles.days1, styles.days1Clr]}>
                        {fertiliseText}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.boxParent1}>
                    <Image
                      style={styles.groupWrapperLayout}
                      contentFit="cover"
                      source={require("../assets/box3.png")}
                    />
                    <View style={styles.view4}>
                      <Text style={[styles.repot, styles.waterTypo]}>
                        Repot
                      </Text>
                      <Text style={[styles.to60, styles.daysTypo]}>
                        {repotText}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.plantProfile}>
          <Text style={styles.guides}>Plant Profile</Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameItem, styles.frameItemBorder]} />

            <View
              style={[
                styles.proContentContainer,
                styles.frameParent5,
                styles.dropIcon1Position,
              ]}
            >
              <View style={styles.profileContent}>
                <View style={styles.inleft}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.iconprofile}
                      contentFit="cover"
                      source={require("../assets/ellipse-257.png")}
                    />
                  </View>
                  <Text>Location</Text>
                </View>
                <Text style={styles.profileDes}>{locationText}</Text>
              </View>

              <View style={styles.profileContent}>
                <View style={styles.inleft}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.iconprofile}
                      contentFit="cover"
                      source={require("../assets/ellipse-258.png")}
                    />
                  </View>
                  <Text>Light</Text>
                </View>
                <Text style={styles.profileDes}>{lightTypeText}</Text>
              </View>

              <View style={styles.profileContent}>
                <View style={styles.inleft}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.iconprofile}
                      contentFit="cover"
                      source={require("../assets/ellipse-259.png")}
                    />
                  </View>
                  <Text>Plant Size</Text>
                </View>
                <Text style={styles.profileDes}>{plantSizeText}</Text>
              </View>

              <View style={styles.profileContent}>
                <View style={styles.inleft}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.iconprofile}
                      contentFit="cover"
                      source={require("../assets/ellipse-260.png")}
                    />
                  </View>
                  <Text>Pot Size</Text>
                </View>
                <Text style={styles.profileDes}>{potSizeText}</Text>
              </View>

              <View style={styles.profileContent}>
                <View style={styles.inleft}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.iconprofile}
                      contentFit="cover"
                      source={require("../assets/ellipse-261.png")}
                    />
                  </View>
                  <Text>Drainage hole</Text>
                </View>
                <Text style={styles.profileDes}>{drainHoleText}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.return21, styles.return21FlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.return2Child}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
      {/* Wrapper ScrollView for non-scrollable content */}
      <ScrollView nestedScrollEnabled={false}>
        <Image
          style={[styles.plantDetailsChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-627.png")}
        />
      </ScrollView>
    </ScrollView>
  );
};

{
  /* To make some conponents has a flexible size with screenWidth */
}
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  picturePosition: {
    position: "absolute",
    alignItems: "center",
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  parentPosition: {
    zIndex: 2,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  return21FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  to60Typo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "500",
  },
  daysTypo1: {
    color: Color.gray_100,
    lineHeight: 24,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  frameItemBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    zIndex: 0,
  },
  dropIcon1Position: {
    top: 28,
    zIndex: 1,
    position: "absolute",
  },
  waterTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
  },
  daysAgoTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  more2Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSans,
  },
  daysTypo: {
    fontFamily: FontFamily.poppins,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  fertiliseTypo: {
    color: Color.colorSeagreen,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  frameParentFlexBox: {
    marginTop: 26,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  groupWrapperLayout: {
    height: 58,
    width: 58,
  },
  frameIconPosition: {
    top: 8,
    overflow: "hidden",
    zIndex: 1,
    position: "absolute",
  },
  days1Clr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  frameLayout: {
    width: 30,
    height: 30,
  },
  smallTypo: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
  },
  plantcardbackground1: {
    backgroundColor: Color.khaki,
    width: 391,
    height: 350,
    zIndex: 0,
  },
  plantimageAIcon: {
    top: 36,
    left: 42,
    width: 307,
    height: 278,
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    left: 0,
    height: 27,
    width: 88,
    backgroundColor: Color.colorWhite,
  },
  livingRoom: {
    left: 1,
    fontFamily: FontFamily.inter,
    color: Color.darkturquoise,
    width: 86,
    height: 19,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 5,
    position: "absolute",
  },
  rectangleParent: {
    top: 314,
    left: 293,
    height: 27,
    width: 88,
  },
  picture: {
    left: -1,
    justifyContent: "center",
    alignItems: "center",
    top: 25,
  },
  emily: {
    fontSize: FontSize.size_8xl,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  days: {
    marginLeft: 10,
  },
  monsteraParent: {
    marginTop: 10,
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  editbutton: {
    width: 28,
    height: 27,
  },
  frameParent: {
    width: 337,
  },
  topText: {
    flexDirection: "row",
  },
  watringcardChild: {
    backgroundColor: "rgba(86, 118, 220, 0.05)",
    borderColor: "#5676dc",
    borderWidth: 1.4,
    width: 246,
    height: 83,
  },
  dropIcon1: {
    left: 24,
    width: 29,
    height: 29,
  },
  lastWatering: {
    color: Color.colorRoyalblue_100,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  daysAgo: {
    color: Color.colorGray_200,
    width: 92,
    marginTop: 3,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
  },
  lastWateringParent: {
    left: 75,
    top: 23,
    alignItems: "center",
  },
  watringcard: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  guides: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
  },
  more2: {
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    fontWeight: "500",
  },
  more1: {
    marginLeft: 230,
  },
  guidesParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  water: {
    color: "#7c95e4",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  every7Days1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "500",
    top: 25,
  },
  view: {
    height: 40,
    marginLeft: 11,
    width: 75,
  },
  boxParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  light1: {
    color: "#eac069",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  brightIndirectLight1: {
    top: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "500",
  },
  light: {
    height: 52,
    marginLeft: 11,
    width: 88,
  },
  boxGroup: {
    marginLeft: 26,
    flexDirection: "row",
    alignItems: "center",
  },
  humidity: {
    color: "#c390e6",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  to60: {
    top: 23,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "500",
  },
  view1: {
    width: 72,
    height: 53,
    marginLeft: 10,
  },
  temperature: {
    left: 0,
  },
  groupItem: {
    borderRadius: 12,
    backgroundColor: "#eef7e8",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    zIndex: 0,
  },
  frameIcon5: {
    left: 8,
    width: 42,
    height: 42,
  },
  groupParent1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fertilise: {
    left: 3,
  },
  days1: {
    top: 27,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    width: 75,
  },
  view3: {
    marginLeft: 9,
    height: 42,
    width: 75,
  },
  frameParent4: {
    width: 142,
    flexDirection: "row",
    alignItems: "center",
  },
  repot: {
    color: "#59481c",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  view4: {
    width: 55,
    height: 38,
    marginLeft: 11,
  },
  boxParent1: {
    width: 153,
    marginLeft: 21,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent3: {
    width: 351,
  },
  frameView: {
    width: 350,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  groupView: {
    height: 226,
    marginTop: 17,
    width: 350,
  },
  frameGroup: {
    justifyContent: "center",
  },
  frameWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  frameItem: {
    borderColor: "#4b8364",
    borderWidth: 1,
    height: 282,
    width: 337,
    backgroundColor: Color.colorWhite,
  },
  frameInner: {
    height: 30,
    zIndex: 0,
  },
  frameIcon6: {
    left: 6,
    width: 17,
    height: 16,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  location: {
    marginLeft: 13,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSans,
  },
  copenhagen: {
    marginLeft: 84,
  },
  frameIcon7: {
    left: 5,
    width: 20,
    height: 20,
    overflow: "hidden",
    top: 5,
    zIndex: 1,
    position: "absolute",
  },
  frameParent8: {
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
  },
  small: {
    marginLeft: 133,
  },
  frameChild3: {
    height: 30,
  },
  small1: {
    marginLeft: 146,
  },
  frameIcon9: {
    top: 4,
    left: 4,
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  yes: {
    marginLeft: 118,
  },
  frameParent5: {
    left: 23,
  },
  rectangleGroup: {
    marginTop: 16,
    flexDirection: "row",
  },
  plantProfile: {
    height: 332,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    marginTop: 20,
    justifyContent: "center",
  },
  topTextParent: {
    top: 403,
    left: 20,
    height: 864,
    alignItems: "center",
  },
  return2Child: {
    borderRadius: Border.br_11xs,
    width: 11,
    height: 23,
  },
  return21: {
    top: 46,
    left: 15,
    width: 24,
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
    alignItems: "center",
    position: "absolute",
  },
  plantDetailsChild: {
    width: 390,
    height: 30,
    left: 0,
  },
  plantDetails: {
    shadowColor: "rgba(31, 31, 31, 0.1)",
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowRadius: 140,
    elevation: 140,
    shadowOpacity: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },

  proContentContainer: {
    flexDirection: "column", // Align children vertically
    justifyContent: "flex-start", // Align children to the start of the container
    alignItems: "stretch", // Stretch children to match the width of the container
    gap: 20, // Gap between each child component (this might need to be adjusted)
  },

  profileContent: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Distribute children on the left and right
    alignItems: "center", // Center children vertically
    width: screenWidth * 0.73, // 90% of screen width, adjust the percentage as needed
  },

  inleft: {
    flexDirection: "row", // Align children horizantally
    justifyContent: "flex-start", // Align children to the start of the container vertically
    alignItems: "center", // Align children to the start of the container horizontally
    gap: 10,
  },
  iconContainer: {
    position: "relative", // Establishes a positioning context for absolute children
    width: 30, // Set the desired width
    height: 30, // Set the desired height
    // Add any additional styles like margin, padding, etc., as needed
  },
  iconprofile: {
    // Styles for the first image
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Set width and height as needed, or leave as above to fill the container
  },
  profileDes: {
    // color: "#444",
    fontWeight: "500",
  },
});

export default PlantDetails;
