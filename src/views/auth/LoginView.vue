<template>
  <div class="w-full h-full">
    <div class="max-w-3xl rounded border border-gray-300 p-4">
      <form action="">
        <div class="w-full mb-6">
          <label for="email" class="block mb-2">E-mail</label>
          <input
            type="email"
            class="w-full rounded outline-none border border-gray-300 p-2 focus:border-gray-900 focus:ring transition duration-300 ease-in-out"
            id="email"
            placeholder="Seu email..."
            v-model="credentials.email"
          />
        </div>

        <div class="w-full mb-6">
          <label for="password" class="block mb-2">Senha</label>
          <input
            type="password"
            class="w-full rounded outline-none border border-gray-300 p-2 focus:border-gray-900 focus:ring transition duration-300 ease-in-out"
            id="password"
            placeholder="Sua senha..."
            v-model="credentials.password"
          />
        </div>

        <button
          class="px-4 py-2 rounded border border-green-900 bg-green-600 hover:bg-green-900 text-white font-bold transition duration-300 ease-in-out"
          v-on:click.prevent="login"
        >
          Acessar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import httpClient from "@/services/HttpClient.js";
import storage from "@/services/Storage.js";

export default {
  data() {
    return {
      credentials: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      httpClient.get("/sanctum/csrf-cookie").then((response) => {
        httpClient.post("/api/login", this.credentials).then((response) => {
          storage.set("token", response.data.data.token);

          //this.$router.push({ name: "admin.products" });
          location.href = "/admin/products";
        });
      });
    },
  },
};
</script>
