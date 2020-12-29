// fetch videos from youtube
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export async function getVideos() {
  const vidUrl = `${baseUrl}/videos?part=snippet&chart=mostPopular&key=${apiKey}`;

  const headers = {
    method: 'GET',
    'Content-Type': 'application/json',
  };

  const response = await fetch(vidUrl, {
    headers,
  });

  if (!response.ok) {
    console.log(response.status);
    throw new Error('Failed to fetch API');
  }

  const data = await response.json();

  const { items } = data; // destructure
  console.log(items);
  return items;
}
