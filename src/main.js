import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import httpClient from "@/services/http-client";
import storage from "@/services/storage.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

httpClient.setInterceptor();
const auth = JSON.parse(storage.get("auth"));

if (auth) {
  httpClient.setAuthToken(auth.token);
}
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
