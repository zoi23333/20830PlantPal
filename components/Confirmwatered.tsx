import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

type ConfirmwateredType = {
  onClose?: () => void;
};

const Confirmwatered = ({ onClose }: ConfirmwateredType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmwatered}>
      <View style={styles.confirmwateredChild} />
      <Text style={styles.youreAlmostThere1}>
        Are you absolutely sure you've watered it?
      </Text>
      <Pressable style={[styles.cancelbutton1, styles.yesbutton1FlexBox]}>
        <Pressable
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "PlantStatusPage" })
          }
        >
          <Text style={[styles.cancel1, styles.yes1Typo]}>Cancel</Text>
        </Pressable>
      </Pressable>
      <Pressable style={[styles.yesbutton1, styles.yesbutton1FlexBox]}>
        <Pressable onPress={() => {}}>
          <Text style={[styles.yes1, styles.yes1Typo]}>Yes!</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  yesbutton1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    top: 80,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  yes1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_sm,
  },
  confirmwateredChild: {
    top: 120,
    left: 0,
    borderRadius: Border.br_6xs,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
    height: 120,
    width: 234,
    backgroundColor: Color.colorWhite,
  },
  youreAlmostThere1: {
    top: 26,
    left: 16,
    color: Color.colorBlack,
    display: "flex",
    width: 197,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dMSans,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  cancel1: {
    color: Color.colorDimgray_200,
  },
  cancelbutton1: {
    left: 17,
  },
  yes1: {
    fontWeight: "500",
    color: Color.colorSeagreen,
  },
  yesbutton1: {
    left: 182,
  },
  confirmwatered: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: 120,
    width: 234,
    backgroundColor: Color.colorWhite,
  },
});

export default Confirmwatered;
