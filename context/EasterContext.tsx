import { createContext, useState, useContext } from "react";

import { isEasterHoliday } from "../utils/isEasterHoliday";

const EasterContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useEaster = () => useContext(EasterContext);

export const EasterProvider = ({ children }) => {
  const [isEaster, setIsEaster] = useState({});
  const checkIsEaster = () => {
    const date = new Date();
    return isEasterHoliday({ date });
  };

  setIsEaster(checkIsEaster());

  return (
    <EasterContext.Provider value={isEaster}>{children}</EasterContext.Provider>
  );
};
