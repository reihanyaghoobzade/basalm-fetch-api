<template>
  <Header class="w-full shadow-2xl" />
  <div class="container mx-auto">
    <router-view />
  </div>
  <Footer class="w-full" />
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "./components/main/Main.vue";
</script>
