<template>
  <section class="shadow-lg py-4 mb-12">
    <header class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex justify-start items-center w-full">
          <input
            type="text"
            placeholder="جستجو در تانک..."
            v-model.lazy.trim="search"
            class="bg-gray-100 h-10 w-1/3 px-2 focus:outline-none"
            @keyup.enter="searchQuery"
          />
          <div class="bg-gray-100 h-10 leading-10 px-2" @click="searchQuery">
            <i class="fas fa-search text-gray-500"></i>
          </div>
        </div>
        <a href="https://tank.ir">
          <img
            src="https://tank.ir/_nuxt/img/logoType.cdfbb44.svg"
            alt="tank logo"
            width="150"
          />
        </a>
      </div>
    </header>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const search = ref();

const router = useRouter();
const route = useRoute();

function searchQuery() {
  const query = { ...route.query };
  query.search_phrase = search.value;
  router.replace({
    path: "/p",
    query: { ...query },
  });
}
</script>

<style></style>
