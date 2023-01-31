<template>
    <section class="">
        <h2 class="color-red g-full text-center" >Авторизация:</h2>
        <form class="form-primary" @submit.prevent="auth">
            <label class="label-primary" for= "">Логин:</label>       
            <input class="input-primary" type="email" v-model="email">              
            <label class="label-primary" for= "">Пароль:</label>
            <input class="input-primary" type="password" v-model="password">                
            <button class="btn btn-primary">Войти</button>
        </form>
    </section>
</template>

<script setup>
    import axios from "axios"
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    
    let email = ref("admin@mail.ru")
    let password = ref("admin")
    const router = useRouter()

    const auth = () =>{
        axios({
            method:"post",
            url:"http://localhost/fedorovRestApi/public/api/auth/login",
            data: {
                email: email.value,
                password: password.value
            }
        }).then((res)=>{
            localStorage.token = res.data.token;
            localStorage.isAuth = true; 
            router.push("/")
        })
    }
</script>
