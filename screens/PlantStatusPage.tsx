import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import WaterAmount from "../components/WaterAmount";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PlantStatusPage = () => {
  const [waterAmountButtonVisible, setWaterAmountButtonVisible] =
    useState(false);
  const [isWatered, setIsWatered] = useState(false);
  const [lastWateredDate, setLastWateredDate] = useState<Date | null>(null);
  const [plantImage, setPlantImage] = useState(
    require("../assets/painting1.png")
  );
  const [statusText, setStatusText] = useState(
    "Have you watered your Fiddle-leaf fig today?"
  );
  const navigation = useNavigation();

  const openWaterAmountButton = useCallback(() => {
    setWaterAmountButtonVisible(true);
  }, []);

  const closeWaterAmountButton = useCallback(() => {
    setWaterAmountButtonVisible(false);
  }, []);

  const handleYesButtonPress = () => {
    setIsWatered(true);
    setLastWateredDate(new Date());
    setPlantImage(require("../assets/AlreadyWatered.png"));
    setStatusText("There are no plant care tasks to attend to today!");
  };

  return (
    <>
      <View style={styles.plantStatusPage1}>
        <View style={styles.myPlantsParent}>
          <Text style={[styles.myPlants, styles.myPlantsTypo]}>Status</Text>
          <View style={styles.cardStatus}>
            <View style={styles.cardStatusChild} />
            <View style={[styles.statuscard, styles.statuscardLayout]}>
              <Pressable
                style={[styles.waterAmountButton1, styles.statuscardPosition]}
                onPress={openWaterAmountButton}
              >
                <Text style={styles.youreAlmostThere2}>watering amount</Text>
              </Pressable>
              <Text
                style={[
                  styles.youreAlmostThereContainer,
                  styles.statuscardLayout,
                ]}
              >
                <Text style={styles.youreAlmostThereContainer1}>
                  <Text style={styles.haveYouWatered}>{statusText}</Text>
                </Text>
              </Text>
              <Image
                style={styles.painting1Icon}
                contentFit="cover"
                source={plantImage}
              />
              <Pressable
                onPress={handleYesButtonPress}
                style={[
                  styles.yesButton1,
                  { display: isWatered ? "none" : "flex" },
                ]}
              >
                <Text style={[styles.yes, styles.yesTypo]}>Yes</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.eventTitleParent}>
            <Text style={[styles.eventTitle, styles.myPlantsTypo]}>
              Plant care events
            </Text>
            <View style={styles.eventList}>
              <View style={styles.eventEntry}>
                <Image
                  style={styles.eventEntryChild}
                  contentFit="cover"
                  source={require("../assets/group-17783.png")}
                />
                <View style={styles.eventText}>
                  <Text
                    style={[styles.waterYourFiddleLeaf2, styles.fiddleTypo]}
                  >
                    Water your Fiddle-leaf fig
                  </Text>
                  <Text style={[styles.today1, styles.daysSpaceBlock]}>
                    Today
                  </Text>
                </View>
              </View>
              <View style={styles.eventEntry1}>
                <Image
                  style={styles.eventEntryChild}
                  contentFit="cover"
                  source={require("../assets/group-177831.png")}
                />
                <View style={styles.eventText}>
                  <Text
                    style={[styles.waterYourFiddleLeaf2, styles.fiddleTypo]}
                  >
                    Water your Snake Plant
                  </Text>
                  <Text style={[styles.days, styles.daysTypo]}>4 days</Text>
                </View>
              </View>
              <View style={styles.eventEntry1}>
                <Image
                  style={styles.eventEntryChild}
                  contentFit="cover"
                  source={require("../assets/group-177832.png")}
                />
                <View style={styles.eventText}>
                  <Text
                    style={[styles.waterYourFiddleLeaf2, styles.fiddleTypo]}
                  >
                    Water your Monstera
                  </Text>
                  <Text style={[styles.days, styles.daysTypo]}>5 days</Text>
                </View>
              </View>
              <View style={styles.eventEntry1}>
                <Image
                  style={styles.eventEntryChild}
                  contentFit="cover"
                  source={require("../assets/group-177833.png")}
                />
                <View style={styles.eventText}>
                  <Text
                    style={[styles.waterYourFiddleLeaf2, styles.fiddleTypo]}
                  >
                    Water your Fiddle-leaf fig
                  </Text>
                  <Text style={[styles.days, styles.daysTypo]}>8 days</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.addButton1}
          onPress={() => navigation.navigate("AddPlantPage1")}
        >
          <Text style={[styles.add, styles.addTypo]}>Add</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={waterAmountButtonVisible}
      >
        <View style={styles.waterAmountButtonOverlay}>
          <Pressable
            style={styles.waterAmountButtonBg}
            onPress={closeWaterAmountButton}
          />
          <WaterAmount onClose={closeWaterAmountButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  myPlantsTypo: {
    fontWeight: "700",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
  },
  statuscardLayout: {
    width: 319,
    position: "absolute",
  },
  statuscardPosition: {
    top: 32,
    overflow: "hidden",
  },
  yesTypo: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
  },
  fiddleTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.dMSans,
  },
  daysSpaceBlock: {
    marginTop: 4,
    lineHeight: 18,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  daysTypo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
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
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
  },
  addTypo: {
    color: Color.colorSeagreen,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },
  vectorIconLayout: {
    width: 0,
    maxHeight: "100%",
    position: "absolute",
  },
  myPlants: {
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
  },
  cardStatusChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    width: 344,
    height: 270,
    zIndex: 0,
  },
  waterAmountButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  waterAmountButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  youreAlmostThere2: {
    fontSize: 11,
    lineHeight: 10,
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  waterAmountButton1: {
    left: 188,
    borderRadius: Border.br_8xs,
    backgroundColor: "#f3fbfe",
    paddingHorizontal: 17,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  haveYouWatered: {
    fontFamily: FontFamily.dMSans,
  },
  youreAlmostThereContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  youreAlmostThereContainer: {
    top: 3,
    color: Color.colorBlack,
    display: "flex",
    fontSize: FontSize.size_sm,
    left: 0,
    textAlign: "center",
    alignItems: "center",
  },
  painting1Icon: {
    top: 60,
    left: 83,
    width: 136,
    height: 100,
    position: "absolute",
  },
  yes: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.dMSans,
  },
  yesButton1: {
    top: 182,
    left: 87,
    borderRadius: 3,
    backgroundColor: Color.colorSeagreen,
    width: 124,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  statuscard: {
    left: 13,
    height: 213,
    zIndex: 1,
    top: 32,
    overflow: "hidden",
  },
  cardStatus: {
    marginTop: 33,
  },
  eventTitle: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.dMSans,
  },
  eventEntryChild: {
    width: 50,
    height: 50,
  },
  waterYourFiddleLeaf2: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  today1: {
    color: "#039e41",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
  },
  eventText: {
    marginLeft: 15,
  },
  eventEntry: {
    width: 340,
    flexDirection: "row",
    alignItems: "center",
  },
  days: {
    marginTop: 4,
    lineHeight: 18,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  eventEntry1: {
    marginTop: 11,
    width: 340,
    flexDirection: "row",
    alignItems: "center",
  },
  eventList: {
    marginTop: 16,
    width: 340,
    justifyContent: "center",
  },
  eventTitleParent: {
    marginTop: 33,
  },
  myPlantsParent: {
    marginLeft: -171.9,
    top: 59,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  add: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
  },
  addButton1: {
    marginLeft: -25.5,
    top: 702,
    borderRadius: Border.br_61xl,
    width: 51,
    height: 51,
    backgroundColor: Color.colorWhitesmoke_300,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  plantStatusPage1: {
    backgroundColor: Color.colorWhitesmoke_100,
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
    width: "100%",
  },
});

export default PlantStatusPage;
