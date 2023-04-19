import axios from "axios";

// we need to pass the baseURL as an object
const Api = axios.create({
  baseURL: "https://api.tvmaze.com/search/shows?q=all",
});

export default Api;