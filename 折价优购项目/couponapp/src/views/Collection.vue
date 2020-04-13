<template>
	<div class="collection">
		<div class="nav">
			<h3><span class="fa fa-star"></span> 我的收藏 <span class="fa fa-star"></span></h3>
		</div>
		<div class="box" v-if="user.username.length>0">
			
			<GoodsList :goods="goods" :del="true" @reload="reload"></GoodsList>
			
		</div>
		<div class="login-box" v-else>
			<router-link to="/user/login">未登录，点击前往登录</router-link>
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
			user:{
				username:"",
				avatar:""
			}
		}
	},
	activated(){
		this.user = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):this.user
		
		this.http.get("http://114.116.83.180:3000/goods/colleclist")
		.then(resp=>{
			this.goods = resp.data.goods
			console.log(this.goods)
		})
	},
	methods:{
		reload(){
			console.log(123123)
			this.http.get("http://114.116.83.180:3000/goods/colleclist")
			.then(resp=>{
				this.goods = resp.data.goods
				console.log(this.goods)
			})
		}
	},
	components:{
		GoodsList
	}
}

</script>

<style scoped>
.collection{
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
