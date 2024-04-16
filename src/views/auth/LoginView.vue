<template>
  <div class="w-full h-full absolute flex items-center justify-center">
    <div class="max-w-3xl rounded border border-gray-300 p-4 shadow">
      <div class="w-96 text-center">
        <h2 class="text-xl font-bold mb-6">Acessar Painel Loja</h2>
      </div>
      <form action="">
        <div class="w-96 mb-6">
          <label for="email" class="block mb-2">E-mail</label>
          <input
            type="email"
            class="w-full rounded outline-none border border-gray-300 p-2 focus:border-gray-900 focus:ring transition duration-300 ease-in-out"
            id="email"
            placeholder="Seu email..."
            v-model="credentials.email"
          />
        </div>

        <div class="w-96 mb-6">
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
          v-on:click.prevent="authStore.login(credentials)"
        >
          Acessar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useAuth } from "@/stores/auth";

export default {
  data() {
    return {
      credentials: {
        email: null,
        password: null,
      },
    };
  },
  computed: {
    ...mapStores(useAuth),
  },
};
</script>
