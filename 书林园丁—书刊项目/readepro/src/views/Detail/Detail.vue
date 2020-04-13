<template>
  <div class="detailBox">
    
    <div class="bookpart" v-for="(items,i) in SaleBookDetail" :key="i">
      <div class="bookpart1box">
        <div class="leftBox">
          <div class="imgBox">
            <img :src="items.coverPic" alt="" />
          </div>
          <div class="sharewords">
            <p class="fsize">
              <span>收藏</span>| <span>分享 </span> | <span>手机阅读</span>
            </p>
          </div>
        </div>
        <div class="rightBox">
          <h3>{{ items.title }}</h3>
          <p style="margin-top: 10px;">{{ items.subTitle }}</p>
          <div class="priceBox">
            <div class="pricebox1">
              <div class="prices">
                <p>
                  <span>售价：</span>
                  <span id="pricenum">￥{{ items.vipPrice }}</span>
                </p>
              </div>
              <div class="pricedetail">
                <p>
                  <span
                    >{{ items.readNumber | numFilter }}人在读 |{{
                      items.commentNumber
                    }}
                    人 评论</span
                  >
                </p>
              </div>
            </div>
            <div class="pricebox2">
              <p>
                <span>促销：周末有一套</span>
                <span>下单{{ items.promotionPrice }}元</span>
              </p>
            </div>
          </div>
          <div class="explainBox">
            <div>
              <p>作者：{{ items.authorPenname }}</p>
            </div>
            <div>
              <p>出 版 社：{{ items.publisher }}</p>
            </div>
            <div>
              <p>出版时间：{{ items.publishDate | timeData }}</p>
            </div>
            <div>
              <p>字 数：{{ items.wordCnt | numFilter }}</p>
            </div>
            <div>
              <p>所属分类：{{ items.categorys }}</p>
            </div>
          </div>
          <div class="tipBox fsize">
            温馨提示：此类商品不支持退换货，不支持下载打印
          </div>
        </div>
      </div>
      <div class="introduce">
        <el-tag type="info" effect="dark">图书简介</el-tag>
        <div class="content1">
          <p>{{ items.descs }}</p>
        </div>
      </div>
      <div>
        <div>
          <el-tag type="info" effect="dark">累计评论({{ BookComment.barInfo.articleNum }})条</el-tag>
          <span style="font-size:10px;">{{ BookComment.barInfo.memberNum }}个书友正在讨论这本书</span>
        </div>
        <div class="commentsBox">
          <div class="commentItem" v-for="(items,i) in BookComment.articleList" :key="i">
            <div class="userheader">
              <img :src="items.userBaseInfo.custImg" alt="">
              <p>{{items.userBaseInfo.nickName}}</p>
              <p>2015-2-21</p>
            </div>
            <div class="usercomment">
              <p>{{items.content}}</p>
              
            </div>
            <div class="like">
              <i class="el-icon-help">{{items.praiseNum}}</i>
              <i class="el-icon-s-comment">{{items.commentNum}}</i>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="advpart">
      <div class="supportDevice">
        <h5>支持设备</h5>
        <div class="logoBox">
          <div class="logoitem">
            <img src="../../assets/ipad.png" alt="" />
            <p>ipad</p>
          </div>
          <div class="logoitem">
            <img src="../../assets/pc.png" alt="" />
            <p>PC在线</p>
          </div>
          <div class="logoitem">
            <img src="../../assets/cp.png" alt="" />
            <p>触屏版</p>
          </div>
          <div class="logoitem">
            <img src="../../assets/sj2.png" alt="" />
            <p>阅读器</p>
          </div>
          <div class="logoitem">
            <img src="../../assets/安卓.png" alt="" />
            <p>android</p>
          </div>
          <div class="logoitem">
            <img src="../../assets/苹果.png" alt="" />
            <p>iphone</p>
          </div>
        </div>
      </div>
      <div class="topSale">
        <h5>图书好评榜</h5>
        <div class="bookTopsale">
          <div
            class="topsaleItembox"
            v-for="(items, index) in TopSaleData"
            :key="index"
          >
            <div :class="index + 1 > 3 ? 'flexnum' : 'light'">
              {{ index + 1 }}
            </div>
            <div class="bookscover">
              <img :src="items.mediaList[0].coverPic" alt="" />
            </div>
            <div class="bookContent">
              <h5>{{ items.mediaList[0].title }}</h5>
              <p>{{ items.mediaList[0].authorPenname }}</p>
              <p>￥{{ items.mediaList[0].salePrice }}</p>
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
  name: "detail",
  data() {
    return {
      SaleBookDetails: []
    };
  },
  components: {
    
  
  },
  computed: {
    SaleBookDetail() {
      return this.$store.state.firstpageStore.SaleBookDetail;
    },
    TopSaleData() {
      return this.$store.state.firstpageStore.TopSaleData;
    },
    BookComment() {
      return this.$store.state.firstpageStore.BookComment;
    }
  },
  filters: {
    timeData: function(val) {
      var date = new Date(val);
      var y = 1900 + date.getYear();
      var m = "0" + (date.getMonth() + 1);
      var d = "0" + date.getDate();
      return (
        y +
        "-" +
        m.substring(m.length - 2, m.length) +
        "-" +
        d.substring(d.length - 2, d.length)
      );
    },
    numFilter(value) {
      let realVal = "";
      value = value / 10000;
      if (!isNaN(value) && value !== "") {
        // 截取当前数据到小数点后两位
        realVal = parseFloat(value).toFixed(2);
      } else {
        realVal = "--";
      }
      return realVal;
    }
  },
  mounted() {
    console.log(this.$route.params.saleId);

    let that = this;
    this.querySaleBookById({ saleId: that.$route.params.saleId });
    this.queryTopAppraise();
    this.queryCommentById({ saleId: that.$route.params.saleId });
    console.log(this.$store.state);
    // this.SaleBookDetails = this.$store.state.firstpageStore.SaleBookDetail;
  },
  methods: {
    ...mapActions(["querySaleBookById", "queryTopAppraise", "queryCommentById"])
  }
};
</script>

<style scoped>
.detailBox {
  width: 90vw;
  display: flex;
  /* background-color: brown; */
  margin: 0 auto;
}
.bookpart {
  margin-top: 20px;
  width: 70vw;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
}
.bookpart1box {
  width: 70vw;
  height: 370px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-around;
 
}
.advpart {
  width: 20vw;
  /* background-color: tomato; */
}
.imgBox {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
}
.imgBox img {
  width: 170px;
  height: 250px;
}
.leftBox {
  display: flex;
  flex-direction: column;

  width: 20vw;
}
.rightBox {
  height: 370px;
  width: 40vw;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.rightBox > div {
  margin-top: 35px;
}
.rightBox p {
  margin: 0;
  font-size: 12px;
}
.rightBox h3 {
  width: 100%;
  text-align: left;
  margin: 0 auto;
}
#pricenum {
  color: brown;
  font-weight: bolder;
  font-size: 20px;
}
.priceBox span {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
}
.explainBox p {
  color: #333;
}
.supportDevice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logoBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.logoitem {
  width: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logoitem img {
  width: 30px;
  height: 30px;
}
.logoitem p {
  margin: 0;
}
.bookscover img {
  width: 56px;
  height: 80px;
}
.bookTopsale {
  width: 20vw;
}

.bookContent h5 {
  margin: 0;
}
.topSale {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.topsaleItembox {
  width: 20vw;
  display: flex;
  justify-content: space-between;
}
.flexnum {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blueviolet; */
  color: white;
}
.light {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  color: white;
}
.bookContent h5 {
  display: block;
  width: 7em;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bookContent p {
  margin-top: 5px;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-emphasis: none;
  display: block;
  width: 10em;
  word-break: keep-all;
  white-space: nowrap;
}
.priceBox {
  background-color: #f5f5f5;
}
.fsize {
  font-size: 12px;
}
.introduce {
  border-bottom: 1px solid gray;
}
.content1 p {
  text-indent: 2em;
  font-size: 13px;
  color: rgb(39, 13, 13);
}
.commentsBox{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.commentItem{
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: lightgray 1px dotted;
}
.userheader{
  height: 120px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.userheader img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.userheader p{
  margin: 0;
  font-size: 10px;
}
.usercomment{
  width: calc(70vw - 210px);
  height: 120px;
  font-size: 13px;
  padding: 10px;
  
}
.like{
  width: 100px;
  height: 120px;
  display: flex;
 
  justify-content: space-around;
  align-items: center;
}
</style>
