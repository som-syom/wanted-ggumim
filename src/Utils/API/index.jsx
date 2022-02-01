import axios from "axios";

const API_URL = "https://cdn.ggumim.co.kr/test/image_product_link.json";

const GetAPI = (params) => {
  return axios.get(API_URL, { params });
};

export default GetAPI;
