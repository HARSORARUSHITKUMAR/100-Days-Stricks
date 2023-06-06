import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.set('userId', '<REQUIRED>');
encodedParams.set('accessToken', '<REQUIRED>');
encodedParams.set('playlistId', '<REQUIRED>');

const options = {
  method: 'POST',
  url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}