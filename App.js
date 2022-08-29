import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Block, GalioProvider } from "galio-framework";
import { materialTheme } from "./constants/";

import { NavigationContainer } from "@react-navigation/native";

import Screens from "./navigation/screen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, SetFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading startAsync={fetchFonts} onFinish={() => SetFontLoaded(true)} />;
  }

  return (
    <NavigationContainer>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}
