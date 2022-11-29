<template>
  <a
    href="#"
    @click.prevent="logout"
    class="block mb-10 text-red-800 hover:underline"
    >Sair</a
  >
  {{ products }}
</template>
<script>
import httpClient from "@/services/HttpClient.js";
import storage from "@/services/Storage.js";

export default {
  data() {
    return {
      products: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    httpClient
      .get("/api/products")
      .then((response) => next((vm) => (vm.products = response.data)));
  },
  methods: {
    //To-DO: mover para o template base do admin...
    logout() {
      httpClient.post("/api/logout").then((response) => {
        storage.remove("token");
        location.href = "/auth/login";
      });
    },
  },
};
</script>
