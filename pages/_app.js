import { useState, useEffect } from "react"
import AppContext from "../components/AppContext/AppContext";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  const [themeContext, setThemetContext] = useState("black");

  function setTheme(){
    if(window.scrollY > 500){
      setThemetContext("white");
    } else {
      setThemetContext("black");
    }
  }

  useEffect(() => {
    setTheme();
    window.addEventListener("scroll", () => {
      setTheme();
    });
  }, []); 

  return(
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ themeContext, setThemetContext }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
