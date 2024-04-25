<template>
  <div>
    <div
      class="w-full flex justify-between items-center mb-10 border-b border-gray-400 py-5"
    >
      <h2 class="font-bold text-xl">Fotos</h2>
      <router-link
        :to="{
          name: 'admin.products.photos.upload',
          params: { id: id },
        }"
        class="px-4 py-2 border border-green-700 rounded bg-green-700 text-white font-bold hover:bg-green-400 transition ease-in-out duration-300"
      >
        Realizar Upload
      </router-link>
    </div>

    <div class="w-full grid grid-cols-4 gap-2">
      <div
        v-for="photo of photos.data"
        :key="photo.id"
        class="w-[380px] h-[280px] relative group"
      >
        <img
          :src="`http://localhost/storage/${photo.photo}`"
          alt=""
          class="w-[380px] h-[280px] p-1 bg-white border border-gray-400 rounded"
        />
        <button
          @click="removePhoto(photo)"
          class="group-hover:block px-2 py-1 mt-4 absolute hidden top-0 right-2 border border-red-900 bg-red-700 font-bold text-white rounded hover:bg-red-900 transition duration-300 ease-in-out"
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
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import httpClient from "@/services/http-client";

export default {
  props: ["id"],
  data: () => {
    return {
      photos: [],
    };
  },
  created() {
    httpClient.get(`/products/${this.id}/photos`).then((response) => {
      this.photos = response.data;
    });
  },
  methods: {
    removePhoto: (photo) => {
      httpClient
        .delete(`/products/${photo.product_id}/photos/${photo.id}`)
        .then((response) => {
          location.reload();
        });
    },
  },
};
</script>
