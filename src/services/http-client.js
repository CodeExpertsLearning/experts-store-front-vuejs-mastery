import axios from "axios";
import storage from "@/services/storage.js";

let token = storage.get("token");

const httpFactory = axios.create({
  baseURL: "http://localhost/api",
});

const httpClient = {
  get(endpoint) {
    return httpFactory.get(endpoint);
  },
  post(endpoint, data) {
    return httpFactory.post(endpoint, data);
  },
  put(endpoint, data) {
    return httpFactory.put(endpoint, data);
  },
  delete(endpoint) {
    return httpFactory.delete(endpoint);
  },
  setAuthToken(token) {
    httpFactory.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  setInterceptor() {
    /*To-do: axios interceptors*/
    httpFactory.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status == 401) {
          storage.remove("auth");
          location.href = "/auth/login";
          return;
        }

        return Promise.reject(error);
      }
    );
  },
};

export default httpClient;
