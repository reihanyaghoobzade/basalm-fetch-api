<template>
  <div v-for="image in data.metadata.banners" :key="image.link">
    <a :href="image.link">
      <img :src="image.image" alt="" />
    </a>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
