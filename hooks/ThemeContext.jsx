import React,{useState,useEffect,createContext, useContext} from 'react'

const ThemeContext = createContext();
export const ThemeProvider=({children})=>{
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
    const theme = {
      isDarkTheme,
      backgroundColor: isDarkTheme ? '#0d0d0d' : '#FFFFFF',
      textColor: isDarkTheme ? '#FFFFFF' : '#000000',
      toggleTheme,
    };
      return(
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      )
}
export const useTheme=()=>useContext(ThemeContext);
