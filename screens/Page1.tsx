import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";

const Page1 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [potSize, setPotSize] = useState("");

  const navigateToNextPage = (type) => {
    setPotSize(type);
    navigation.navigate("Page2", { name, potSize });
  };

  return (
    <View>
      <TextInput
        placeholder="Please entry the Name"
        value={name}
        onChangeText={setName}
      />

      {/* Pot Size Selection */}
      <TouchableOpacity onPress={() => setPotSize("AAA")}>
        <Text>AAA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPotSize("BBB")}>
        <Text>BBB</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPotSize("CCC")}>
        <Text>CCC</Text>
      </TouchableOpacity>

      <Button title="Next" onPress={navigateToNextPage} />
    </View>
  );
};

export default Page1;
