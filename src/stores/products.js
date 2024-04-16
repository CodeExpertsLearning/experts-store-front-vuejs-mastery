import { defineStore } from "pinia";
import httpClient from "@/services/http-client";

export const useProducts = defineStore("products", {
  state: () => ({ products: null, product: null }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    getAllProducts(page) {
      let endpoint = page ? `/products?page=${page}` : "/products";

      httpClient
        .get(endpoint)
        .then((response) => (this.products = response.data));
    },
    getProductById(id, callback) {
      httpClient.get(`/products/${id}`).then(callback);
    },
    createProduct(product) {
      httpClient
        .post("/products", product)
        .then((response) => console.log(response));
    },
    updateProduct(id, product) {
      httpClient
        .put(`/products/${id}`, product)
        .then((response) => (this.product = response.data));
    },
    deleteProduct(id) {
      httpClient
        .delete(`/products/${id}`)
        .then((response) => location.reload());
    },
  },
  persist: true,
});
