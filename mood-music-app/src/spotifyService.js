import axios from 'axios';

const CLIENT_ID = '690ef5a6f9a347fe8f6ba94b9599da0e';
const CLIENT_SECRET = '1b483adf589c44cdbc664ed2543a05a2';
const AUTH_URL = 'https://accounts.spotify.com/api/token';
const API_URL = 'https://api.spotify.com/v1';

let accessToken = '';

const getAccessToken = async () => {
  const response = await axios.post(
    AUTH_URL,
    new URLSearchParams({ grant_type: 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
    }
  );
  accessToken = response.data.access_token;
};

export const searchSongs = async (query) => {
  if (!accessToken) await getAccessToken();

  const response = await axios.get(`${API_URL}/search`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      q: query,
      type: 'track',
      limit: 10,
    },
  });

  return response.data.tracks.items.map((track) => ({
    title: track.name,
    artist: track.artists[0].name,
    url: track.external_urls.spotify,
  }));
};
