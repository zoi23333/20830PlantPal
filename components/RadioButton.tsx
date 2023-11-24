import React from "react";
import { View, Text } from "react-native";

// Define a type for the individual item
type RadioButtonDataItem = {
  value: string; // Assuming value is a string, change as needed
  // Include other properties of item if necessary
};

// Define a type for the component props
type RadioButtonProps = {
  data: RadioButtonDataItem[];
  onSelect: (item: RadioButtonDataItem) => void; // Update the type signature as per your onSelect function
};

const RadioButton: React.FC<RadioButtonProps> = ({ data, onSelect }) => {
  return (
    <View>
      {data.map((item, index) => {
        return (
          <Text key={index} onPress={() => onSelect(item)}>
            {item.value}
          </Text>
        );
      })}
    </View>
  );
};

export default RadioButton;
