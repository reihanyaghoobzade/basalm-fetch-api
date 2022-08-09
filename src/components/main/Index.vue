<template>
  <div class="flex justify-between items-center">
    <div class="text-lg font-semibold mb-2">{{ title }}</div>
    <a href="#" class="text-blue-600 text-sm">مشاهده بیشتر</a>
  </div>
  <hr class="mb-2" />
  <div
    class="flex items-center gap-8 mx-2"
    :class="{
      'overflow-y-auto lg:overflow-hidden': componentName == Brand,
      'overflow-y-auto': componentName != Brand,
    }"
  >
    <div v-for="value in item" :key="value.id">
      <component :is="componentName" :data="value" />
    </div>
  </div>
</template>

<script setup>
import Brand from "./Brand.vue";
import Phone from "./Phone.vue";
import Product from "./Product.vue";

const props = defineProps({
  title: { type: String, required: true },
  item: { type: Object, required: true },
  componentName: { type: Object, required: true },
});
</script>
