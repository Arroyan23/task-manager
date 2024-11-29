import React, { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [username, setUsername] = useState("No Identifier");

  return (
    <MyContext.Provider value={{ user: { username, setUsername } }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
