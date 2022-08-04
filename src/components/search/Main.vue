<template>
  <Loading class="flex" v-if="showLoading" />
  <div
    class="flex flex-col justify-center items-center gap-4"
    v-else-if="showRefreshButton"
  >
    <div class="text-blue-700 font-bold text-2xl mb-10">
      ظاهرا یه مشکلی پیش اومده. لطفا دوباره تلاش کنید.
    </div>
    <div
      class="flex gap-2 justify-center items-center bg-cyan-700 rounded-xl w-40 h-10 leading-10 text-center text-white cursor-pointer"
      @click="getSearchData"
    >
      <i class="fas fa-redo"></i>
      تلاش مجدد
    </div>
  </div>
  <div v-else class="grid grid-cols-12 gap-8">
    <div class="md:col-span-3 flex flex-col gap-2">
      <div>
        <div
          class="bg-blue-200 text-blue-600 font-semibold py-1 px-4 rounded-full m-2 inline-block"
          v-if="route.query?.ram_values"
        >
          رم {{ toPersianNumber(parseInt(route.query?.ram_values)) }} گیگ
          <span class="cursor-pointer pr-2 text-lg" @click="deleteRamValues"
            >&times;</span
          >
        </div>
        <div
          class="bg-blue-200 text-blue-600 font-semibold py-1 px-4 rounded-full m-2 inline-block"
          v-if="route.query?.price_from && route.query?.price_from != 0"
        >
          حداقل قیمت: {{ route.query?.price_from }}
          <span
            class="cursor-pointer pr-2 text-lg"
            @click="deleteFilter('price_from')"
            >&times;</span
          >
        </div>
        <div
          class="bg-blue-200 text-blue-600 font-semibold py-1 px-4 rounded-full m-2 inline-block"
          v-if="route.query?.price_to && route.query?.price_to != 30000000"
        >
          حداکثر قیمت: {{ route.query?.price_to }}
          <span
            class="cursor-pointer pr-2 text-lg"
            @click="deleteFilter('price_to')"
            >&times;</span
          >
        </div>
        <div
          class="bg-blue-200 text-blue-600 font-semibold py-1 px-4 rounded-full m-2 inline-block"
          v-if="route.query?.has_report"
        >
          کارنامه دار
          <span
            class="cursor-pointer pr-2 text-lg"
            @click="deleteFilter('has_report')"
            >&times;</span
          >
        </div>
      </div>
      <div class="flex justify-between items-center">
        <label class="mx-2" for="has-report">آگهی‌های کارنامه دار</label>
        <input
          type="checkbox"
          id="has-report"
          v-model="filters.hasReport"
          @click="hasReported('has_report', !filters.hasReport)"
        />
      </div>
      <hr />
      <div>
        <div
          class="flex justify-between items-center"
          @click="filters.showRam = !filters.showRam"
        >
          رم
          <img
            src="@/assets/images/arrow.svg"
            alt=""
            :class="{ 'rotate-180': filters.showRam }"
            class="transition-all duration-500"
          />
        </div>
        <div
          :class="{
            'h-40 border border-gray-200 mb-6 mt-4': filters.showRam,
            'h-0': !filters.showRam,
          }"
          class="transition-all duration-300 w-full text-gray-500 flex flex-col overflow-auto mb-2"
        >
          <div class="p-2">
            <input
              type="checkbox"
              id="2GB"
              value="2GB"
              v-model="filters.ramValues['2GB']"
              @input="addRamValues($event, !filters.ramValues['2GB'])"
            />
            <label class="mx-2" for="2GB">۲ گیگابایت</label>
          </div>
          <hr class="w-full" />
          <div class="p-2">
            <input
              type="checkbox"
              id="3GB"
              value="3GB"
              v-model="filters.ramValues['3GB']"
              @input="addRamValues($event, !filters.ramValues['3GB'])"
            />
            <label class="mx-2" for="3GB">۳ گیگابایت</label>
          </div>
          <hr />
          <div class="p-2">
            <input
              type="checkbox"
              id="4GB"
              value="4GB"
              v-model="filters.ramValues['4GB']"
              @input="addRamValues($event, !filters.ramValues['4GB'])"
            />
            <label class="mx-2" for="4GB">۴ گیگابایت</label>
          </div>
          <hr />
          <div class="p-2">
            <input
              type="checkbox"
              id="6GB"
              value="6GB"
              v-model="filters.ramValues['6GB']"
              @input="addRamValues($event, !filters.ramValues['6GB'])"
            />
            <label class="mx-2" for="6GB">۶ گیگابایت</label>
          </div>
          <hr />
          <div class="p-2">
            <input
              type="checkbox"
              id="8GB"
              value="8GB"
              v-model="filters.ramValues['8GB']"
              @input="addRamValues($event, !filters.ramValues['8GB'])"
            />
            <label class="mx-2" for="8GB">۸ گیگابایت</label>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div
          class="flex justify-between"
          @click="filters.showPrice = !filters.showPrice"
        >
          محدوده قیمت گوشی
          <img
            src="@/assets/images/arrow.svg"
            alt=""
            :class="{ 'rotate-180': filters.showPrice }"
            class="transition-all duration-300"
          />
        </div>
        <div
          dir="ltr"
          :class="{
            'h-40 mt-8': filters.showPrice,
            'h-0': !filters.showPrice,
          }"
          class="overflow-hidden transition-all duration-300 flex flex-col"
        >
          <div class="w-full flex justify-between items-center" dir="rtl">
            <span>از</span>
            <span class="w-24 h-8 bg-gray-100 leading-8 text-center">{{
              insertrialcamma(toPersianNumber(filters.priceFrom))
            }}</span>
            <img src="@/assets/images/Toman.svg" alt="" />
            <span>تا</span>
            <span class="w-24 h-8 bg-gray-100 leading-8 text-center">{{
              insertrialcamma(toPersianNumber(filters.priceTo))
            }}</span>
            <img src="@/assets/images/Toman.svg" alt="" />
          </div>
          <MultiRangeSlider
            :min="0"
            :max="30000000"
            :step="100000"
            :ruler="false"
            :minValue="filters.priceFrom"
            :maxValue="filters.priceTo"
            @input="UpdateValues"
          />
          <button
            class="self-end p-3 border border-black hover:bg-black hover:text-white transition-all duration-200"
            type="button"
            @click="setPrice"
          >
            اعمال محدوده
          </button>
        </div>
      </div>
      <hr />
    </div>
    <div class="col-span-12 md:col-span-9 flex justify-center items-center">
      <div
        v-if="items.posts.length != 0"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 mx-2"
      >
        <div v-for="item in items?.posts" :key="item.id">
          <component :is="componentName.component" :data="item" />
        </div>
      </div>
      <div v-else>
        <span>هیچ آگهی با این شرایط وجود ندارد</span>
        <button type="button" class="text-white bg-blue-500 px-4 py-2 mr-4" @click="router.push({ query: null })">
          حذف فیلترها
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import MultiRangeSlider from "multi-range-slider-vue";
import axios from "axios";
import ShowPhone from "./ShowPhone.vue";
import NewPhone from "../main/NewPhone.vue";
import Loading from "../Loading.vue";
import insertrialcamma from "@/assets/js/insertrialcamma.js";
import toPersianNumber from "@/assets/js/toPersianNumber.js";

const componentName = {
  component: ShowPhone,
};
const mainUrl = ref(
  "https://api.tank.ir/api/v-1.0/market/post/search/?limit=40&page=1&"
);
const url = ref(mainUrl.value);
const router = useRouter();
const route = useRoute();
const items = ref();
const filters = reactive({
  priceFrom: 0,
  priceTo: 30000000,
  hasReport: false,
  showRam: false,
  ramValues: {
    "2GB": false,
    "3GB": false,
    "4GB": false,
    "6GB": false,
    "8GB": false,
  },
  showPrice: false,
});
const showLoading = ref(true);
const showRefreshButton = ref(false);

onMounted(() => {
  route.fullPath != "/p" && (url.value += route.fullPath.split("?")[1]);
  const query = { ...route.query };
  query?.has_report &&
    (filters.hasReport = query.has_report) &&
    (componentName.component = NewPhone);
  query?.ram_values && (filters.ramValues[query.ram_values] = true);
  query?.price_from && (filters.priceFrom = Number(query.price_from));
  query?.price_to && (filters.priceTo = Number(query.price_to));
  getSearchData();
});

async function getSearchData() {
  try {
    const response = await axios.get(url.value);
    items.value = response.data;
    items.value.posts.forEach((item) => {
      const createdTime = {
        now: new Date(),
        created: new Date(item.created_at),
      };
      const createdAt = (createdTime.now - createdTime.created) / 1000;

      createdAt < 60
        ? (item.created_at = "چند ثانیه")
        : (item.created_at = `${Math.floor(createdAt / 60)} دقیقه`);
    });
  } catch (error) {
    console.error(error);
    showRefreshButton.value = true;
  } finally {
    showLoading.value = false;
  }
}

watch(
  () => route.query,
  () => {
    filters.showPrice = false;
    filters.showRam = false;
    componentName.component = ShowPhone;

    route.fullPath != "/p"
      ? (url.value = mainUrl.value + route.fullPath.split("?")[1])
      : (url.value = mainUrl.value);

    const query = { ...route.query };

    query?.has_report
      ? (filters.hasReport = query.has_report) &&
        (componentName.component = NewPhone)
      : (filters.hasReport = false);

    query?.ram_values && (filters.ramValues[query.ram_alues] = true);
    query?.price_from
      ? (filters.priceFrom = Number(query.price_from))
      : (filters.priceFrom = 0);

    query?.price_to
      ? (filters.priceTo = Number(query.price_to))
      : (filters.priceTo = 30000000);
    showLoading.value = true;
    
    getSearchData();
  }
);

function addRamValues(event, check) {
  Object.keys(filters.ramValues).forEach((key) => {
    filters.ramValues[key] = false;
  });

  filters.ramValues[event.target.value] = check;
  const isTrue = [...Object.values(filters.ramValues)].some(
    (element) => element === true
  );

  const query = { ...route.query };
  isTrue
    ? (query["ram_values"] = event.target.value)
    : delete query["ram_values"];
  router.push({ path: "/p", query: { ...query } });
}

function deleteRamValues() {
  Object.keys(filters.ramValues).forEach((key) => {
    filters.ramValues[key] = false;
  });
  const query = { ...route.query };
  delete query["ram_values"];
  router.push({ query: { ...query } });
}

function hasReported(key, val) {
  const query = { ...route.query };
  query[key]
    ? delete query[key] && (componentName.component = ShowPhone)
    : (query[key] = val) && (componentName.component = NewPhone);
  router.push({ path: "/p", query: { ...query } });
}

function UpdateValues(event) {
  filters.priceFrom = event.minValue;
  filters.priceTo = event.maxValue;
}

function setPrice() {
  const query = { ...route.query };
  filters.priceFrom != 0 && (query["price_from"] = filters.priceFrom);
  filters.priceTo != 30000000 && (query["price_to"] = filters.priceTo);
  router.push({ query: { ...query } });
}

function deleteFilter(value) {
  const query = { ...route.query };
  delete query[value];
  router.push({ query: { ...query } });
}
</script>

<style scoped>
:deep(.labels) {
  display: none;
}
:deep(.multi-range-slider) {
  border: none;
  box-shadow: none;
}

:deep(.multi-range-slider .thumb .caption *) {
  display: none;
}

:deep(.multi-range-slider .thumb::before) {
  background-color: black;
  width: 15px;
  height: 15px;
  border: none;
  box-shadow: none;
  margin: -6px;
}

:deep(.multi-range-slider .bar-left) {
  width: 25%;
  background-color: #d4d4d4;
  border-radius: 0;
  box-shadow: none;
  padding: 2px 0px;
}

:deep(.multi-range-slider .bar-right) {
  width: 25%;
  background-color: #d4d4d4;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
}
:deep(.multi-range-slider .bar) {
  height: 4px;
}
:deep(.multi-range-slider .bar-inner) {
  background-color: black;
  border: solid 1px black;
  box-shadow: inset 0px 0px 5px black;
}

#has-report {
  position: relative;
  width: 46px;
  height: 23px;
  border-radius: 60px;
  background-color: gray;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

#has-report:checked {
  background-color: rgb(76, 76, 238);
}

#has-report::before {
  content: "";
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  top: 0;
  right: 23px;
  transform: scale(0.85);
  z-index: 1;
  background-color: white;
  transition: all 0.4s ease-in-out;
}

#has-report:checked::before {
  right: 0;
  background-color: white;
}
</style>
