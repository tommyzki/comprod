import { SSRProvider } from 'react-bootstrap';
import Layout from '../../components/Layout';
import FootLine from '../../components/FootLine';
import WeAreSpectacle from "../../components/WeAreSpectacle"
import Team from '../../components/Team';
import HowWe from '../../components/HowWe';
import RequestDemo from '../../components/RequestDemo';

export default function player() {
  return (
    <SSRProvider>
      <Layout pageTitle="Player">
        <WeAreSpectacle />
        <Team />
        <HowWe />        
        <RequestDemo />
        <FootLine />
      </Layout>
    </SSRProvider>
  )
}
