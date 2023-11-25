import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

// import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notifications}>
      <Text style={[styles.myPlants, styles.saveTypo]}>Notifications</Text>
      <Pressable
        style={styles.backbutton}
        onPress={() => navigation.navigate("Setting")}
      >
        <View style={styles.backbuttonChild} />
        <Image
          style={styles.backbuttonItem}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
      <View
        style={[
          styles.notificationTypeParent,
          styles.notificationParentPosition,
        ]}
      >
        <Text style={[styles.notificationType, styles.myPlants1FlexBox]}>
          {" "}
          Notification Type
        </Text>
        <Pressable style={[styles.myPlantsWrapper, styles.plantsSpaceBlock]}>
          <Text style={[styles.myPlants1, styles.myPlants1FlexBox]}>
            No Notifications
          </Text>
        </Pressable>
        <Pressable style={[styles.myPlantsContainer, styles.plantsSpaceBlock]}>
          <Text style={[styles.myPlants1, styles.myPlants1FlexBox]}>
            Push Notifications
          </Text>
        </Pressable>
        <Pressable style={[styles.myPlantsContainer, styles.plantsSpaceBlock]}>
          <Text style={[styles.myPlants1, styles.myPlants1FlexBox]}>
            In-App Notifications
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.notificationFrecuencyParent,
          styles.notificationParentPosition,
        ]}
      >
        <Text style={[styles.notificationType, styles.myPlants1FlexBox]}>
          {" "}
          Notification Frecuency
        </Text>
        <Pressable
          style={[styles.framePressable, styles.framePressableSpaceBlock]}
        >
          <Text style={[styles.myPlants1, styles.myPlants1FlexBox]}>
            Once a day
          </Text>
        </Pressable>
        <Pressable
          style={[styles.myPlantsWrapper1, styles.framePressableSpaceBlock]}
        >
          <Text style={[styles.myPlants1, styles.myPlants1FlexBox]}>
            Until plant care completed
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.saveWrapper}
        onPress={() => navigation.navigate("Setting")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
  },
  notificationParentPosition: {
    left: 20,
    justifyContent: "center",
    position: "absolute",
  },
  myPlants1FlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
  },
  plantsSpaceBlock: {
    marginTop: 11,
    paddingVertical: Padding.p_4xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    width: 350,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  framePressableSpaceBlock: {
    marginTop: 13,
    paddingVertical: Padding.p_4xl,
    width: 350,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  myPlants: {
    marginTop: -354.7,
    top: "50%",
    left: "35.26%",
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  backbuttonChild: {
    backgroundColor: Color.colorGray_100,
    width: 35,
    height: 32,
    zIndex: 0,
  },
  backbuttonItem: {
    top: 5,
    left: 9,
    borderRadius: Border.br_11xs,
    width: 11,
    height: 23,
    zIndex: 1,
    position: "absolute",
  },
  backbutton: {
    top: 64,
    left: 28,
    width: 30,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  notificationType: {
    fontSize: FontSize.size_base,
    width: 317,
    fontFamily: FontFamily.dMSans,
    fontWeight: "700",
    textAlign: "left",
  },
  myPlants1: {
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  myPlantsWrapper: {
    paddingHorizontal: Padding.p_8xl,
  },
  myPlantsContainer: {
    paddingHorizontal: Padding.p_7xl,
    fontFamily: FontFamily.dMSans,
  },
  notificationTypeParent: {
    top: 144,
  },
  framePressable: {
    paddingHorizontal: Padding.p_8xl,
  },
  myPlantsWrapper1: {
    paddingHorizontal: Padding.p_7xl,
  },
  notificationFrecuencyParent: {
    top: 480,
  },
  save: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  saveWrapper: {
    top: 740,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: 100,
    paddingVertical: Padding.p_2xs,
    width: 350,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  notifications: {
    backgroundColor: Color.colorWhite,
    fontFamily: FontFamily.dMSans,
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
    overflow: "hidden",
  },
});

export default Notifications;
