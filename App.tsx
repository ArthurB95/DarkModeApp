import React, { useEffect, useState } from "react";

import { EventRegister } from "react-native-event-listeners";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";

import theme from "./config/theme";
import themeContext from "./config/themeContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );

    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
