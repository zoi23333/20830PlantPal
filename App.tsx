const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Setting from "./screens/Setting";
import PlantMoreInfo from "./screens/PlantMoreInfo";
import PlantDetails from "./screens/PlantDetails";
import PlantStatusPage from "./screens/PlantStatusPage";
import AddPlantPage3 from "./screens/AddPlantPage3";
import AddPlantPage2 from "./screens/AddPlantPage2";
import AddPlantPage1 from "./components/AddPlantPage1";
import HomePage from "./screens/HomePage";
import ManualChooseSchedule from "./screens/ManualChooseSchedule";
import Schedulemethod from "./screens/Schedulemethod";
import Geolocation1 from "./screens/Geolocation1";
import WelcomeScreen from "./screens/WelcomeScreen";
import Hometab1 from "./components/Hometab1";
import Hometab from "./components/Hometab";
import Statustab1 from "./components/Statustab1";
import Statustab from "./components/Statustab";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([<Hometab />, <Statustab />]);
  const [bottomTabItemsActive] = React.useState([<Hometab1 />, <Statustab1 />]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 390,
              height: 88,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
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
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlantMoreInfo"
                component={PlantMoreInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlantDetails"
                component={PlantDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPlantPage3"
                component={AddPlantPage3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPlantPage2"
                component={AddPlantPage2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPlantPage1"
                component={AddPlantPage1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ManualChooseSchedule"
                component={ManualChooseSchedule}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Schedulemethod"
                component={Schedulemethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Geolocation"
                component={Geolocation1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
