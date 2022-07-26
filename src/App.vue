<script setup>
import { RouterLink } from "vue-router";
// import Footer from "@/components/Footer.vue";
// import footer from './components/Footer.vue'
import axios from "axios";
import { ref, computed } from "vue";
import QuickAccess from "@/components/QuickAccess.vue";
import ShowBanner from "@/components/ShowBanner.vue";
import Header from "@/components/Header.vue";
import Category from "./components/Category.vue";
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";

const items = ref([]);
const url =
  "https://api.basalam.com/explore/api_v1.0/user/general/0?size=12&item_size=9";
getData();
const isShowLoading = computed(() => !items.value.length);
async function getData() {
  try {
    const response = await axios.get(url);
    items.value = response.data.items;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <Loading v-show="isShowLoading" />
  <div class="w-full" v-show="!isShowLoading">
    <Header />
    <div class="container mx-auto">
      <div
        class="flex flex-col justify-center items-center gap-16 lg:mx-12 mx-4"
      >
        <a :href="items[0]?.result[0].metadata.link">
          <img :src="items[0]?.result[0].metadata.image.LARGE" alt="" />
        </a>
        <div class="flex justify-center items-center w-full">
          <div class="flex gap-8 overflow-auto">
            <div v-for="item in items[1]?.result" :key="item.id">
              <QuickAccess :data="item" />
            </div>
          </div>
        </div>
        <div v-for="item in items[2]?.result" :key="item.id">
          <ShowBanner :data="item" />
        </div>
        <div class="flex justify-center items-center w-full m-4">
          <div class="flex gap-4 overflow-auto">
            <div v-for="item in items[3]?.result" :key="item.id">
              <Category :data="item" />
            </div>
          </div>
        </div>

        <div v-for="item in items[4]?.result" :key="item.id">
          <ShowBanner :data="item" />
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        >
          <div
            v-for="item in items[6]?.result"
            :key="item.id"
            class="col-span-1"
          >
            <ShowBanner :data="item" />
          </div>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        >
          <div
            v-for="item in items[7]?.result"
            :key="item.id"
            class="col-span-1 flex gap-4"
          >
            <ShowBanner :data="item" />
          </div>
        </div>

        <div v-for="item in items[8]?.result" :key="item.id">
          <ShowBanner :data="item" />
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        >
          <div
            v-for="item in items[9]?.result"
            :key="item.id"
            class="col-span-1 flex gap-4"
          >
            <ShowBanner :data="item" />
          </div>
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        >
          <div
            v-for="item in items[10]?.result"
            :key="item.id"
            class="col-span-1 flex gap-4"
          >
            <ShowBanner :data="item" />
          </div>
        </div>
        <div v-for="item in items[11]?.result" :key="item.id">
          <ShowBanner :data="item" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
