import Intro from '~/components/index/Intro';
import Layout from '../components/hocs/Layout';
import Splash from '../components/index/Splash';
import { black } from '../components/utilities/Colors';

const Index = () => (
    <Layout title="Home">
      <Splash />
      <Intro />
    </Layout>
);

export default Index;
