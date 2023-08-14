<template>
  <div class="ruyxat">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form>
            <input type="text" placeholder="City, Country or Hotel" />
            <input type="date" placeholder="Заезд" />
            <input type="date" placeholder="Отъезд" />
            <div class="buttons">
              <p class="text">Number of people</p>
              <div class="btns">
                <button @click="people(-1)">-</button>
                {{ count }}
                <button @click="people(1)">+</button>
              </div>
            </div>
            <button class="search">Search Hotel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="hotel_list">
    <div class="container">
        <div class="row">
            <div class="lists">
                <div class="information">
                    <div class="info_hotel">
                        <div class="sort">
                            <label for="">Sort by</label> <br>
                            <select>
                                <option selected>No Selected</option>
                                <option value="popularity">By popularity</option>
                                <option value="cheaper">Cheap first</option>
                                <option value="expensive">Expensive first</option>
                            </select>
                        </div>
                        <hr>
                        <div class="number_stars">
                            <label for="">Number of stars</label><br>
                            <input type="checkbox"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            <br>
                            <input type="checkbox"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            <br>
                            <input type="checkbox"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            <br>
                            <input type="checkbox"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            <br>
                            <input type="checkbox"><i class="fa-regular fa-star"></i>
                        </div>
                        <hr>
                        <div class="service">
                            <label for="">Services and facilities</label> <br>
                            <input type="checkbox">Parking <br>
                            <input type="checkbox">Free Internet <br>
                            <input type="checkbox">Bar / Restaurant <br>
                            <input type="checkbox">Breakfast <br>
                            <input type="checkbox">Pool <br>
                            <input type="checkbox">In-room bathroom <br>
                            <input type="checkbox">Fitness <br>
                            <input type="checkbox">Spa-Services <br>
                            <input type="checkbox">Transfer <br>
                        </div>
                    </div>
                    <div class="main_hotel">
                        <div class="hotel">
                            <img src="../assets/Daniel_Hill_1.jpg.crdownload" alt="hotel">
                            <div class="information_hotel">
                                <h4>Daniel Hill</h4>
                                <div class="icons">
                                    <i class="fa-solid fa-wifi"></i>
                                    <i class="fa-solid fa-utensils"></i>
                                    <i class="fa-solid fa-square-parking"></i>
                                    <i class="fa-solid fa-person-swimming"></i>
                                    <i class="fa-solid fa-champagne-glasses"></i>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <button>from 13 433 RUB</button>
                            </div>
                        </div>
                        <div class="hotel">
                            <img src="../assets/Daniel_Hill_1.jpg.crdownload" alt="hotel">
                            <div class="information_hotel">
                                <h4>Daniel Hill</h4>
                                <div class="icons">
                                    <i class="fa-solid fa-wifi"></i>
                                    <i class="fa-solid fa-utensils"></i>
                                    <i class="fa-solid fa-square-parking"></i>
                                    <i class="fa-solid fa-person-swimming"></i>
                                    <i class="fa-solid fa-champagne-glasses"></i>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <button>from 13 433 RUB</button>
                            </div>
                        </div>
                        <div class="hotel">
                            <img src="../assets/Daniel_Hill_1.jpg.crdownload" alt="hotel">
                            <div class="information_hotel">
                                <h4>Daniel Hill</h4>
                                <div class="icons">
                                    <i class="fa-solid fa-wifi"></i>
                                    <i class="fa-solid fa-utensils"></i>
                                    <i class="fa-solid fa-square-parking"></i>
                                    <i class="fa-solid fa-person-swimming"></i>
                                    <i class="fa-solid fa-champagne-glasses"></i>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <button>from 13 433 RUB</button>
                            </div>
                        </div>
                        <div class="hotel">
                            <img src="../assets/Daniel_Hill_1.jpg.crdownload" alt="hotel">
                            <div class="information_hotel">
                                <h4>Daniel Hill</h4>
                                <div class="icons">
                                    <i class="fa-solid fa-wifi"></i>
                                    <i class="fa-solid fa-utensils"></i>
                                    <i class="fa-solid fa-square-parking"></i>
                                    <i class="fa-solid fa-person-swimming"></i>
                                    <i class="fa-solid fa-champagne-glasses"></i>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <button>from 13 433 RUB</button>
                            </div>
                        </div>
                        <div class="hotel">
                            <img src="../assets/Daniel_Hill_1.jpg.crdownload" alt="hotel">
                            <div class="information_hotel">
                                <h4>Daniel Hill</h4>
                                <div class="icons">
                                    <i class="fa-solid fa-wifi"></i>
                                    <i class="fa-solid fa-utensils"></i>
                                    <i class="fa-solid fa-square-parking"></i>
                                    <i class="fa-solid fa-person-swimming"></i>
                                    <i class="fa-solid fa-champagne-glasses"></i>
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <button>from 13 433 RUB</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <div class="search_hotel">
                        <label for="">Search by hotels</label>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="map_main">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11991.902464338094!2d69.22815304999999!3d41.28763515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1691952630746!5m2!1sru!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    people(val) {
      if (val == -1 && this.count == 0) return false;
      this.count += val;
    },
  },
};
</script>

<style scoped>
.ruyxat {
  background: rgb(0, 217, 255);
  padding: 120px 0 60px;
  width: 100%;
}
.ruyxat .container .row {
  justify-content: center;
}
.ruyxat form {
  width: 100%;
  background: #ffffff;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr 1fr;
  margin-bottom: 30px;
  padding: 10px 20px;
  border-radius: 10px;
  gap: 15px;
}
.ruyxat form input {
  border: none;
  background: rgb(238, 236, 236);
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
}
.ruyxat form .buttons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.ruyxat form .buttons p {
  margin-bottom: 0;
  color: black;
  font-size: 15px;
}
.ruyxat form .buttons .btns {
  display: flex;
  align-items: center;
  gap: 15px;
}
.ruyxat form .buttons .btns button {
  border: none;
  padding: 5px 10px;
}
.ruyxat .search {
  border: none;
  padding: 10px 20px;
  width: 100%;
  background: rgb(3, 181, 212);
  color: #ffffff;
  font-size: 20px;
  border-radius: 10px;
}
.hotel_list {
    background: rgb(0, 217, 255);
}
.hotel_list .lists{
    background: #ffffff;
    display: grid;
    grid-template-columns: 1.5fr 1.2fr;
    gap: 10px;
    padding: 0;
    margin-bottom: 50px;
}
.hotel_list .lists .information{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
}
.hotel_list .lists .information .info_hotel{
    background: rgb(238, 234, 234);
    padding: 10px;
}
.hotel_list .lists .information .main_hotel{
    max-height: 800px;
    overflow-y: scroll;
    
}
.hotel_list .lists .information .main_hotel .information_hotel h4{
    font-size: 20px;
}
.hotel_list .lists .information .main_hotel .information_hotel i{
    display: inline-block;
    margin-right: 5px;
    color: rgb(0, 187, 255);
}
.hotel_list .lists .information .main_hotel .information_hotel{
    min-height: 100%;
    position: relative;
}
.hotel_list .lists .information .main_hotel .information_hotel button{
    border: none;
    padding: 5px 10px;
    background: rgb(0, 208, 255);
    border-radius: 10px;
    color: #ffffff;
    font-weight: 600;
    margin-top: 50%;
}
.main_hotel .hotel{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px dotted #000;
}
.main_hotel .hotel img{
    width: 100%;
    height: 180px;
}
.info_hotel{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.info_hotel .sort select{
    border: none;
    padding: 5px 10px;
    outline: none;
    width: 100%;
}
.info_hotel .sort label, .info_hotel .number_stars label, .info_hotel .service label{
   font-size: 20px;
   font-weight: 500;
   margin-bottom: 10px;
   color: grey;
}
.info_hotel .number_stars input, .info_hotel .service input{
    margin-right: 10px;
}
.lists .map{
    
    display: flex;
    flex-direction: column;
}
.lists .map .search_hotel{
    padding: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.lists .map .search_hotel input{
    outline: none;
    padding: 5px 40px;
}
.lists .map .search_hotel .fa-magnifying-glass{
    position: absolute;
    left: 4%;
    top: 55%;
    z-index: 99999;
}
.lists .map .search_hotel .fa-xmark{
    position: absolute;
    right: 4%;
    top: 55%;
    z-index: 99999; 
}
.lists .map .map_main{
    height: 100%;

}
</style>