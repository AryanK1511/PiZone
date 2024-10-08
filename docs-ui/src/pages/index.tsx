import Layout from '@theme/Layout';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        return <Redirect to='/docs/guide' />;
      </main>
    </Layout>
  );
}
