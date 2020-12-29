import Image from 'next/image';
import PropTypes from 'prop-types';

// single video item Component
function SingleVideo({ video }) {
  console.log(video.snippet.thumbnails);
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

// all videos
export default function VideoList({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <SingleVideo key={video.id} video={video} />
      ))}
    </>
  );
}

SingleVideo.propTypes = {
  video: PropTypes.object,
};

VideoList.propTypes = {
  videos: PropTypes.array,
};
