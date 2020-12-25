// single video item Component
function SingleVideo({ video }) {
  return <div>{video}</div>;
}

// all videos
export default function Videos() {
  const video = 'video';
  return <SingleVideo video={video} />;
}
