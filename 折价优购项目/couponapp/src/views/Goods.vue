<template>
	<div class="goods">
		
		<div class="nav">
			
			<span class="fa fa-chevron-left" @click="$router.back()"></span>
			<p>折价优购-领券购买</p>
			<span class="fa fa-ellipsis-h"></span>
		</div>
		
		<div class="goods-info">
			<img :src="goods.pict_url" alt="" v-lazy="goods.pict_url">
			<p>券后价￥<strong>{{(goods.zk_final_price-coupon_amount).toFixed(2)}}</strong> <del>现价:{{goods.zk_final_price}}</del></p>
		</div>
		<div class="shopping">
			<h5>{{goods.nick}} <small>{{goods.provcity}}</small></h5>
		</div>
		<h3 class="goods-title">{{goods.title}}</h3>

		<textarea class="tkl">{{tkl}}</textarea>
		
		<section class="coupon" :data-clipboard-text="taosign" @click="copy" id="copy_text">
			<span class="coupon-num">{{coupon_amount}}</span>
			<span class="coupon-title" ><strong style="color: yellow;">❥</strong> 先领券 再下单</span>
		</section>
		<div class="goods-pics">
			<img v-for="i in goods.small_images.string" :src="i" alt="" v-lazy="i">
		</div>
		
		
		<div class="goods-tools">
			<section class="tools-1">
				<div class="star" @click="collecClick">
					<template v-if="!isStar">
						<span class="fa fa-star-o"></span>
						<strong>收藏</strong>
					</template>
					<template v-if="isStar">
						<span class="fa fa-star" style="color: red;"></span>
						<strong style="color: red;">已收藏</strong>
					</template>
				</div>
			</section>
			<section class="tools-2">
				<a :href="share_url">
					<div class="quan">直接领券购买</div>
				</a>
				<div class="kl" ref="copy" :data-clipboard-text="taosign" @click="copy" id="copy_text">复制淘口令</div>
			</section>
		</div>
		
	</div>
</template>

<script>
import Clipboard from 'clipboard'	

export default {
	data(){
		return {
			share_url:"",
			tkl:"",
			goods:{small_images:{string:[]}},
			coupon_amount:"",
			isStar:false
		}
	},
	computed:{
		taosign(){
			return `复制这段话,打开手机${this.tkl}淘宝,即可领取专属优惠券!`
		}
	},
	activated(){
		this.isStar=false
		this.share_url=""
		this.tkl="",
		this.goods={small_images:{string:[]}}
		this.coupon_amount=""
		
		this.$toast.loading({
		  message: '加载中...',
		  forbidClick: true
		})
		
		let url = this.$route.params.share_url.replace("|", "?")
		
		if (url.startsWith("t?")){
			this.share_url = "//s.click.taobao.com/" + url
		}else{
			this.share_url = "//uland.taobao.com/coupon/" + url
		}


		this.coupon_amount = this.$route.params.coupon_amount
		// 转换淘口令
		this.http.get(`http://114.116.83.180:3000/sign?url=${this.share_url}`).then(resp=>{
			
			this.tkl = resp.data.data.model
		})
		
		if (localStorage.getItem("history") != null){
			console.log(1)
			let history = JSON.parse(localStorage.getItem("history"))
			history.history = history.history.length>20?history.history.slice(0,19):history.history
			history.history.unshift({
				gid:this.$route.params.gid, 
				share_url: this.share_url, 
				coupon_amount: this.coupon_amount
			})
			localStorage.setItem("history", JSON.stringify(history))
		}else{
			console.log(2)
			localStorage.setItem("history", JSON.stringify({history:[
				{"gid":this.$route.params.gid, share_url: this.share_url, coupon_amount: this.coupon_amount}
			]}))
		}
		
		// 请求商品详情
		this.http.get(`http://114.116.83.180:3000/goods/?gid=${this.$route.params.gid}`)
		.then(resp=>{
			this.goods = resp.data.results.n_tbk_item[0]
			// console.log(this.goods)
		})
		
		
		this.http.get(`http://114.116.83.180:3000/goods/iscollec/?goods_id=${this.$route.params.gid}`)
		.then(resp=>{
			console.log(resp.data)
			this.isStar = resp.data.code == 200?true:false
			this.$toast.clear()
		})
		
	},
	methods:{
		collecClick(){
			
			console.log(this.goods)
			
			if (this.isStar){
				// 取消收藏
				// 发送收藏请求
				this.http.get(`http://114.116.83.180:3000/goods/collecdel?goods_id=${this.$route.params.gid}`)
				.then(resp=>{
					this.isStar = resp.data.code ==200?false:this.isStar
					this.$toast.success(resp.data.msg)
				})
			}else{
				// 发送收藏请求
				this.http.post("http://114.116.83.180:3000/goods/collect", this.urlcode.encode({
					goods_id: this.goods.num_iid,
					goods_share: this.share_url,
					goods_coupon: this.coupon_amount
				}))
				.then(resp=>{
					this.isStar = resp.data.code==200?true:this.isStar
					this.$toast.success(resp.data.msg)
				})
			}
		},
		copy(){
			// var _this = this;
			var clipboard = new Clipboard('#copy_text');
			
			clipboard.on('success', e => {
				this.$toast.success("淘口令已复制，赶紧打开手机淘宝抢券吧！")
			// 释放内存
			clipboard.destroy()
			})
			clipboard.on('error', e => {
				// 不支持复制
				this.$toast.fail("该浏览器不支持自动复制！")
				// 释放内存
				clipboard.destroy()
			})
		}
	}
}
</script>

<style scoped>

.goods{
	height: 100vh;
	background-color: white;
}	
.nav{
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	padding: 0 2vw;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	color: white;
	font-weight: bold;
	background-color: #f970d8;
}
.goods-info{
	
	width: 94%;
	margin: 0 auto;
	margin-top: 55px;
}
.goods-info img{
	width: 100%;
}
.goods-info>p{
	color: #6f6f6e ;
	font-size: 4vw;
}
.goods-info>p>strong{
	font-size: 6vw;
	color: #f970d8;
}
.goods-info>p>del{
	color: #6f6f6e ;
	font-size: 4vw;
}
.goods-pics{
	width: 96vw;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 55px;
}
.goods-pics>img{
	width: 96vw;
	height: 96vw;
}

.goods-tools{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50px;
	background-color: white;
	display: flex;
}
.goods-tools>section{
	display: flex;
	justify-content: space-between;
}
.tools-1{
	width: 30%;
}

.goods-title{
	width: 94%;
	margin: 0 auto;
	height: 16vw;
}
.tools-1>div,.tools-2>a, .tools-2>div{
	color: white;
	display: block;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.tools-1>div{
	width: 100%;
}
.tools-2{
	width: 70%;
}
.tools-2>a{
	background-color: black;
}
.star{
	background-color: orange;
}
.cart{
	background-color: #F970D8;
}
.quan{
	background-color: black;
}
.kl{
	background-color: red;
}
.coupon{
	width: 94%;
	margin: 2vw auto;
	display: flex;
	justify-content: space-between;
	height: 15vw;
	background-color: orangered;
	border-radius: 3vw;
	/* margin: 2vw; */
}
.coupon-title, .coupon-num{
	display: block;
	width: 70%;
	text-align: center;
	height: 15vw;
	line-height: 15vw;
	font-size: 6vw;
	color: white;
}
.coupon-num{
	width: 15vw;
	margin-left: 10vw;
	/* box-shadow:0 0 50px yellow; */
	border-radius: 50%;
	/* background-image: linear-gradient(to bottom,#ff4500, #ff4500); */
	/* background-color: rgba(0,0,0,0); */
	font-size: 8vw;
	
}
.coupon-num:before{
	content: "￥";
	font-size: 4vw;
}
.coupon-num::after{
	content: "RBM";
	font-size: 3vw;
}
.tkl{
	display: block;
	max-width: 94%;
	min-width: 94%;
	text-align: center;
	margin: 0 auto;
	border: none;
	background-color: white;
}
.shopping{
	width: 94%;
	margin: 2vw auto;
}
.shopping>h5{
	color: red;
}
.shopping>h5>small{
	color: lightgray;
}
</style>
