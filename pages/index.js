import Head from 'next/head';
import Search from '../components/Search';
import { getVideos } from '../lib/api';

export default function Home({ allVideos }) {
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

export async function getStaticProps() {
  const allVideos = await getVideos();
  console.log(allVideos);
  return {
    props: { allVideos },
  };
}
