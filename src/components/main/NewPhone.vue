<template>
  <div
    class="flex flex-col gap-2 justify-center items-start w-56 h-auto border border-gray-300"
  >
    <div class="flex flex-col gap-2 w-56 h-56 relative">
      <div class="relative">
        <img
          class="object-contain absolute top-0 -right-px w-full h-56"
          v-if="data.media[0]?.thumbnail_url"
          :src="data.media[0]?.thumbnail_url"
          alt=""
        />
        <div v-else>
          <img
            class="object-contain w-full h-56 py-2"
            :src="data.phone.media"
            alt=""
          />
          <div
            class="absolute bottom-0 -right-px w-full bg-gray-500 text-white font-semibold text-center text-xs h-6 leading-6"
          >
            تصویر گوشی نو درج شده‌است.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between items-start w-56 h-36 px-2">
      <div class="">{{ data.title }}</div>
      <div class="flex flex-col gap-2 justify-center items-start w-full">
        <div
          class="flex gap-2 items-center justify-center px-2 py-1 bg-cyan-50 rounded-full"
          v-if="data.direct_sale"
        >
          <i class="fas fa-shield-alt text-cyan-600 block"></i>
          <div class="text-sm h-4 leading-4 text-cyan-700">خرید امن</div>
        </div>
        <div class="self-end">{{ toPersianNumber(data.price) }} تومان</div>
        <div class="flex justify-between items-center text-xs w-full mb-1">
          <div>{{ data.report_cert.badges[0].name }}</div>
          <div>{{ toPersianNumber(data.report_cert.overall_health) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import toPersianNumber from "@/assets/js/toPersianNumber.js";
import insertrialcamma from "@/assets/js/insertrialcamma.js";

const props = defineProps({
  data: { type: Object, required: true },
});
</script>

<style></style>
