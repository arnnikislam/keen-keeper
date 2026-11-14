"use client";
import React, { createContext, useState } from "react";

export const CheckInContext = createContext();

const CheckInProvider = ({ children }) => {
  // setting up the check-in item
  const [items, setItems] = useState([]);

  const value = { items, setItems };
  return (
    <CheckInContext.Provider value={value}>{children}</CheckInContext.Provider>
  );
};

export default CheckInProvider;
