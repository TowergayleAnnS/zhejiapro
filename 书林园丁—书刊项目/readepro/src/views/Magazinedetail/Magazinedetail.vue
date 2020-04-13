<template>
  <div class="Magazinedetail">
    <div class="magizinetop">
      <div>全部杂志 / 杂志目录</div>
      <div class="magazineBook">
        <div class="macatlogimg">
          <img
            :src="detailMagine.cover"
            alt=""
          />
        </div>
        <div class="magdetail" >
          <h4>{{detailMagine.periodNumber}}</h4>
          <h5>卷首语：《{{detailMagine.title}}》</h5>
          <p id="contentsp" v-html="detailMagine.firstContent">{{}}</p>
        </div>
      </div>
    </div>
    <div class="magazinecatlog">
      <div class="mulvTitle">
        <h4>杂志目录</h4>
        <h5>Magazine catalogue</h5>
      </div>
      <div class="catgBoxs"> 
        <div class="catgsItem" v-for="(items,i) in MagazineCatalog" :key="i">
          <div class="cattitle">
            <div class="titlebox">{{items.name}}</div>
          </div>
          <div class="catalogs">
            <div class="artical" v-for="(catit,it) in items.list" :key="it">
              <div>{{catit.title}}</div>
              <div>{{catit.author}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Magazinedetail",
  computed: {
    
    detailMagine(){
      return this.$store.state.homeStore.detailMagine;

    },
    MagazineCatalog(){
      return this.$store.state.homeStore.MagazineCatalog;

    }
    
  },
   filters: {
      
    },
  mounted() {
    console.log(this.$store.state)
    console.log(this.$route.params.id);
    let that = this;
    this.queryMagazineDetail({ id: that.$route.params.id });
    this.queryMagazineCatalog({id: that.$route.params.id })
  },
  methods: {
    ...mapActions(["queryMagazineDetail","queryMagazineCatalog"])
  }
};
</script>

<style scoped>
.magizinetop {
  padding-top: 30px;
  width: 80vw;
  margin: 0 auto;
  /* background-color: yellow; */
}

.macatlogimg > img {
  width: 150px;
  height: 200px;
}
.magazineBook {
  display: flex;
  padding: 30px;
  justify-content: space-between;
  /* background-color: tomato; */
  box-shadow: 0 4px 12px 0 rgba(51, 51, 51, 0.3);
}
.magdetail {
  width: calc(80vw - 260px);
}
.magdetail h4 {
  font-size: 20px;
  color: #323c47;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 20px;
  margin: 0;
}
.magdetail h5{
  margin: 0;
}
.magdetail p {
  color: #6a7c92;
  letter-spacing: 0;
  text-align: justify;
  line-height: 24px;
  text-indent: 30px;
  margin-top: 30px;
  height: 156px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin: 0;
}

/* 》》》》 */
.mulvTitle{
  padding-top: 40px;
  text-align: center;
}
.mulvTitle h4{
  font-size: 40px;
    color: #31475e;
    letter-spacing: .62px;
    line-height: 60px;
    position: relative;
    top: 35px;
    margin: 0;
    font-weight: 400;
}
.mulvTitle h5{
  font-size: 50px;
    color: #6a7c92;
    letter-spacing: 10px;
    line-height: 60px;
    opacity: .1;
    margin-bottom: 10px;
    margin: 0;
    font-weight: 400;
}
p>img{
  display: none;
}
#contentsp >>> img{
  display: none !important;
}
.catgBoxs{
  height: 500px;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;


}
.catgsItem{
  width: 40vw;
  
  
  
}
.titlebox{
  width: 100px;
  text-align: center;
  padding: 10px;
 /* background-color: chocolate; */
 box-shadow: 0 4px 12px 0 rgba(51, 51, 51, 0.3);
}
.catalogs{
  padding: 10px 0 10px 0px;
}
  .artical{
    padding: 3px  55px 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: #6a7c92;
  }

</style>
