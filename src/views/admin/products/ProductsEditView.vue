<template>
  <div
    id="header-content"
    class="flex justify-between items-center w-full py-4 border-b border-gray-300"
  >
    <h2 class="text-xl font-bold">Editar Produto</h2>

    <router-link
      :to="{
        name: 'admin.products.photos',
        params: { id: id },
      }"
      class="px-4 py-2 border border-green-700 rounded bg-green-700 text-white font-bold hover:bg-green-400 transition ease-in-out duration-300"
    >
      Gerenciar Foto(s) Produto
    </router-link>
  </div>
  <div class="block w-full border-b pb-10 border-gray-300 py-10">
    <form action="">
      <div class="w-full flex gap-4">
        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Nome Produto</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="product.name"
          />
        </div>

        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Descrição</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="product.description"
          />
        </div>
      </div>

      <div class="w-full flex gap-4">
        <div class="w-1/2 block mb-6">
          <label class="block mb-2">Preço</label>
          <input
            type="text"
            class="w-full rounded shadow border border-gray-300 focus:border-gray-400 focus:shadow-lg outline-none p-2 transition ease-in-ou duration-300"
            v-model="product.price"
          />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button
          class="px-4 py-2 rounded bg-green-600 hover:bg-green-900 text-white font-bold text-xl shadow transition ease-in-out duration-300"
          @click.prevent="productsStore.updateProduct(product.id, product)"
        >
          Atualizar Produto
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useProducts } from "@/stores/products";

export default {
  props: ["id"],
  created() {
    this.productsStore.getProductById(
      this.id,
      (response) => (this.product = response.data.data)
    );
  },
  data() {
    return {
      product: {
        name: null,
        price: null,
      },
    };
  },
  computed: {
    ...mapStores(useProducts),
  },
};
</script>
