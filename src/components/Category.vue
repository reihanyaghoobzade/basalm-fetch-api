<template>
    <a :href="data.metadata.link" class="hover:text-orange-500 transition-all">
      <div class="flex flex-col gap-2 justify-center items-center w-32">
        <div class="flex justify-center w-24 h-24 bg-white">
            <img :src="data.metadata.image" alt="" />
        </div>
        <div class="text-sm font-semibold text-center ">
          {{ data.metadata.title }}
        </div>
      </div>
    </a>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
