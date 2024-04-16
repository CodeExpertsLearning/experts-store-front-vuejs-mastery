<template>
  <div id="header-content" class="block w-full py-4 border-b border-gray-300">
    <h2 class="text-xl font-bold">Criar Produto</h2>
  </div>
  <div class="block w-full border-b pb-10 border-gray-300 py-10">
    <form action="">
      <div class="w-full flex gap-4">
        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Nome Produto</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="products.name"
          />
        </div>

        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Descrição</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="products.description"
          />
        </div>
      </div>

      <div class="w-full flex gap-4">
        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Preço</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="products.price"
          />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button
          class="px-4 py-2 rounded bg-green-600 hover:bg-green-900 text-white font-bold text-xl shadow transition ease-in-out duration-300"
          @click.prevent="productsStore.createProduct(products)"
        >
          Criar Produto
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useProducts } from "@/stores/products";

export default {
  data() {
    return {
      products: {
        name: null,
        description: null,
        price: null,
      },
    };
  },
  computed: {
    ...mapStores(useProducts),
  },
};
</script>
