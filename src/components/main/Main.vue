<template>
  <Loading v-if="showLoading" />
  <div
    class="flex flex-col justify-center items-center gap-4"
    v-else-if="showRefreshButton"
  >
    <div class="text-blue-700 font-bold text-2xl mb-10">
      ظاهرا یه مشکلی پیش اومده. لطفا دوباره تلاش کنید.
    </div>
    <div
      class="flex gap-2 justify-center items-center bg-cyan-700 rounded-xl w-40 h-10 leading-10 text-center text-white"
      @click="router.go()"
    >
      <i class="fas fa-redo"></i>
      تلاش مجدد
    </div>
  </div>
  <div v-else class="flex flex-col gap-4">
    <div>
      <img
        src="https://tank.ir/_nuxt/img/desktop-home-price-banner.2cbb64c.png"
        alt=""
      />
    </div>
    <div v-for="data in datas" :key="data.items">
      <ShowMain
        :title="data.title"
        :item="data.item"
        :componentName="data.componentName"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import ShowMain from "./Index.vue";
import axios from "axios";
import Brand from "./Brand.vue";
import Phone from "./Phone.vue";
import Product from "./Product.vue";
import NewPhone from "./NewPhone.vue";
import Loading from "../Loading.vue";

const showLoading = ref(true);
const showRefreshButton = ref(false);
const items = ref();
const url = "https://api.tank.ir/api/v-1.0/market/first-page/";

onMounted(() => {
  getData();
});

async function getData() {
  try {
    const response = await axios.get(url);
    items.value = response.data;
  } catch (error) {
    console.log(error);
    showRefreshButton.value = true;
  } finally {
    showLoading.value = false;
  }
}

const datas = computed(() => {
  return (datas.value = [
    {
      title: "پرفروش‌ترین گوشی‌های تانک",
      item: items.value?.products,
      componentName: Product,
    },
    {
      title: "جدیدترین گوشی‌های دارای کارنامه سلامت",
      item: items.value?.has_report_posts,
      componentName: NewPhone,
    },
    {
      title: "مجبوب‌ترین گوشی‌های تانک",
      item: items.value?.phones,
      componentName: Phone,
    },
    {
      title: "برندهای ویژه",
      item: items.value?.brands,
      componentName: Brand,
    },
  ]);
});
</script>

<style></style>
