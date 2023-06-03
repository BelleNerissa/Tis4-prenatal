import axios from "axios";
let IP_ADDRESS = "192.168.100.10";
const api = axios.create({
  baseURL: `http://192.168.100.10:3001/`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
