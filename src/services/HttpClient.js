import axios from "axios";
import storage from "./Storage.js";

let token = storage.get("token");

const httpClient = axios.create({
  baseURL: "http://localhost/api",
});

httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//To-do: axios interceptors

export default {
  get(endpoint) {
    return httpClient.get(endpoint);
  },
  post(endpoint, data) {
    return httpClient.post(endpoint, data);
  },
  removeAuthorization() {
    delete httpClient.defaults.headers.common["Authorization"];
  },
};
