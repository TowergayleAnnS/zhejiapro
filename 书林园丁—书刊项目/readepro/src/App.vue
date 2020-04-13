<template>
  <div id="app">
    <div id="nav">
      <!-- <ul class="routers_box">
        <li>
          <router-link to="/">首页</router-link> |
        </li>
        <li>
          <router-link to="/about">新闻资讯</router-link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>-->
      <div class="logopart">
        <img src="./assets/rlogo.png" alt />
        <img src="./assets/logo3.png" alt="" />
      </div>
      <div class="navpart">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#16a951"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>

          <el-menu-item index="/magazine">杂志</el-menu-item>
          <el-menu-item index="/subscribe">订阅</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="contentbox">
      <router-view />
    </div>
    <!-- <Footer/> -->
  </div>
</template>
<script>
import Search from "../src/components/Search.vue";
// import Footer from "../src/components/footer";
export default {
  components: {
    Search,
    // Footer
  },
  data() {
    return {
      activeIndex2: "/"
    };
  },

  mounted() {
    if (this.$route.path != "/") {
      this.$router.push("/");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex2 = key;
      console.log(this.activeIndex2);
    }
  }
};
</script>

<style>
body {
  margin: 0 auto;
}

li {
  list-style: none;
}
#nav {
  /* background-color: rgb(84, 86, 82); */
  width: 90vw;
  height: 60px;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
}
.routers_box {
  width: 100vw;
  height: 30px;
  display: flex;
  align-items: center;
  line-height: 30px;
  font-size: 12px;
}
.logopart,
.logopart > img {
  height: 70px;
  /* width: 125px; */
}
.contentbox {
  width: 100vw;
  /* width: 100vw;
  padding: 0 10vw;
 
  margin: 0 auto; */
}
.searchbox {
  width: 90vw;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
