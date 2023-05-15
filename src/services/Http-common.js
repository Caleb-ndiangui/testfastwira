import axios from "axios";

const http = axios.create({
  baseURL: "http://example.com/api"
});

export default http;
