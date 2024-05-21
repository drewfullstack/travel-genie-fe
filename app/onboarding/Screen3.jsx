import { View, Text } from "react-native";
import { Link } from "expo-router";

const Screen3 = () => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Link href="../generate-booking/booking-details/Location">
        Generate holiday
      </Link>
    </View>
  );
};

export default Screen3;
