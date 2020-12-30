import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import FeaturedVideo from '../components/FeaturedVideo';
import Search from '../components/Search';
import Videos from '../components/Videos';
import { getVideos } from '../lib/api';

const ContentStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
`;

export default function Home({ allVideos }) {
  return (
    <div>
      <Head>
        <title>Youtube Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentStyles>
        <Search />
        <VideoSection>
          <FeaturedVideo />
          <Videos videos={allVideos} />
        </VideoSection>
      </ContentStyles>
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
