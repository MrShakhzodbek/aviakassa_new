<template>
  <Main />
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-12 menu" style="display: flex;
        justify-content: space-between; text-decoration: none;">
          <router-link
            :to="item.link"
            v-for="(item, index) of links"
            :key="index"

          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <Footer/>
</template>
<script >
import Main from "./components/main.vue";
import Footer from "./components/footer.vue"
export default {
  components: {
    Main,
    Footer
  },
  data: () => ({
    links: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Charter",
        link: "/ticket",
      },
      {
        title: "Hotel",
        link: "/hotel",
      }
      
    ],
  }),
};
</script>
<style >
@import "./style.css";
</style>
