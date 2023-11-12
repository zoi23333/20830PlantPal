import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.wrapperStyle}>
      <TouchableOpacity style={styles.addbuttonStyle} onPress={onPress}>
        <Icon name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    height: 90,
    width: 90,
    borderRadius: 45,
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    zIndex: 1,
    // Shadow properties
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal distance of shadow
      height: -2, // Vertical distance of shadow
    },
    shadowOpacity: 0.01, // Shadow opacity
    shadowRadius: 0.04, // Blur radius of shadow
    elevation: 6, // Elevation for Android
  },
  addbuttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4b8364",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default AddButton;
