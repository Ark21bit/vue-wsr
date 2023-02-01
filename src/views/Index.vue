<template>
    <section class="about">
            <h1 class="color-red">О нас:</h1>
            <p class="font">Инофрмация о скрвисе Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam ipsum tempore omnis perferendis consectetur veniam similique nesciunt optio, suscipit non facilis ea! Laborum ex voluptatibus ut alias quasi omnis!</p>
            <p class="font">Описание предоставлеемых услуг Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto officia iste commodi facilis omnis ab sunt voluptates iure ex temporibus!</p>
            <router-link to="/record" class="btn btn-primary">Запись на консультацию</router-link>
        </section>
        <section class="konsultants">
            <h2 class="color-red g-full">Консультанты:</h2>
            <div class="item" v-for="consultant in consultants">
                <img src="../assets/img/cons.webp" alt="">
                <h3 class="color-red">{{consultant.firstname}}</h3>
                <p class="font">Описание Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis blanditiis repudiandae ea fugit ratione ducimus. Laborum consequatur ea voluptatem.</p>
            </div>            
        </section>
        <section class="galerey">
            <h2 class="color-red g-full">Галерея:</h2>
             <div class="item">
                <img src="../assets/img/IMAGE-3.png" alt="">
             </div>
             <div class="item">
                <img src="../assets/img/IMAGE-4.png" alt="">
             </div>
             <div class="item">
                <img src="../assets/img/IMAGE-5.png" alt="">
             </div>
             <div class="item">
                <img src="../assets/img/IMAGE-6.png" alt="">
             </div>
        </section>
        <section class="otsivs">
            <h2 class="color-red g-full">Отзывы:</h2>
            <div class="item">
                <h4 class="color-red">Имя</h4>
                <p class="font">отзыв Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, velit voluptatibus at odio a dolores incidunt eius repudiandae ipsum quibusdam ratione. Ipsam, sunt architecto! Rem mollitia repudiandae fugiat aspernatur doloremque!</p>
            </div>
            <div class="item">
                <h4 class="color-red">Имя</h4>
                <p class="font">отзыв Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perspiciatis non eum quaerat hic, cupiditate iste velit magnam consequatur at mollitia itaque ab ipsam iure suscipit error dolor aperiam, laboriosam dolore. Debitis quia rem repudiandae incidunt, quae reprehenderit iste sit.</p>
            </div>
            <div class="item">
                <h4 class="color-red">Имя</h4>
                <p class="font">отзыв Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, velit voluptatibus at odio a dolores incidunt eius repudiandae ipsum quibusdam ratione. Ipsam, sunt architecto! Rem mollitia repudiandae fugiat aspernatur doloremque!</p>
            </div>
        </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

    let consultants = ref([]);

     axios({
        method:"get",
        url:"http://localhost/fedorovRestApi/public/api/regions/1/organizations/CEMK/consultants",
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        }
    }).then((res)=>{
        consultants.value = res.data.consultants        
    })

</script>
