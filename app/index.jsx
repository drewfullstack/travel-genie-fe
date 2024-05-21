const { View, Text } = require("react-native");
import { Link } from "expo-router";
import "expo-router/entry";
import React from "react";
import { AppProvider } from "./AppContext";

const HomePage = () => {
  return (
    <AppProvider>
      <View>
        <Text>Home Page</Text>
        <Link href="/onboarding/Screen1">Go to screen 1</Link>
      </View>
    </AppProvider>
  );
};

export default HomePage;
