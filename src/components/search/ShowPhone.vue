<template>
  <div
    class="flex flex-col justify-center items-start w-64 border border-gray-300"
  >
    <div class="flex flex-col gap-2 w-full h-64 relative">
      <img
        class="object-contain absolute -top-px w-full h-64"
        v-if="data.media[0]?.thumbnail_url"
        :src="data.media[0]?.thumbnail_url"
        alt=""
      />
      <img
        class="object-contain absolute -top-px w-full h-64"
        v-else-if="data.media[0]?.normal_url"
        :src="data.media[0]?.normal_url"
        alt=""
      />
      <div v-else-if="data.phone.media">
        <img
          class="object-contain w-full h-64 py-2"
          :src="data.phone.media"
          alt=""
        />
        <div
          class="absolute bottom-0 right-0 w-full bg-gray-500 text-white font-semibold text-center text-xs h-6 leading-6"
        >
          تصویر گوشی نو درج شده‌است.
        </div>
      </div>
      <img
        v-else
        class="border-b border-gray-300"
        src="https://tank.ir/_nuxt/img/no-photo.2072ce5.png"
        alt=""
      />
    </div>
    <div
      class="flex flex-col justify-between items-start w-full h-48 px-2 py-2"
    >
      <div class="">{{ data.title }}</div>
      <div class="flex flex-col gap-2 justify-center items-start w-full">
        <div
          class="flex gap-2 items-center justify-center px-2 py-1 bg-cyan-50 rounded-full"
          v-if="true"
        >
          <i class="fas fa-shield-alt text-cyan-600 block"></i>
          <div class="text-sm h-4 leading-4 text-cyan-700">خرید امن</div>
        </div>
        <div v-if="data.price" class="self-end font-semibold">
          <div class="inline-block mx-1">{{ data.price }}</div>
          <img class="inline" src="@/assets/images/Toman.svg" alt="" />
        </div>
        <div v-else class="font-semibold self-end">توافقی</div>
        <div class="text-xs">
          {{ data.created_at }} پیش در
          <span class="font-semibold">{{ data.location_name_fa }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({ data: { type: Object, required: true } });
</script>

<style></style>
