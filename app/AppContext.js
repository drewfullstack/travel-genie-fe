import React, { createContext, useState } from 'react';
export const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    location: '',
    dates: '',
    budget: '',
    inbound: '',
    outbound: '',
  });
  return (
    <AppContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </AppContext.Provider>
  );
};