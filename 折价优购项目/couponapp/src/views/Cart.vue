<template>
	<div>
		
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
			user:{
				username:"",
				avatar:""
			}
		}
	},
	activated(){
		this.http.get("http://114.116.83.180:3000/goods/cart")
		.then(resp=>{
			this.goods = resp.data.goods
		})
	},
	components:{
		GoodsList
	}
}

</script>

<style>
.box{
	height: calc(100vh - 64px);
	overflow-y: scroll;
}
</style>
