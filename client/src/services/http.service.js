import axios from "axios";
import http from "./axios.service";

const BASE_URL = "http://localhost:4000";

const BLOG_URLs = {
  getAllBlogs: `/blogs`,
};

export const getAllBlogs = async () => {
  const { data } = await http.get(BLOG_URLs.getAllBlogs);
  return data;
};
