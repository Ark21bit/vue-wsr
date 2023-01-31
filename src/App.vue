<template>
  <Header></Header>
  <main class="prose-splash">
    <router-view v-slot="component"> 
      <transition name="route" >
        <component></component>
      </transition>
    </router-view>
  </main>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header"
import Footer from "./components/Footer"
</script>
