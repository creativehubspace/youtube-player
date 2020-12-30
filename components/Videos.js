import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
    <VideoStyles>
      <Image src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
      <div>{title}</div>
    </VideoStyles>
  );
}

// all videos
export default function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => (
        <SingleVideo key={video.id} video={video} />
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
