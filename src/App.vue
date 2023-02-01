<template>
  <Header></Header>

    <router-view v-slot="{Component, route}">  
      <Transition name="route" mode="out-in" >    
        <main :key="route.name" class="prose-splash">  
         <component :is="Component"></component>
        </main>
      </Transition >     
    </router-view>      

  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header"
import Footer from "./components/Footer"
</script>

<style>

  .route-leave-active, .route-enter-active {
    transition: all 0.5s linear;
  } 

  .route-enter-from,
  .route-leave-to {
    transform: translateX(-50%);
    opacity: 0;
  }

</style>
