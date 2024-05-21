import { View, Text } from "react-native";
import { Link } from "expo-router";

const Screen2 = () => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Link href="./Screen3">Go to screen3</Link>
    </View>
  );
};

export default Screen2;
