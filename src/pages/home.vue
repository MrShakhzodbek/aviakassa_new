<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 main">
          <h1>{{ $t('h1') }}</h1>
          <p>{{ $t('p') }}</p>
          <form>
            <input type="text" name="" id="" :placeholder="$t('placeholder.daprture')" />
            <i class="fa-solid fa-right-left"></i>
            <input type="text" name="" id="" :placeholder="$t('placeholder.arrival') " />
            <input
              type="date"
              :placeholder="$t('placeholder.date')"
              onfocus="this.type ='date'"
              onblur="this.type = 'text'"
            />
            <input
              type="date"
              :placeholder="$t('placeholder.way')"
              onfocus="this.type ='date'"
              onblur="this.type = 'text'"
            />
            <select>
              <option selected>{{ $t('select.selected') }}</option>
              <option value="economy">{{ $t('select.econom') }}</option>
              <option value="children">{{ $t('select.children') }}</option>
              <option value="business">{{$t('select.business')}}</option>
            </select>
          </form>
          <button>{{ $t('buttons.home_btn') }}</button>
        </div>
      </div>
    </div>
    <section style="padding-top: 50px; width: 100%; padding-bottom: 50px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 style="text-align: center; margin-bottom: 30px">
            {{ $t('section.h2') }}
          </h2>
          <div class="boxes">
            <div class="first">
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-32-34.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.first') }}</b>
                  <p>
                    {{ $t('section.info.p.first') }}
                  </p>
                </div>
              </div>
              <div
                class="box"
               
              >
                <img src="../assets/photo_2023-08-11_22-32-57.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.second') }}</b>
                  <p>
                   {{ $t('section.info.p.second') }}
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-05.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.third') }}</b>
                  <p>
                    {{ $t('section.info.p.third') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="second">
              <div class="box" >
                <img src="../assets/photo_2023-08-11_22-32-50.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.fourth') }}</b>
                  <p>
                    {{ $t('section.info.p.fourth') }}
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-01.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.fifth') }}</b>
                  <p>
                    {{ $t('section.info.p.fourth') }}
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-09.jpg" alt="" />
                <div class="info">
                  <b>{{ $t('section.info.b.sixth') }}</b>
                  <p>
                    {{ $t('section.info.p.sixth') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </header>
  
</template>

<script setup>

import {onMounted} from "vue";
import axios from "../plugins/axios.js";



onMounted(()=>{
  axios.get('tickets').then((res)=>{
      console.log(res,"home")
  })
})
</script>

<style  scoped>
header {
  background: url('https://cdn.pixabay.com/photo/2017/03/03/17/11/aircraft-2114464_1280.jpg') no-repeat center center / cover;
  padding: 50px 0 30px;
}
header form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
header .main h1 {
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 20px;
}
header .main p {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 30px;
}
header .main form {
  width: 100%;
  padding: 30px 40px;
  background: #ffffff;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 0.1fr repeat(4, 1fr);
  gap: 15px;
}
header .main button {
  border: none;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  color: #ffffff;
  background: rgb(107, 105, 105);
  transition: 500ms;
}
header .main button:hover {
  background: rgb(245, 243, 243);
  color: rgb(9, 8, 8);
}
header .main form input,
header .main form select {
  outline: none;
  padding: 5px 10px;
}
.boxes{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
section{
  background: rgba(248, 246, 246, 0.716);
  margin-bottom: 0;
  margin-top: 50px;
}
section .boxes .first, section .boxes .second{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
section .boxes .first .box, section .boxes .second .box{
    display: flex;
    align-items: center;
    gap: 30px;
}
section .boxes .first .box img, section .boxes .second .box img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>