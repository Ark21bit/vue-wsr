<template>
    <section class="admin">
            <div class="admin-box">
                <h2 class="color-red"> Управление списком регионов:</h2>
                <table >
                    <thead>
                        <tr>
                            <th>Регион</th>
                            <th class="hidden"></th>
                        </tr>
                    </thead>
                    <tr v-for="region in regions">
                        <td data-label="Регион">{{region.name}}</td>
                        <td data-label="" class="td-btn"><button @click="deleteRegion(region.name)">Удалить</button></td>
                    </tr>                    
                    <tr class="add">
                        <td data-label="Регион"><input type="text" v-model="regionName" class="input-td"></td>
                        <td data-label="" class="td-btn-add"><button @click="addRegion">Добавить</button></td>
                    </tr>
                </table>
            </div>
        </section>
        <section class="filter">
            <form action="">
                <label for="" class="label-primary">Отфильтровать по</label>
                <select>
                    <option value="">Регионам</option>
                    <option value="">организациям</option>
                    <option value="">консультантам</option>
                    <option value="">категориям вопросов и вопросам</option>
                    <option value="">диапазону дат </option>
                    <option value="">статусу заявок</option>                    
                </select>
            </form>
        </section>
        <section class="requests">
            <h2 class="color-red g-full">Заявки</h2>
            <div class="item" v-for="bid in BidsFilter">
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
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

    let regions = ref()
    let regionName = ref()

    const addRegion = async() =>{
        await axios({
        method:"post",
        url:`http://localhost/fedorovRestApi/public/api/regions`,
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        },
        data:{
            name:regionName.value
        }
        }).then((res)=>{
            getRegion()
            regionName.value = ""
            alert("успешно")       
        }).catch((err)=>{
            alert(err.message)            
        })
    }

    const  deleteRegion = async(name) =>{
        await axios({
        method:"delete",
        url:`http://localhost/fedorovRestApi/public/api/regions/${name}`,
        headers:{
            Authorization: `Bearer ${localStorage.token}`,
        }
        }).then((res)=>{
            getRegion()
            alert("успешно")       
        }).catch((err)=>{
            alert(err.message)            
        })
    }    

    const  getRegion = async(name) =>{
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

    onMounted(async()=>{
        getRegion()
    })

    const getNameRegion = (id)=>{
        let region =  regions.value.filter(a=>{
            return a.id == id
        })       
        return region[0].name
    }

    let Bids = ref([]);
    
    let BidsFilter = computed(()=>{       
        return Bids.value.filter(a =>{
            return a.region_id == "1"
        })
    });  

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
    
    onMounted(async()=>{
        getBids()
    })
    
    
</script>

