import { View, Text } from "react-native";
import { Link } from "expo-router";

const Screen1 = () => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Link href="./Screen2">Go to screen 2</Link>
    </View>
  );
};

export default Screen1;
