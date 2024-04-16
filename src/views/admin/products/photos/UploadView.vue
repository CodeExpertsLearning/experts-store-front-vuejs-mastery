<template>
  <div>
    <form action="" @submit.prevent="uploadPhotos">
      <div class="w-full">
        <label>Realize o upload das fotos do produto!</label>
        <input
          type="file"
          class="w-full p-2 rounded border border-gray-400"
          multiple
          @change="setPhoto"
        />
      </div>

      <button>Realizar Upload</button>
    </form>
  </div>
</template>

<script>
import httpClient from "@/services/http-client";

export default {
  props: ["id"],
  data() {
    return {
      photos: null,
    };
  },
  methods: {
    setPhoto(e) {
      this.photos = e.target.files;
    },
    uploadPhotos(e) {
      let formData = new FormData();

      for (let file of this.photos) {
        formData.append("photos[]", file);
      }

      httpClient
        .post(`/products/${this.id}/photos`, formData)
        .then((response) => location.reload());
    },
  },
};
</script>
