import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
  headers: {
    'X-RapidAPI-Key': '561be32135mshc5caa262160ce46p1a6096jsn9b4affe05d6a',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

// Use async function to use await keyword
async function getInfo() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Call the function
getInfo();