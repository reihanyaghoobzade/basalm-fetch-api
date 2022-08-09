<template>
  <div
    class="flex justify-center items-center bg-gray-100 p-3 h-24 w-24 mx-auto"
  >
    <img :src="data.logo" alt="" width="80" />
  </div>
</template>

<script setup>
const props = defineProps({ data: { type: Object, required: true } });
</script>
