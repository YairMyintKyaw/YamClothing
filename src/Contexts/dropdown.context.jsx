import { createContext, useState } from "react";

export const DropdownContext = createContext();
export const DropdownContextProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const value = { isCartOpen, setCartOpen };
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
