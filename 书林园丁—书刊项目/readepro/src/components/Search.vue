<template>
  <div class="searchbox">
    <!-- <input type="text" placeholder="搜索海量图书"> -->
    <el-input placeholder="搜索海量图书" v-model="input3" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
   
    
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    msg: String,
    input3: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox{
  height: 100px;
}
</style>
