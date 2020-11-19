import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID 3aYtL95VY43RtqmodYSnH3UUg5S3Dh-H-CzFr8cbPdU",
  },
  baseURL: "https://api.unsplash.com",
});
