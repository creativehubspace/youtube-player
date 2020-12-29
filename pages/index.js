import Head from 'next/head';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Videos from '../components/Videos';
import { getVideos } from '../lib/api';

export default function Home({ allVideos }) {
  return (
    <div>
      <Head>
        <title>Youtube Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <Videos videos={allVideos} />
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

Home.propTypes = {
  allVideos: PropTypes.array,
};
