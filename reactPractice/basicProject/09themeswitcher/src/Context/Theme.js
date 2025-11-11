import { createContext, useContext } from "react";


export   const ThemeContext = createContext({
    themeMode : "",
    lightTheme : ()=>{},
    darkTheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider


// make a custom Hook for contextProvider and useContext
export default function useTheme(){
    return  useContext(ThemeContext)
}

