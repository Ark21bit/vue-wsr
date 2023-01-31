<template>
    <header>
        <div class="wrapper">
            <img src="../assets/img/Pompeo.svg" alt="">
            <button class="btn-menu">
                <span class="rec"></span>
                <span class="rec"></span>
                <span class="rec"></span>
            </button>
            <nav class="menu">
                <b  class="font">Профессиональный труд на благое дело. Окажем любую консультационную помощь</b>
                <a class="font" href="#" v-if="isAuth" @click.prevent="logout">Выход</a>
                <a class="font" href="#" v-else="isAuth">Авторизация</a>
                <a class="font" href="#">Запись на консультацию</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import router from '@/router';
import { computed, ref, onMounted } from 'vue';

    let isAuth = ref(); 
    onMounted(()=>{
        setInterval(()=>{
            if (localStorage.isAuth == "true") {
            isAuth.value = true
            }else{
                isAuth.value = false
            }
        },1000)               
    })
    
    const logout = () =>{
        localStorage.clear()
        router.push("/login")
    } 

    
</script>
