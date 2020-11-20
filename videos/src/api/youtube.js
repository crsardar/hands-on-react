import axios from "axios";

const KEY = "AIzaSyDurk6fiQbak9sBYYXOuricYfJ4wAk4iqM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
