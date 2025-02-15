import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

// get theme settings from local storage, or use default theme
const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-4",
  background: "bg-2",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // save theme settings to local storage
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to use our theme context wherever we want in our project
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
