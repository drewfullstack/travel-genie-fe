const { View, Text } = require("react-native");
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/onboarding/Screen1">Go to screen 1</Link>
    </View>
  );
};
export default HomePage;
