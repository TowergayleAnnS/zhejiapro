<template>
	<div class="history">
		<div class="nav">
			<h3><span class="fa fa-history"></span> 最近浏览 <span class="fa fa-history"></span></h3>
		</div>
		<div class="box">
			
			<GoodsList :goods="goods"></GoodsList>
			
		</div>
		
		<slot></slot>
	</div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue"
export default {
	data(){
		return {
			goods:[],
			
		}
	},
	activated(){
		let hs = localStorage.getItem("history")
		if (hs != null){
			let idsArr = JSON.parse(hs).history
			console.log(idsArr)
			let ids = JSON.parse(hs).history.map(h=>h.gid).join(',')
			this.http.get(`http://114.116.83.180:3000/goods/history?ids=${ids}`)
			.then(resp=>{
				
				this.goods = resp.data.goods.map((g,i)=>{
					g["coupon_share_url"] = idsArr[i].share_url
					g["coupon_amount"] = idsArr[i].coupon_amount
					
					return g
				})
				
				
			})
		}
		
	},
	components:{
		GoodsList
	}
}
</script>

<style scoped>
.history{
	width: 100%;
	background-color: white;
	height: 100vh;
}
.box{
	height: calc(100vh - 64px - 50px);
	overflow-y: scroll;
	background-color: #f2f1f1;
}
.nav{
	width: 100%;
	height: 50px;
	/* padding: 2vw 0; */
	color: white;
	background-color: #f970d8;
	line-height: 50px;
	
}
.nav>h3{
	text-align: center;
	margin: 0;
}
.login-box{
	width: 70%;
	margin: 0 auto;
	text-align: center;
	background-color: #008000;
	height: 6vh;
	line-height: 6vh;
	margin-top: 10vh;
	border-radius: 2vw;
}
.login-box>a{
	display: block;
	text-align: center;
	height: 6vh;
	line-height: 6vh;
	text-decoration: none;
	color: white;
}
</style>