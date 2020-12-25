import Head from 'next/head';
import Search from '../components/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </div>
  );
}
