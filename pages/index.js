import { SSRProvider } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import HeadLine from '../components/HeadLine';
import Layout from '../components/Layout';
import HowWe from '../components/HowWe';
import Steps from '../components/Steps'
import Review from '../components/Review';
import FootLine from '../components/FootLine';
import Team from '../components/Team';
import AppContext from '../components/AppContext/AppContext';

export default function Home() {
  const context = useContext(AppContext);
  useEffect(() => {
    const scrollHandler = () => {
      if(window.scrollY > 500){
        context.setThemeContext("white");
      } else {
        context.setThemeContext("black");
      }
    };

    scrollHandler()
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [context.themeContext]); 

  return (
    <SSRProvider>
      <Layout pageTitle="Home">
        <HeadLine />
        <Review />
        <HowWe />
        <Steps />
        <Team />
        <FootLine />
      </Layout>
    </SSRProvider>
  );
}
