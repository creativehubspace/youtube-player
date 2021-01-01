import PropTypes from 'prop-types';

export default function FeaturedVideo({ video }) {
  const { title } = video.snippet;
  const { videoId } = video.id;
  const description = video.snippet.description
    ? video.snippet.description
    : title;

  const videoSrc = `https://youtube.com/embed/${videoId}`;

  return (
    <div>
      <div>
        <iframe src={videoSrc} title={title} width="100%" height="400" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

FeaturedVideo.propTypes = {
  video: PropTypes.object,
};
