import { SSRProvider } from 'react-bootstrap';
import Layout from '../../components/Layout';
import FootLine from '../../components/FootLine';
import WeAreSpectacle from "../../components/WeAreSpectacle"
import Steps from '../../components/Steps';
import RequestDemo from '../../components/RequestDemo';

export default function cms() {
  return (
    <SSRProvider>
      <Layout pageTitle="CMS">
        <WeAreSpectacle />
        <Steps />
        <RequestDemo />
        <FootLine />
      </Layout>
    </SSRProvider>
  )
}
