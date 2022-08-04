<template>
  <div
    class="flex flex-col gap-2 justify-center items-center bg-gray-100 p-4 border border-gray-300 w-56 h-56"
  >
    <div>
      <img :src="data.phone_image.url" alt="" width="90" />
    </div>
    <div>{{ data.phone_name_en }}</div>
    <div class="text-gray-500 text-sm">
      {{ toPersianNumber(data.storage) }}GB &#8739;
      {{ toPersianNumber(data.ram) }}GB
    </div>
  </div>
</template>

<script setup>
import toPersianNumber from "@/assets/js/toPersianNumber.js";

const props = defineProps({ data: { type: Object, required: true } });
</script>

<style></style>
