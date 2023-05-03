import React, { FC, ReactNode } from "react";
import { ThemeContext } from "./Context";

type ThemeProviderProps = {
  children: ReactNode | ReactNode[];
  theme: boolean;
  onChangeTheme: (value: boolean) => void;
};
const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  onChangeTheme,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
