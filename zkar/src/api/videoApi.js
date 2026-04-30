import axios from "axios";

const BASE_URL = "http://3.111.149.234";

export const getVideos = async (page = 0, size = 6) => {
  const res = await axios.get(
    `${BASE_URL}/videos?page=${page}&size=${size}`
  );
  return res.data;
};

export const getVideoById = async (id) => {
  const res = await axios.get(`${BASE_URL}/videos/${id}`);
  return res.data;
};