import React from "react";

import Home from "./src/Home";
import themes from './src/theme';

import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";


export default function App() {
 
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
