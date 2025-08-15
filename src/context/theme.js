import React, { useState } from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider ({children}) {
    const [theme ,setTheme] =useState("light");
    return(
        <ThemeContext.Provider value= {{theme,setTheme}}>
           {children} 
        </ThemeContext.Provider>
    )
}

export {ThemeContext};
