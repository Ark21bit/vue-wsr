<template>
    <section class="info"> 
            <h2 class="color-red">Информация о консультанте:</h2>
            <p class="font">ФИО </p>
            <p class="font">категория консультаций:</p>
        </section>
        <section class="requests">
            <h2 class="color-red g-full">Заявки</h2>
            <div class="item" v-for="bid in Bids">
                <h5 class="color-red">Номер заявки:{{bid.id}}</h5>
                <p class="font">{{ bid.fio }}</p>
                <a href="#" class="font">Email:{{ bid.email }}</a>
                <p><a href="#" class="font">Телефон:{{bid.phone}}</a></p>
                <p class="font">Имя и фамилия ребенка: {{ bid.cnfio }}</p>
                <p class="font">Возраст:{{bid.age}}</p>
                <p class="font">Регион:{{ getNameRegion(bid.region_id) }}</p>
                <p class="font">Образовательная организация:{{ bid.organization_id }}</p>
                <p class="font">Категория вопроса: {{bid.category_question_id}}</p>
                <p class="font">Описание вопроса: {{ bid.question_id }}</p>
                <p class="font">Статус: {{ bid.status }}</p>
            </div>            
        </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

    const getNameRegion = (id)=>{
        let region =  regions.value.filter(a=>{
            return a.id == id
        })       
        return region[0].name
    }

    let regions = ref()

    const getRegion = async(name) =>{
        await axios({
        method:"get",
        url:"http://localhost/fedorovRestApi/public/api/regions",
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        }
        }).then((res)=>{
            regions.value = res.data.region        
        })
    }


   let Bids = ref([]);

   onMounted(()=>{
    getBids()
    getRegion()
   })
    
   const getBids= async() =>{
        await axios({
        method:"get",
        url:"http://localhost/fedorovRestApi/public/api/consultations",
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        }
        }).then((res)=>{
            Bids.value = res.data.consultations        
        })
    }
</script>
