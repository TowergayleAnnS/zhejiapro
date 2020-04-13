<template>
  <div class="aboutpage">
    <div class="advsss">
      <div class="aboutAbv">
        <span>
          关于书林园丁
        </span>
      </div>
    </div>
    <div class="contentss">
      <p>《书林园丁》杂志创办于1981年。创刊30余年，《书林园丁》始终坚持“博采中外、荟萃精华、启迪思想、开阔眼界”的办刊宗旨和“高雅、清新、隽永”的办刊风格，发掘人性中的真善美，体现人文关怀，在海内外亿万书林园丁中产生了深远的影响，具有很高知名度和美誉度，被誉为“中国人的心灵读本”、“中国期刊第一品牌”。</p>
      <p>《书林园丁》杂志主管主办单位——书林园丁出版传媒股份有限公司，于2015年12月10日上市，实现了甘肃省文化企业上市零的突破，成为西北地区首家在国内主板市场上市的出版传媒类企业，也是A股中唯一拥有出版行业品牌的概念股。</p>
      <p>
         北京书林园丁天元文化传播有限公司（以下简称书林园丁天元公司）是书林园丁出版传媒股份有限公司的全资子公司，于2014年10月在北京注册成立，其前身是书林园丁杂志社新媒体部。
        书林园丁天元公司作为书林园丁传媒在互联网时代转型的龙头企业，正着力建设书林园丁新媒体文化品牌。书林园丁天元公司是以内容产品的整体创意运营为核心竞争力的创新型企业，集内容输出、创意策划、媒体传播、版权开发于一体。业务丰富，依托书林园丁品牌影响力，通过创意运营，已形成新媒体内容平台、全网电商平台、线上线下整合营销服务体系并行发展的业务布局。
      </p>
      <p>
        书林园丁天元公司采取多元开放的合作态度，与多个行业进行品牌跨界合作并实现共赢。充分利用北京的人才、文化、信息、创意产业集群等资源优势，发挥《书林园丁》的核心价值与文化品牌优势与资源，加快《书林园丁》的战略转型升级。
      </p>
    </div>
    <div class="contenttitle">
      <h2>联系我们</h2>
    </div>
    <div class="footer">
      <div class="footer-left">
        <h5>书林园丁总部</h5>
       <p>电话：010-647751208</p>
        <p>传真：010-8477080</p>
        <p>文 字 投 稿：shudingwang@shudingwang.cn</p>
        <p>美 术 投 稿：shudingwang.ms@shudingwang.cn</p>
        <p>通 讯 地 址：广州市中央广场邮局《书林园丁》信箱777530</p>
        <p>杂志社地址：广州市城关区园丁大道568号</p>
      </div>
      <div class="footer-right">
        <h5>园丁·新媒体：北京园丁天元文化传播有限公司</h5>
        <p>电话：010-647751208</p>
        <p>传真：010-8477080</p>
        <p>微信公众号：shudingwangweixin</p>
        <p>地址：广州市城关区园丁大道568号</p>
        <p>邮编：100102</p>
        <p>邮箱：new_media@shudingwang.cn</p>
        <p>电话：010-647751208</p>
        <p>传真：010-8477080</p>
        <p>文 字 投 稿：shudingwang@shudingwang.cn</p>
        <p>美 术 投 稿：shudingwang.ms@shudingwang.cn</p>
        <p>通 讯 地 址：广州市中央广场邮局《书林园丁》信箱730030</p>
        <p>杂志社地址：广州市城关区园丁大道568号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>

.advsss {
  min-height: 200px;
  background-image: url("../../assets/about.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.aboutAbv {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}
.contentss{
  height: 490px;
    
    box-sizing: border-box;
    padding: 55px 100px;
    
    background: #fff;
    -webkit-box-shadow: 0 8px 20px 0 hsla(0,0%,60%,.2);
    box-shadow: 0 8px 20px 0 hsla(0,0%,60%,.2);
    border-radius: 3px;
    position: relative;
    z-index: 1;
}
.contentss>p{
  font-size: 14px;
    color: #6a7c92;
    letter-spacing: 0;
    text-align: justify;
    line-height: 24px;
    margin-bottom: 25px;
}
.contenttitle{
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer{
  padding: 20px 0px;
  width: 100vw;
  
  background-color: yellowgreen;
  display: flex;
  justify-content: space-around;
}
.footer-left{
  width: 40vw;
}
.footer-right{
  width: 40vw;
}
.footer p{
  margin-top: 10px;
  font-size: 10px;
}
</style>
