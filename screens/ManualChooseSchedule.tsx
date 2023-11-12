import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
// @ts-ignore
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ManualChooseSchedule = () => {
  const [dayButtonchecked, setDayButtonchecked] = useState(false);
  const [dayButton1checked, setDayButton1checked] = useState(false);
  const [dayButton2checked, setDayButton2checked] = useState(false);
  const [dayButton3checked, setDayButton3checked] = useState(false);
  const [dayButton4checked, setDayButton4checked] = useState(false);
  const [dayButton5checked, setDayButton5checked] = useState(false);
  const [dayButton6checked, setDayButton6checked] = useState(false);
  const [dayButton7checked, setDayButton7checked] = useState(false);
  const [dayButton8checked, setDayButton8checked] = useState(false);
  const [dayButton9checked, setDayButton9checked] = useState(false);
  const [dayButton10checked, setDayButton10checked] = useState(false);
  const [dayButton11checked, setDayButton11checked] = useState(false);
  const [dayButton12checked, setDayButton12checked] = useState(false);
  const [dayButton13checked, setDayButton13checked] = useState(false);
  const [nightButtonchecked, setNightButtonchecked] = useState(true);
  const [nightButton1checked, setNightButton1checked] = useState(true);
  const [nightButton2checked, setNightButton2checked] = useState(true);
  const [nightButton3checked, setNightButton3checked] = useState(true);
  const [nightButton4checked, setNightButton4checked] = useState(true);
  const [nightButton5checked, setNightButton5checked] = useState(true);
  const [nightButton6checked, setNightButton6checked] = useState(true);
  const navigation = useNavigation();

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
            <Text style={styles.mon}> Mon</Text>
            <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
            <Text style={[styles.wed, styles.tueTypo]}>Wed</Text>
            <Text style={[styles.tue, styles.tueTypo]}>Thu</Text>
            <Text style={[styles.tue, styles.tueTypo]}>Fri</Text>
            <Text style={[styles.tue, styles.tueTypo]}>Sat</Text>
            <Text style={[styles.tue, styles.tueTypo]}>Sun</Text>
          </View>
          <View style={styles.backbuttonFlexBox}>
            <View style={styles.dayFlexBox}>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButtonchecked}
                  onPress={() => setDayButtonchecked(!dayButtonchecked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButtonLayout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton1checked}
                  onPress={() => setDayButton1checked(!dayButton1checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton1Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton2checked}
                  onPress={() => setDayButton2checked(!dayButton2checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton2Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton3checked}
                  onPress={() => setDayButton3checked(!dayButton3checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton3Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime4,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton4checked}
                  onPress={() => setDayButton4checked(!dayButton4checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton4Layout}
                />
                <Text style={[styles.text25, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton5checked}
                  onPress={() => setDayButton5checked(!dayButton5checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton5Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton6checked}
                  onPress={() => setDayButton6checked(!dayButton6checked)}
                  checkedColor="#ffde59"
                  containerStyle={styles.dayButton6Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>08-13</Text>
              </View>
            </View>
            <View style={[styles.day1, styles.dayFlexBox]}>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton7checked}
                  onPress={() => setDayButton7checked(!dayButton7checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton7Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton8checked}
                  onPress={() => setDayButton8checked(!dayButton8checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton8Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton9checked}
                  onPress={() => setDayButton9checked(!dayButton9checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton9Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton10checked}
                  onPress={() => setDayButton10checked(!dayButton10checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton10Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime4,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton11checked}
                  onPress={() => setDayButton11checked(!dayButton11checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton11Layout}
                />
                <Text style={[styles.text25, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton12checked}
                  onPress={() => setDayButton12checked(!dayButton12checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton12Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
              <View
                style={[
                  styles.daybuttonwithtime,
                  styles.daybuttonwithtimeLayout,
                ]}
              >
                <CheckBox
                  checked={dayButton13checked}
                  onPress={() => setDayButton13checked(!dayButton13checked)}
                  checkedColor="#f4a261"
                  containerStyle={styles.dayButton13Layout}
                />
                <Text style={[styles.text21, styles.textTypo]}>14-18</Text>
              </View>
            </View>
            <View style={[styles.day1, styles.dayFlexBox]}>
              <CheckBox
                checked={nightButtonchecked}
                onPress={() => setNightButtonchecked(!nightButtonchecked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButtonLayout}
              />
              <Text style={[styles.text35, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton1checked}
                onPress={() => setNightButton1checked(!nightButton1checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton1Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton2checked}
                onPress={() => setNightButton2checked(!nightButton2checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton2Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton3checked}
                onPress={() => setNightButton3checked(!nightButton3checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton3Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton4checked}
                onPress={() => setNightButton4checked(!nightButton4checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton4Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton5checked}
                onPress={() => setNightButton5checked(!nightButton5checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton5Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
              <CheckBox
                checked={nightButton6checked}
                onPress={() => setNightButton6checked(!nightButton6checked)}
                checkedColor="#bc8f92"
                containerStyle={styles.nightButton6Layout}
              />
              <Text style={[styles.text36, styles.textTypo]}>19-00</Text>
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
  dayButtonLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton3Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton4Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton5Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton6Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton7Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton8Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton9Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton10Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton11Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton12Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  dayButton13Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButtonLayout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton1Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton3Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton4Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton5Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  nightButton6Layout: {
    backgroundColor: "transparent",
    padding: 0,
    position: "relative",
  },
  saveWrapperFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  backbuttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
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
  mon: {
    width: 51,
    height: 22,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSans,
    fontWeight: "500",
  },
  tue: {
    width: 43,
  },
  wed: {
    width: 44,
  },
  daysweek: {
    height: 484,
    alignItems: "center",
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
  manualselect: {
    justifyContent: "space-between",
    width: 315,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
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
});

export default ManualChooseSchedule;
