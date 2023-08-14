<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 main">
          <h1>Find Your Flight</h1>
            <pre>{{$t('hi')}}</pre>
          <p>Search and compare best airfares</p>
          <form>
            <input type="text" name="" id="" placeholder="Departure city" />
            <i class="fa-solid fa-right-left"></i>
            <input type="text" name="" id="" placeholder="Arrival city" />
            <input
              type="date"
              placeholder="Date"
              onfocus="this.type ='date'"
              onblur="this.type = 'text'"
            />
            <input
              type="date"
              placeholder="One Way"
              onfocus="this.type ='date'"
              onblur="this.type = 'text'"
            />
            <select>
              <option selected>Type of Ticket</option>
              <option value="economy">Economy</option>
              <option value="children">Children</option>
              <option value="business">Business</option>
              <option value="childrens">Childrens</option>
            </select>
          </form>
          <button>Search Tickets</button>
        </div>
      </div>
    </div>
  </header>
  <main style="padding-top: 50px; width: 100%; padding-bottom: 50px;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 style="text-align: center; margin-bottom: 30px">
            Your best deal in no time!
          </h2>
          <div class="boxes">
            <div class="first">
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-32-34.jpg" alt="" />
                <div class="info">
                  <b>24/7 Customer Support</b>
                  <p>
                    Professional support 24/7. We are ready to answer questions
                    <br />
                    and provide assistance any time
                  </p>
                </div>
              </div>
              <div
                class="box"
               
              >
                <img src="../assets/photo_2023-08-11_22-32-57.jpg" alt="" />
                <div class="info">
                  <b>Сhoice of millions</b>
                  <p>
                    More than million tickets sold per year! Our customers
                    always <br />
                    come back.
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-05.jpg" alt="" />
                <div class="info">
                  <b>Easy booking - saving money</b>
                  <p>
                    Your order can be paid by card without any additional <br />
                    mark-ups
                  </p>
                </div>
              </div>
            </div>
            <div class="second">
              <div class="box" >
                <img src="../assets/photo_2023-08-11_22-32-50.jpg" alt="" />
                <div class="info">
                  <b>Best Affiliate program</b>
                  <p>
                    Our customers = our partners. You can buy tickets for yourself, friends, colleagues and save money for next booking! Or even start your own business
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-01.jpg" alt="" />
                <div class="info">
                  <b>Payment protection</b>
                  <p>
                    Your payment information is securely protected by PCI DSS certificate and compliance of Visa and MasterCard systems standards. Aviakassa is an Accredited IATA Member
                  </p>
                </div>
              </div>
              <div
                class="box"
                
              >
                <img src="../assets/photo_2023-08-11_22-33-09.jpg" alt="" />
                <div class="info">
                  <b>Partners confidence</b>
                  <p>
                    A lot or awards from the Russian and the world's leading airlines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style  scoped>
header {
  background: rgb(49, 217, 243);
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
}
main .boxes .first, main .boxes .second{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
main .boxes .first .box, main .boxes .second .box{
    display: flex;
    align-items: center;
    gap: 30px;
}
main .boxes .first .box img, main .boxes .second .box img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>