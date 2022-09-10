import axios from "axios";

export const ghibliClient = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com",
});
