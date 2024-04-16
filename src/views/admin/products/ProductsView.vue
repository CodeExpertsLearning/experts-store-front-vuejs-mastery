<template>
  <div id="header-content" class="block w-full py-4 border-b border-gray-300">
    <h2 class="text-xl font-bold">Produtos</h2>
  </div>
  <div class="block w-full border-b pb-10 border-gray-300">
    <table class="w-full text-left">
      <thead>
        <tr>
          <th class="px-6 py-4">#</th>
          <th class="px-6 py-4 w-3/5">Produto</th>
          <th class="px-6 py-4">Preço</th>
          <th class="px-6 py-4">Criado em</th>
          <th class="px-6 py-4">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsStore.products.data" :key="product.id">
          <td class="px-6 py-4">{{ product.id }}</td>
          <td class="px-6 py-4">{{ product.name }}</td>
          <td class="px-6 py-4">{{ product.price_float }}</td>
          <td class="px-6 py-4">{{ product.created_at }}</td>
          <td class="px-6 py-4">
            <div class="flex gap-4">
              <router-link
                :to="{
                  name: 'admin.products.edit',
                  params: { id: product.id },
                }"
                class="px-4 py-2 border border-blue-700 rounded bg-blue-700 text-white font-bold hover:bg-blue-400 transition ease-in-out duration-300"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </router-link>

              <a
                @click.prevent="productsStore.deleteProduct(product.id)"
                href=""
                class="px-4 py-2 border border-red-700 rounded bg-red-700 text-white font-bold hover:bg-red-400 transition ease-in-out duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="pagination" class="flex justify-end py-4">
    <a
      @click.prevent="getProductsByPage(link.url)"
      :href="link.url"
      v-for="link in productsStore.products.meta.links"
      v-show="link.url"
      v-html="link.label"
      :key="link.label"
      class="p-2 rounded border border-gray-300 ml-4 hover:border-gray-600 hover:bg-gray-900 hover:text-white transition ease-in-out duration-300"
      :class="{
        'border-gray-600 bg-gray-900 text-white': link.active,
      }"
    ></a>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useProducts } from "@/stores/products";

export default {
  created() {
    let page = location.search.match(/page=(\d+)/);

    if (!page) {
      this.productsStore.getAllProducts();
    } else {
      this.productsStore.getAllProducts(page[1]);
    }
  },
  computed: {
    ...mapStores(useProducts),
  },
  methods: {
    //Precisa navegar, precisa pegar o estado da pagina corretamente
    getProductsByPage(url) {
      let pageParam = url.match(/page=(\d+)/)[1];
      this.pushStateUrl(pageParam);
      this.productsStore.getAllProducts(pageParam);
    },
    pushStateUrl(page) {
      history.pushState(null, null, `?page=${page}`); // mdn.io/history
    },
  },
};
</script>
