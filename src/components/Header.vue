<template>
    <header>
        <div class="wrapper">
            <router-link to="/" class="logo"><img src="../assets/img/Pompeo.svg" alt=""></router-link>
            <button class="btn-menu" @click="isNav = !isNav" :class="{'active': isNav}">
                <span class="rec"></span>
                <span class="rec"></span>
                <span class="rec"></span>
            </button>
            <nav class="menu" >
                <b class="font">Профессиональный труд на благое дело. Окажем любую консультационную помощь</b>
                <button class="font" href="#" v-if="isAuth" @click.prevent="logout">Выход</button>
                <button class="font" href="#" v-else="isAuth">Авторизация</button>
                <router-link class="font" to="/record">Запись на консультацию</router-link>
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

    let isNav = ref(false)

    
</script>
