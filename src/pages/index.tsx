import { Home } from '../templates/Home';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Marcos Hirazawa</title>
      </Head>
      <Home />;
    </>
  );
}
