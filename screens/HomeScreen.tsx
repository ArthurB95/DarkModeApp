import React, { useState, useContext } from "react";

import { EventRegister } from "react-native-event-listeners";
import { Text, View, StyleSheet, Button, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";

import themeContext from "../config/themeContext";

export default function HomeScreen() {
  const [mode, setMode] = useState(false);
  const navigation = useNavigation();
  const theme = useContext(themeContext)

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.color}]}>Welcome to DarkMode</Text>
      <Switch value={mode} onValueChange={(value) => {setMode(value); EventRegister.emit('changeTheme', value)}} />
      <View style={styles.button}>
        <Button
          title="View Profile"
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  button: {
    paddingTop: 20,
  },
});
