// src/api/videoApi.js
import axios from "axios";

// const BASE_URL = "http://3.111.149.234:8080";
const BASE_URL = "http://localhost:8080";


export const getVideos = async (page = 0, size = 6) => {
  const res = await axios.get(`${BASE_URL}/videos`, {
    params: { page, size },
  });
  return res.data;
};