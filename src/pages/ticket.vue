<template>
  <div class="charter">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Поиск чартеров онлайн</h2>
          <p>Дешевые авиабилеты на чартерные рейсы</p>
          <form>
            <div class="inputs">
              <div class="country">
                <div class="country_input">
                  <label for="">Откуда</label>
                  <input type="text" placeholder="Country" />
                </div>
                <div class="country_city">
                  <br />
                  <input type="text" placeholder="City" />
                </div>
              </div>
              <div class="type">
                <label for="">Тип Рейса</label>
                <a href="">
                  <button><i class="fa-solid fa-plane-up"></i></button>
                  <button><i class="fa-solid fa-plane-arrival"></i></button>
                </a>
              </div>
              <div class="where">
                <div class="where_input">
                  <label for="">Куда</label>
                  <input type="text" placeholder="Country" />
                </div>
                <div class="where_city">
                  <br />
                  <input type="text" placeholder="City" />
                </div>
              </div>
            </div>
            <div class="calendar">
              <div class="from_date">
                <label for="">From Date</label> <br>
                <input type="date">
              </div>
              <div class="to_date">
                <label for="">To Date</label> <br>
                <input type="date">
              </div>
            </div>
            <div class="search">
              <div class="box">
                <div class="vzrosliye">
                  <p>Взрослые</p>
                  <div class="click">
                    <button @click="amal(-1)">-</button>
                    {{ count }}
                    <button @click="amal(1)">+</button>
                  </div>
                </div>
                <div class="deti">
                  <p>Дети</p>
                  <div class="click">
                    <button @click="deti(-1)">-</button>
                    {{ raqam }}
                    <button @click="deti(1)">+</button>
                  </div>
                </div>
                <div class="mladensi">
                  <p>Младенцы</p>
                  <div class="click">
                    <button @click="mladensi(-1)">-</button>
                    {{ son }}
                    <button @click="mladensi(1)">+</button>
                  </div>
                </div>
              </div>
              <div class="button">Search Ticket</div>
            </div>
          </form>
          <div class="result">
            <div class="bilet">
              <div class="type_ticket">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Uzbekistan_Airways_logo.svg/1280px-Uzbekistan_Airways_logo.svg.png" alt="logo">
                <div class="ticket_type">
                <i class="fa-solid fa-circle-question"></i>
                <p>Charter</p>
              </div>
              </div>
              
              <div class="ticket_info">
                <div class="from">
                  <p>18:30 <span>DME</span></p>
                  <p>16 December, Saturday</p>
                  <p class="airport_name">
                    Москва, Домодедово
                  </p>
                </div>
                <div class="time">
                  <div class="flight">
                    <i class="fa-solid fa-circle-dot"></i>
                    <p>............................................</p>
                    <i class="fa-solid fa-plane"></i>
                  </div>
                  <div class="hour">
                    <i class="fa-regular fa-clock"></i>
                    <p>3h 30m, no transfers</p>
                  </div>
                </div>
                <div class="to">
                  <p><span>BOJ</span>09:15 </p>
                  <p>16 December, Saturday</p>
                  <p class="airport_name">
                    Москва, Домодедово
                  </p>
                </div>
                <div class="location">
                  <p class="type_of_airline">
                    YC-9917
                  </p>
                  <p>Airbus A321</p>
                  <p class="locate_city">Ямал</p>
                </div>
                <div class="typeof_ticket">
                  Economy
                </div>
              </div>
            </div>
            <div class="price">
              <button>
                331 261 RUB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="aviaticket">
    <div class="container">
     <div class="row">
      <h2>Чартерные авиабилеты</h2>
      <p>В данном разделе Вы сможете найти, забронировать и оплатить авиабилеты на чартерные рейсы. Чартерные - это рейсы, выполняемые по отдельному расписанию на авиалайнерах, зафрахтованных Туркомпаниями по чартерному договору (подробнее о Чартерах).</p>
      <p>Билет на чартерный рейс, как правило, существенно дешевле, чем на регулярный, при том, что эти рейсы - прямые!</p>
      <p>Выбирая из списка страну Вылета или Прилета, вы получите список городов, из которых возможен перелет в интересующем вас направлении. После выбора маршрута система покажет на календаре все доступные даты, на которые возможно оформление билетов.</p>
     </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      raqam: 0,
      son:0,
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000),
      ],
      disabledEndDate: {
        to: new Date("01.02.2021"),
        from: new Date("10.02.2021"),
      },
    };
  },
  methods: {
    amal(val) {
      if (val == -1 && this.count == 0) return false;
      this.count += val;
    },
    deti(val) {
      if (val == -1 && this.raqam == 0) return false;
      this.raqam += val;
    },
    mladensi(val) {
      if (val == -1 && this.son == 0) return false;
      this.son += val;
    }
  },
};
</script>

<style scoped>
.charter {
  background: rgb(49, 217, 243);
}
h2,
p {
  color: #ffffff;
  text-align: center;
}
h2 {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
}
p {
  font-size: 20px;
  margin-bottom: 40px;
  font-weight: 400;
}
form {
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 10px;
  margin-bottom: 50px;
}
form .inputs {
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  gap: 10px;
}
.type {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.type label {
  color: grey;
  text-align: start;
}
.type a {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.type a button {
  border: none;
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  background: rgb(97, 96, 96);
  transition: 500ms;
}
.type a button:hover {
  background: rgb(176, 173, 173);
}

.type a button .fa-plane-up,
.type a button .fa-plane-arrival {
  color: #ffffff;
}
.type a button:hover .fa-plane-up,
.type a button:hover .fa-plane-arrival {
  color: rgb(97, 97, 234);
}
.country,
.where {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}
.country_input,
.where_input,
.country_city,
.where_city {
  display: flex;
  flex-direction: column;
}
.country_input label,
.where_input label {
  color: grey;
  text-align: start;
}
.country_input input,
.country_city input,
.where_input input,
.where_city input {
  width: 100%;
  border: 1px solid black;
  border-radius: 0;
  padding: 5px 10px;
  outline: none;
  color: black;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}
.search .box {
  display: flex;
  gap: 20px;
  align-items: center;
}
.vzrosliye, .deti,.mladensi {
  display: flex;
  flex-direction: column;
}
.vzrosliye p, .deti p,.mladensi p {
  color: grey;
  margin: 0;
  font-size: 15px;
  margin-bottom: 5px;
}
.vzrosliye .click, .deti .click,.mladensi .click{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
}
.vzrosliye .click button, .deti .click button,.mladensi .click button{
  width: 100%;
  border: none;
  padding: 5px 10px;
  color: black;
}
.search .button{
  border: none;
  padding: 8px 15px;
  border-radius: 10px;
  background: rgb(5, 195, 243);
  color: #ffffff;
  font-weight: 600;
}
.aviaticket{
  background: #46494d;
  padding: 40px 0 30px;
}
.aviaticket h2{
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 500;
}
.aviaticket p{
  font-size: 15px;
  text-align: start;
  margin-bottom: 10px;
}
.result{
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  background: #ffffff;
  padding: 30px;
  margin-bottom: 40px;
  gap: 20px;
  align-items: center;
}
.bilet{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.type_ticket {
  display: flex;
  gap: 20px;
  align-items: center;
}
.type_ticket img{
  width: 150px;
  height: 40px;
}
.ticket_type{
  display: flex;
  align-items: center;
  gap: 10px;
}
.ticket_type p{
  margin-bottom: 0;
  text-decoration: underline;
  font-size: 17px;
  color: rgb(7, 131, 239);
}
.ticket_info{
  padding: 5px;
  border-radius: 10px;
  background: rgb(176, 174, 174);
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr 1.5fr;
  gap: 20px;
  margin-top: 20px;
}
.ticket_info .from{
  display: flex;
  flex-direction: column;
  align-items: end;
}
.ticket_info .from p{
  font-size: 15px;
  margin-bottom: 0;
}
.ticket_info .from p:nth-child(2){
  font-size: 11px;
  color: rgb(87, 85, 85);
}
.ticket_info .from .airport_name{
  font-size: 12px;
  color: rgb(93, 89, 89);
} 
.ticket_info .from p:nth-child(1){
  font-size: 18px;
  color: black;
  font-weight: 600;
}
.ticket_info .time{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ticket_info .time .flight{
  display: flex;
  align-items: center;
  gap: 5px;
}
.ticket_info .time .flight .fa-circle-dot,.ticket_info .time .flight p, .ticket_info .time .flight .fa-plane, .ticket_info .time .hour .fa-clock {
  color: rgb(93, 89, 89);
}
.ticket_info .time .flight p{
  margin-bottom: 10px;
}
.ticket_info .time .hour{
  display: flex;
  gap: 10px;
  align-items: center;
}
.ticket_info .time .hour p{
  margin-bottom: 0;
  font-size: 12px;
}
.ticket_info .from p:nth-child(1) span{
  font-size: 15px;
  font-weight: 400;
}
.ticket_info .to{
  display: flex;
  flex-direction: column;
}
.ticket_info .to p{
  margin-bottom: 0;
  font-size: 12px;
}
.ticket_info .to p:nth-child(1){
  font-size:15px;
  font-weight: 600;
  color: black;
}
.ticket_info .to p:nth-child(1) span{
  font-size: 12px;
  margin-right: 5px;
  font-weight: 400;
}
.ticket_info .to p:nth-child(2), .ticket_info .to .airport_name{
  color: rgb(93, 89, 89);
}
.ticket_info .location{
  display: flex;
  flex-direction: column;
}
.ticket_info .location p{
  margin-bottom: 0;
  font-size: 12px;
}
.ticket_info .location p:nth-child(1){
  font-display: 13px;
  font-weight: 600;
  color: black;
}
.ticket_info .location p:nth-child(2), .ticket_info .location .locate_city{
  color:rgb(93, 89, 89) ;
}
.ticket_info .typeof_ticket{
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: rgb(6, 93, 124);
}
.price button{
  width: 100%;
  border: none;
  padding: 10px 0;
  background: rgb(93, 202, 245);
  border-radius: 10px;
  color: #ffffff;
  font-weight: 600;
}
.calendar{
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 100px;
}
.calendar .from_date label, .calendar .to_date label{
    color: grey;
}
.calendar .from_date input, .calendar .to_date input{
  padding: 5px 10px;
  margin-top: 10px;
  outline: none;
  border: 1px solid black;
}
</style>