<template>
    <section class="">
            <h2 class="color-red g-full text-center" >Запись на консультацию:</h2>
            <form class="form-primary" @submit.prevent="addBid">
                <label class="label-primary" for= "">ФИО:</label>
                <input class="input-primary" v-model="forms.fio" type="text">               
                <label class="label-primary" for= "">Электронная почта:</label>
                <input class="input-primary" v-model="forms.email" type="email">
                <label class="label-primary" for= "">Телефон :</label>
                <input class="input-primary" v-model="forms.phone" type="tel">
                <label class="label-primary" for= "">ФИО ребенка :</label>
                <input class="input-primary" v-model="forms.chfio" type="text">                
                <label class="label-primary" for= "">Возраст ребенка :</label>
                <select class="input-primary" v-model="forms.age">
                    <option v-for="n in 18">{{n}}</option>                    
                </select>
                <label class="label-primary" for= "">Регион проживания :</label>
                <input class="input-primary" v-model="forms.region" type="text">
                <label class="label-primary" for= "">Образовательная организация :</label>
                <input class="input-primary" v-model="forms.organization" type="text">
                <label class="label-primary" for= "">Категория вопроса:</label>
                <select class="input-primary" v-model="forms.category">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label class="label-primary" for="">Описание вопроса:</label>
                <textarea class="input-primary" rows="10" v-model="forms.question"></textarea>
                <label class="label-primary" for= "">Консультант:</label>
                <input class="input-primary" v-model="forms.consultant" type="text">
                <label class="label-primary" for= "">Дата записи:</label>
                <input class="input-primary" v-model="forms.date" type="text">
                <button class="btn btn-primary">Отправить заявку</button>
            </form>
        </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

    let forms = ref({});
    forms.value.fio= "asd asdas asd"
    forms.value.email = "example@mail.ru"
    forms.value.phone = "sdasd"
    forms.value.chfio = "asdasd a as "
    forms.value.age = "14"
    forms.value.region = "1"
    forms.value.organization = "1"
    forms.value.consultant = "1"
    forms.value.category = "1"
    forms.value.question = "1"
    forms.value.date = "23.10.10"

    const addBid = async()=>{
        await axios({
        method:"post",
        url:"http://localhost/fedorovRestApi/public/api/consultations",
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        },
        data:{
            fio:forms.value.fio,
            email:forms.value.email,
            phone:forms.value.phone,
            chfio:forms.value.chfio,
            age:forms.value.age,
            region_id:forms.value.region,
            organization_id:forms.value.organization,
            consultant_id:forms.value.consultant,
            category_question_id:forms.value.category,
            question_id:forms.value.question,
            date:forms.value.date,
        },
        }).then((res)=>{
            console.log(res)
            alert(res.data.consultation.code)  
        }).catch((err)=>{
            alert("ghjdfktyj")  
            console.log(err)
        })
    }
</script>

