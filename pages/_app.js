import { useState } from "react"
import AppContext from "../components/AppContext/AppContext";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [themeContext, setThemeContext] = useState("white");

  return(
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ themeContext, setThemeContext }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
