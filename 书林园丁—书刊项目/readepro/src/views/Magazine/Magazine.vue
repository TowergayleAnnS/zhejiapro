<template>
  <div class="news">
    <div class="searchM">
      <span class="words">按日期搜索 ： </span>
      <div class="year">
        <el-select v-model="value1" placeholder="全部年份">
          <el-option
            v-for="item in options1"
            :key="item.value1"
            :label="item.label"
            :value="item.value1"
          >
          </el-option>
        </el-select>
      </div>
      <div class="month">
        <el-select v-model="value" placeholder="全部月份">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="success" @click="search()" plain>搜索</el-button>
    </div>
    <div class="bookscontainers">
      <div class="booksItem" v-for="(item,i) in bookArray" :key="i" @click="gotoMazineDetail(item)" >
        <div class="coverBox">
           <img :src="item.cover" alt="">
        </div>
        <p>{{item.yearPeriod}}</p>
        <div class="megazineDetail">
        查看目录
        </div>
      </div>
    </div>
    <div class="bottom">
    
    <el-pagination
      
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from "vuex" 
export default {
  name: "magazine",
  data() {
    return {
      options1: [
        {
          value1: "",
          label: "全部年份"
        },
        {
          value1: "2020",
          label: "2020年"
        },
        {
          value1: "2019",
          label: "2019年"
        },
        {
          value1: "2018",
          label: "2018年"
        },
        {
          value1: "2017",
          label: "2017年"
        },
        
        {
          value1: "2016",
          label: "2016年"
        },
        
        {
          value1: "2015",
          label: "2015年"
        },
        
        {
          value1: "2014",
          label: "2014年"
        },
        
        {
          value1: "2013",
          label: "2013年"
        },
        {
          value1: "2012",
          label: "2012年"
        },
        {
          value1: "2011",
          label: "2011年"
        },
        {
          value1: "2010",
          label: "2010年"
        },
        {
          value1: "2009",
          label: "2009年"
        },
        {
          value1: "2008",
          label: "2008年"
        },
        {
          value1: "2007",
          label: "2007年"
        },
        {
          value1: "2006",
          label: "2006年"
        },
        {
          value1: "2005",
          label: "2005年"
        },
        {
          value1: "2004",
          label: "2004年"
        },
        {
          value1: "2003",
          label: "2003年"
        },
        {
          value1: "2002",
          label: "2002年"
        }
        
        
      ],
      options: [
        {
          value: "",
          label: "全部月份"
        },
        {
          value: "1",
          label: "1月"
        },
        {
          value: "2",
          label: "2月"
        },
        {
          value: "3",
          label: "3月"
        },
        {
          value: "4",
          label: "4月"
        },
        {
          value: "5",
          label: "5月"
        },
        {
          value: "6",
          label: "6月"
        },
        {
          value: "7",
          label: "7月"
        },
        {
          value: "8",
          label: "8月"
        },
        {
          value: "9",
          label: "9月"
        },
        {
          value: "10",
          label: "10月"
        },
        {
          value: "11",
          label: "11月"
        },
        {
          value: "12",
          label: "12月"
        }
       
      ],
      value1:"",
      value: "",
      currentPage:1,
      size:12
    };
  },
   computed:{
    bookArray(){
      
      return this.$store.state.homeStore.bookArray
      
    },
    ...mapState([
      "SearchMagazine"
    ])

  },
   mounted(){
    this.queryAllBook()
  },
 
  methods:{
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        console.log(this)
        this.queryNextPage({
          
          current: `${val}`,
        })
    },
    gotoMazineDetail(item){
      console.log(item)
       this.$router.push({path: `/magazinedetail/${item.id}`}); 
    },
    
    search(){
      console.log(this.value1,this.value)
      let that=this
      this.querySearchMagazine({year:that.value1,month:that.value,current:1})
    },
    ...mapActions(["queryAllBook","queryMagazineDetail","querySearchMagazine","queryNextPage"])

  }
};
</script>

<style>
.news {
  height: calc(100vh - 130px);
  width: 90vw;
  margin: 0 auto;
}
.searchM {
  padding: 30px 0 20px 0;
  height: 40px;
  display: flex;
}
.words {
  font-size: 14px;
  color: #939eab;
  letter-spacing: 0;
  line-height: 27px;
  display: inline-block;
  margin-right: 10px;
}
.bookscontainers{
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin:10px auto;
  border-top: 1px solid gray;
    
}
.booksItem{
  
    padding: 20px 0;
    width: calc(90vw / 6 );
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.coverBox{
  height: 200px;
  box-shadow: 0 3px 9px 0 rgba(51,51,51,.1);
  transition: all 1s;
  
}
.coverBox:hover{
  box-shadow: 0 6px 12px 0 rgba(51,51,51,.5);
}
.coverBox img{
 
  height: 200px;
   
}
.booksItem p{
  margin: 10px auto ;
}
.bottom{
  text-align: center;
  margin: 25px auto;
}
</style>
