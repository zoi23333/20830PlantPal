// BottomTabsRoot.tsx
import React from "react";
import { View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import PlantStatusPage from "../screens/PlantStatusPage";
import Hometab from "./Hometab";
import Statustab from "./Statustab";
import Hometab1 from "./Hometab1";
import Statustab1 from "./Statustab1";
import AddButton from "./AddButton";

const Tab = createBottomTabNavigator();

type BottomTabsRootProps = {
  navigation: any; // Define a more specific type if possible
};

const BottomTabsRoot: React.FC<BottomTabsRootProps> = ({ navigation }) => {
  const [bottomTabItemsNormal] = React.useState([<Hometab />, <Statustab />]);
  const [bottomTabItemsActive] = React.useState([<Hometab1 />, <Statustab1 />]);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <>
            <View
              style={{
                width: "100%",
                height: 88,
                flexDirection: "row",
              }}
            >
              {bottomTabItemsNormal.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate(state.routes[index].name);
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
            <AddButton onPress={() => navigation.navigate("AddPlantPage1")} />
          </>
        );
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PlantStatusPage"
        component={PlantStatusPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsRoot;
