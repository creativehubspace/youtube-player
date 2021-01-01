import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import FeaturedVideo from './FeaturedVideo';

const VideoStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 6px;
`;

// single video item Component
function SingleVideo({ video }) {
  const imgSrc = video.snippet.thumbnails.medium.url;
  const imgWidth = video.snippet.thumbnails.medium.width;
  const imgHeight = video.snippet.thumbnails.medium.height;
  const { title } = video.snippet;

  return (
    <>
      <VideoStyles>
        <Image src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
        <h3>{title}</h3>
      </VideoStyles>
    </>
  );
}

// all videos
export default function VideoList({ videos }) {
  const firstVid = videos[0];
  return (
    <div>
      <FeaturedVideo video={firstVid} />
      {videos.map((video) => (
        <SingleVideo key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

SingleVideo.propTypes = {
  video: PropTypes.object,
};

VideoList.propTypes = {
  videos: PropTypes.array,
};
