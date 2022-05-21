import axios from "axios";

const instance = axios.create({
  baseURL: "http://216.48.189.49:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;