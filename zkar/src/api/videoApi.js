// src/api/videoApi.js
import axios from "axios";

const BASE_URL = "http://13.232.134.112";
// const BASE_URL = "http://localhost:8000";
// const BASE_URL = "https://zkar.onrender.com";



export const getVideos = async (page = 0, size = 6) => {
  const res = await axios.get(`${BASE_URL}/videos`, {
    params: { page, size },
  });
  return res.data;
};