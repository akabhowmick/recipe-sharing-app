import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/", // URL of your Django API
});

export default instance;
