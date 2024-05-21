import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding/Screen1" />
      <Stack.Screen name="onboarding/Screen2" />
      <Stack.Screen name="onboarding/Screen3" />
      <Stack.Screen name="generate-booking/booking-details/Location" />
    </Stack>
  );
};

export default RootLayout;
