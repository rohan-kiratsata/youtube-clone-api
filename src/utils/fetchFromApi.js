import axios from "axios";

// const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "bfe4dfb82bmsh88cbb2ae45c8ec3p1d3544jsnd24118fcefd9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
