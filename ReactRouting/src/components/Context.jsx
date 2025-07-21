import { createContext, useEffect, useState } from "react";
export const ContextAPI = createContext();
const Context = ({ children }) => {
  const [userData, setUserData] = useState("N/A");
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data) {
      setUserData(data);
    }
  }, [flag]);
  return (
    <ContextAPI.Provider value={{ userData, setUserData, flag, setFlag }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default Context;
