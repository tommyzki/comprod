import { SSRProvider } from 'react-bootstrap';
import Layout from '../../components/Layout';
import FootLine from '../../components/FootLine';
import WeAreSpectacle from "../../components/WeAreSpectacle"

export default function aboutUs() {
  return (
    <SSRProvider>
      <Layout pageTitle="About Us">
        <WeAreSpectacle />
        <FootLine />
      </Layout>
    </SSRProvider>
  )
}
