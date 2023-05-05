import { createContext, useContext } from "react";

const initialState = {
  theme: true,
  onChangeTheme: (value: boolean) => {},
};

export const ThemeContext = createContext(initialState);
export const useThemeContext = () => useContext(ThemeContext);
