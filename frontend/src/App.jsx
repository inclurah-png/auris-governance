import Layout from './components/Layout';
import { getCurrentPage } from './router';

export default function App() {
  return (
    <Layout>
      {getCurrentPage()}
    </Layout>
  );
}
