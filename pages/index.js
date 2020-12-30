import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import FeaturedVideo from '../components/FeaturedVideo';
import Search from '../components/Search';
import Videos from '../components/Videos';
import { getVideos, searchVideos } from '../lib/api';

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
  // const [featuredVideo, setfeaturedVideo] = useState();
  console.log(allVideos[0]);
  const featuredVideo = allVideos[0];

  /* useEffect(() => {
    setfeaturedVideo(allVideos[0]);
  }); */

  return (
    <div>
      <Head>
        <title>Youtube Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentStyles>
        <Search />
        <VideoSection>
          <FeaturedVideo video={featuredVideo} />
          <Videos videos={allVideos} />
        </VideoSection>
      </ContentStyles>
    </div>
  );
}

export async function getStaticProps() {
  const allVideos = await getVideos();
  const searchedVideos = await searchVideos('programming');
  // console.log(allVideos);
  // console.log(searchedVideos);
  return {
    props: { allVideos },
  };
}

Home.propTypes = {
  allVideos: PropTypes.array,
};
