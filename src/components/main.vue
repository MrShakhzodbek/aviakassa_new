<template>
    <div class="menu" style="padding: 10px 0; background: #1f2630; display: flex; justify-content: space-between;">
        <div class="container">
            <div class="row" style="justify-content: space-between;">
                <div class="col-3 logo">
                        <a style="display: flex; align-items: center; text-decoration: none; gap: 10px;" href="/">
                            <img style="width: 50px; height: 50px; border-radius: 50%;" src="../assets/logo.png" alt="logo">
                            <p style="margin-bottom: 0; text-decoration: none; color:#ffffff">Galaxy- Tickets & Travels</p>
                        </a>
                </div>
                <div class="col-6 language" style="display: flex; justify-content: end;">
                    <select name="select-category" @change="handleChange()" v-model="selectVal" style="background: transparent; border: none; outline: none;  color: white; display: flex; ">
                    <option style="color: black;" value="uz">Uz</option>
                    <option style="color: black;" value="en">En</option>
                    <option style="color: black;" value="ru">Ru</option>
                </select>
                </div>
            </div>
        </div>
       
    </div>
    
</template>

<script setup>

import {useI18n} from "vue-i18n";

const {locale} = useI18n()
import {ref} from "vue";

const selectVal = ref("ru")
    function handleChange(){
        locale.value = selectVal.value
        localStorage.getItem('locale',selectVal.value)
    }
</script>

<style scoped>
    .main  img{
        width: 50px;
        height: 50px;

    }
   
</style>