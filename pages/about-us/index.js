import { SSRProvider } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import FootLine from '../../components/FootLine';
import WeAreSpectacle from "../../components/WeAreSpectacle"
import AppContext from '../../components/AppContext/AppContext';



export default function aboutUs() {
  const context = useContext(AppContext);

  useEffect(()=>{
    context.setThemeContext("white");
  },[])

  return (
    <SSRProvider>
      <Layout pageTitle="About Us">
        <WeAreSpectacle />
        <FootLine />
      </Layout>
    </SSRProvider>
  )
}
