<template>
  <div class="home">
    <div class="big">
      <div class="home_container" @scroll="loadMore">

       
        <div class="swipperscontian">
          <Swipper :props="swipperImage" />
        </div>
        <div class="adv1">
         
        </div>
        <div class="catagray">
           <div class="advs">
          <img src="../../assets/01.png" alt="">
        </div>
          <div class="catleft">
            <div
              class="leftlistbox"
              v-for="(ctitem, index) in category"
              :key="index"
              @click="enterCtItem(ctitem.code)"
            >
              <h4>{{ ctitem.name }}</h4>
            </div>
          </div>
          <div class="catright">
            <div class="rightlistbox">
              <div class="bookItem" v-for="(items, i) in Categray" :key="i" @click="gotoDetail(items)">
                <div>
                  <img :src="items.mediaList[0].coverPic" alt="" />
                </div>
                <h4>{{ items.mediaList[0].title }}</h4>
                <p>{{ items.mediaList[0].authorPenname }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swipper from "../../components/Swipper";

import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",

  computed: {
    Categray() {
      console.log(this.$store.state.firstpageStore.Categray)
      return this.$store.state.firstpageStore.Categray;
    }
  },
  data() {
    return {
      swipperImage: [
        { url: "../../assets/reading1.jpg" },
        { url: "../../assets/reading2.jpeg" },
        { url: "../../assets/reading3.jpeg" }
      ],
      category: [
        {
          code: "SH",
          name: "文艺"
        },
        {
          code: "JG",
          name: "经管/励志"
        },
        {
          code: "SK",
          name: "人文社科"
        },
        {
          code: "SH",
          name: "生活"
        },
        {
          code: "JY",
          name: "教育"
        },
        {
          code: "KJ",
          name: "科技"
        },
        {
          code: "TS",
          name: "童书"
        },
        {
          code: "JKS",
          name: "进口书"
        },
        {
          code: "QKZZ",
          name: "期刊/杂志"
        },
        {
          code: "VP",
          name: "网络女频"
        },
        {
          code: "NP",
          name: "网络男频"
        }
      ],
      catname:"WY1",
      bookcat: [],
      end: 20,
      isLoading: false
    };
  },
  mounted() {
    let that=this
     this.querygoodscat({ category: that.catname,end:that.end });
    
  },
  methods: {
    enterCtItem(e) {
      this.catname=e
      console.log(this.end)
      let that=this
      this.querygoodscat({ category: that.catname,end:that.end });
    },
    
    loadMore(e) {
      this.end=20
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 20){
				if (this.isLoading){

					return 
				}
				this.isLoading = true
        this.end += 20
        let that=this
				this.querygoodscat({ category: that.catname,end:that.end })
				.then(()=>{
					this.isLoading = false
				})
			}
    },
    gotoDetail(items){
      console.log(items.saleId|items)
      if(items.saleId){
        items.saleId=items.saleId
      }
     
      
      this.$router.push({path: `/detail/${items.saleId}`}); 
    },

    ...mapActions(["queryBooksaleList", "querygoodscat"])
  },
  components: {
    Swipper,
    
  }
};
</script>

<style scoped>
.home{
  margin: 0 auto;
}
.big{
  width: 100%;
  margin: 0px auto;
  height: calc(100vh - 60px);
  overflow: hidden;
}
.adv1{
  height: 50px;
  
}

.home_container {
  /* height: 100vh; */
  width: 102vw;
  margin: 0px auto;
  height: 100%;
  overflow: scroll;

  /* background-color: coral; */
}
.swipperscontian {
  border-bottom: 1px solid gray;
}


.catagray {
  

  /* background-color: brown; */
  margin: 0 auto;
  display: flex;

  justify-content: space-around;
}
.advs img{
  width: 150px;
  height: 600px;
}
.catleft {
  width: 193px;
  display: flex;
  flex-direction: column;
  /* background-color: aliceblue; */
  box-shadow: 0 3px 9px 0 rgba(51,51,51,.3);
}
.leftlistbox {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  transition: all 0.5s;

}
.leftlistbox:hover {
  color: rgb(88, 39, 39);
  box-shadow: 0 3px 9px 0 rgba(51,51,51,.3);
}
.leftlistbox:active {
  color: rgb(88, 39, 39);
}
/**》》》》》》》》》》》》》》》》》》
 */
.catright {
  width: 850px;
  border: 1px dotted lightgray;
  /* background-color: blueviolet; */
}
.rightlistbox {
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bookItem {
  margin-top: 20px;
  width: 212.5px;
  /* height: 250px; */
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  transition: all 0.5s;
  /* border-collapse:unset; */
}
.bookItem:hover{
  box-shadow: 0 3px 9px 0 rgba(51,51,51,.3);
}
.bookItem img {
  height: 200px;
}
.bookItem h4,
.bookItem p {
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-emphasis: none;
}
.bookItem h4 {
  font-size: 13px;
  width: 150px;
  overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
}
.bookItem p {
  font-size: 12.5px;
   width: 150px;
   overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
}
</style>
