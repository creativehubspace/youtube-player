import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import FeaturedVideo from '../components/FeaturedVideo';
import Search from '../components/Search';
import Videos from '../components/Videos';
import { searchVideos } from '../lib/api';

const ContentStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

export default function Home({ searchedVideos }) {
  // const [SelectedVideo, setSelectedVideo] = useState(searchedVideos);
  // console.log(allVideos[0]);
  const featuredVideo = searchedVideos[0];

  /* useEffect(() => {
    setSelectedVideo(searchedVideos[0]);
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
          <Videos videos={searchedVideos} />
        </VideoSection>
      </ContentStyles>
    </div>
  );
}

export async function getStaticProps() {
  const searchedVideos = await searchVideos('programming');

  console.log(searchedVideos);
  return {
    props: { searchedVideos },
  };
}

Home.propTypes = {
  searchedVideos: PropTypes.array,
};
