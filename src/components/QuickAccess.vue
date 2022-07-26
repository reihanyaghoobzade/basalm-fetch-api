<template>
    <a :href="data.metadata.link" class="hover:text-orange-500 transition-all">
      <div class="flex flex-col gap-2 justify-center items-center w-32">
        <div class="w-20 lg:w-28">
          <img :src="data.metadata.image" alt="" />
        </div>
        <div class="text-sm lg:text-normal font-semibold text-center min-w-fit">
          {{ data.metadata.title }}
        </div>
      </div>
    </a>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
