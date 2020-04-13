<template>
<div>
  <!-- <img src="../assets/swipper1.png" alt=""> -->
    <el-carousel :interval="4000" type="card" height="350px">
    <el-carousel-item v-for="(item,i) in swipperImage" :key="i">
      
      <img class="cours" v-bind:src="item.url" alt="" />
      
     
    </el-carousel-item>
  </el-carousel>
</div>
  
  
</template>

<script>
export default {
  name: "swipper",
  props: { 
    
  },
  data(){
      return{
          swipperImage: [
        { "url": require('../assets/banner1.png') },
        { "url": require('../assets/banner2.png')  },
        { "url": require('../assets/banner3.png')  },
        { "url": require('../assets/banner4.png')  },
        { "url": require('../assets/banner5.png')  }
      ]
      }
  }
  
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#swippersimg {
  height: 350px;
}
.cours{
  height: 350px;
  width: 100%;
}
</style>
