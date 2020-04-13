<template>
  <div class="subscribes">
    <div >
      <div class="bgimgs1">
        <div class="ptext">
          <span>
            时尚杂志
          </span>
        </div>
        <!-- <img src="../../assets/reading3.jpg" alt=""> -->
      </div>
      <section class="section  section-light">
        <h2>《Beauty Salon》</h2>
        <div class="randomBook">
          <div class="imgleftbx">
            <img src="../../assets/fm4.png" alt="" />
          </div>
          <div class="contenright">
            <h4>Beauty Salon</h4>
            <p>定价：17元/本全年订购 116 元/年</p>
            <p>国内邮发代号：54-193</p>
            <p>国外邮发代号：M85513</p>
            <p>
              《RITE》专门为广大男性量身打造的一本优秀期刊。2014年、2015年、2017年、2018年入选国家新闻出版广电总局评选的“全国优秀时代期刊”。。
            </p>
          </div>
        </div>
      </section>
      <div class="bgimgs2">
        <div class="ptext">
          <span>
            音乐盛宴
          </span>
        </div>
        <!-- <img src="../../assets/reading3.jpg" alt=""> -->
      </div>
      <section class="section  section-dark">
        <h2>《爵士音乐节》</h2>
        <div class="randomBook">
          <div class="imgleftbx">
            <img src="../../assets/fm3.png" alt="" />
          </div>
          <div class="contenright">
            <h4>《爵士音乐节》</h4>
            <p>定价：24元/本全年订购 256 元/年</p>
            <p>国内邮发代号：04-1793</p>
            <p>国外邮发代号：M855443</p>
            <p>
              《爵士音乐节》创刊于1981年，迄今已有38年历史。月发行量位居全国前列，具有很高知名度和美誉度，被誉为“音乐界界的心灵读本”。发掘音乐中的快乐。
            </p>
          </div>
        </div>
      </section>
      <div class="bgimgs3">
        <div class="ptext">
          <span>
            畅销小说
          </span>
        </div>
        <!-- <img src="../../assets/reading3.jpg" alt=""> -->
      </div>
      <section class="section  section-light">
        <h2>《明日之后》</h2>
        <div class="randomBook">
          <div class="imgleftbx">
            <img src="../../assets/fm2.png" alt="" />
          </div>
          <div class="contenright">
            <h4>《明日之后》</h4>
            <p>定价：7元/本</p>
            <p>国内邮发代号：754-19543</p>
            <p>国外邮发代号：M535513</p>
            <p>
              摇滚青年永远的圣经！只要内心依然滚烫，你就一直在路上！ ◆鲍勃·迪伦、披头士乐队、滚石乐队、涅槃乐队、大门乐队、大卫·鲍伊、帕蒂·史密斯、卢·里德、乔布斯、约翰尼·德普、痛仰乐队等无数文化偶像的偶像 ◆鲍勃·迪伦：《明日之后》彻底改变了我的人生 披头士乐队的名字就来源于《明日之后》  痛仰乐队《再见杰克》致敬本书作者杰克·凯鲁亚克 约翰尼·德普曾花一万美元收藏凯鲁亚克的旧雨衣
            </p>
          </div>
        </div>
      </section>
      <div class="bgimgs4">
        <div class="ptext">
          <span>
            婚纱影集
          </span>
        </div>
        <!-- <img src="../../assets/reading3.jpg" alt=""> -->
      </div>
      <section class="section  section-dark">
        <h2>《时尚新娘》</h2>
        <div class="randomBook">
          <div class="imgleftbx">
            <img src="../../assets/merry.png" alt="" />
          </div>
          <div class="contenright">
            <h4>《时尚新娘》</h4>
            <p>定价：40元/本全年订购 500 元/年</p>
            <p>国内邮发代号：40-793</p>
            <p>国外邮发代号：S85513</p>
            <p>
              《时尚新娘》缔造全球婚尚潮流，权威发布企业形象推广和行业动态。《时尚新娘》是新娘最华美的幸福时尚计划书，以浪漫轻松的方式，鼓励并帮助中国女性完成新婚的美丽形象塑造与魅力生活打造。她是一本最高级的婚尚生活杂志，她是一本最专业的婚礼宝典和新婚教科书，她是开启中国女性美好新生活的完美读本，她更是你和最亲密的朋友分享幸福感受的社交平台
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/footer";
export default {
  name: "subcribe",
  components: {
    Footer
  },
  data() {
    return {
      subData: {

        data1:
        {
          cover: "../../assets/fm3.png",
          name: "Beauty SaloN",
          price: 30,
          yearCost: 216,
          Cn: "54-44",
          sea: "M5565",
          intruduce:
            "《Beauty SaloN》创刊于1981年，迄今已有38年历史。月发行量位居全国前列，具有很高知名度和美誉度，被誉为“时尚界的心灵读本”。发掘人性中的真善美，体现人文关怀。"
        },
        data2:
        {
          cover: "../../assets/fm4.png",
          name: "RITE",
          price: 30,
          yearCost: 216,
          Cn: "54-44",
          sea: "M5565",
          intruduce:
            "《RITE》专门为广大男性量身打造的一本优秀期刊。2014年、2015年、2017年、2018年入选国家新闻出版广电总局评选的“全国优秀时代期刊”。。"
        },
        data3:
        {
          cover: "../../assets/merry.png",
          name: "时尚新娘",
          price: 30,
          yearCost: 216,
          Cn: "54-44",
          sea: "M5565",
          intruduce:
            "《时尚新娘》缔造全球婚尚潮流，权威发布企业形象推广和行业动态。《时尚新娘》是新娘最华美的幸福时尚计划书，以浪漫轻松的方式，鼓励并帮助中国女性完成新婚的美丽形象塑造与魅力生活打造。她是一本最高级的婚尚生活杂志，她是一本最专业的婚礼宝典和新婚教科书，她是开启中国女性美好新生活的完美读本，她更是你和最亲密的朋友分享幸福感受的社交平台"
        },
        data4:
        {
          cover: "../../assets/ydmt.png",
          name: "Beauty SaloN",
          price: 30,
          yearCost: 216,
          Cn: "54-44",
          sea: "M5565",
          intruduce:
            "《Beauty SaloN》为追求完美的女性用户,打造美好价值观、美好新闻、美好时尚的精品阅读平台,营造为美物买单,为好文打赏,一切追求完美的女性社群文化,打造..."
        }
      }
    };
  },
  mounted (){
    console.log(this.subData)
  }
};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  font-size: 16px;
  line-height: 1.8em;
  color: #666;
}



.bgimgs1 {
  background-image: url("../../assets/reading3.jpg");
  min-height: 600px;
}
.bgimgs2 {
  background-image: url("../../assets/reading1.jpg");
  min-height: 600px;
}
.bgimgs3 {
  background-image: url("../../assets/bg5.jpg");
  min-height: 600px;
}
.bgimgs4 {
  background-image: url("../../assets/bg4.jpg");
  min-height: 600px;
}
.bgimgs4,
.bgimgs3,
.bgimgs1,
.bgimgs2 {
  position: relative;
  opacity: 0.7;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.section {
  text-align: center;
  padding: 50px 80px;
  
}
.section-light {
  background-color: #424c50;
  color: #fff;;
}
.section-dark {
  background-color: #282e34;
  color: #ddd;
}
.ptext {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}
.ptext > span {
  background-color: #111;
  color: #fff;
  padding: 20px;
}
.randomBook {
  /* height: 200px; */
  width: 80%;
  margin: 0 auto;
  /* background-color: brown; */
  box-shadow: 0 3px 9px 0 rgba(51,51,51,.4);
  display: flex;
}
.imgleftbx {
  padding: 20px;
}
.imgleftbx > img {
  width: 140px;
  height: 200px;
}
.contenright{
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}
.contenright p{
  margin-top: 5px;
  font-size: 12px;
}
@media (max-width: 500px) {
  .bgimgs3,
  .bgimgs1,
  .bgimgs2 {
    background-attachment: scroll;
  }
}
</style>
