import { SSRProvider } from 'react-bootstrap';
import Layout from '../../components/Layout';
import FootLine from '../../components/FootLine';
import WorkList from "../../components/WorkList"

export default function aboutUs() {
  return (
    <SSRProvider>
      <Layout pageTitle="About Us">
        <WorkList />
        <FootLine />
      </Layout>
    </SSRProvider>
  )
}
