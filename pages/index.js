import { SSRProvider } from 'react-bootstrap';
import HeadLine from '../components/HeadLine';
import Layout from '../components/Layout';
import HowWe from '../components/HowWe';
import Steps from '../components/Steps'
import Review from '../components/Review';
import FootLine from '../components/FootLine';
import Team from '../components/Team';

export default function Home() {

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
