import Image from 'next/image';
import PropTypes from 'prop-types';

// single video item Component
export default function SingleVideo({ video }) {
  const imgSrc = video.snippet.thumbnails.medium.url;
  const imgWidth = video.snippet.thumbnails.medium.width;
  const imgHeight = video.snippet.thumbnails.medium.height;
  const { title } = video.snippet;

  return (
    <div>
      <Image src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
      <div>{title}</div>
    </div>
  );
}

SingleVideo.propTypes = {
  video: PropTypes.object,
};
