import { View, Text, TextInput } from "react-native";
import { AppContext} from "../../AppContext";
import React, { useContext } from 'react'

const Location = () => {
  const { bookingDetails, setBookingDetails } = useContext(AppContext);
  return (
    <View>
      <Text>Where do you want to go?</Text>
      <Text>Search by Country/City</Text>
      <TextInput value={bookingDetails.location} onChangeText={(text) => {setBookingDetails({...bookingDetails, location: text})}}>Input box</TextInput>
    </View>
  );
};

export default Location;
