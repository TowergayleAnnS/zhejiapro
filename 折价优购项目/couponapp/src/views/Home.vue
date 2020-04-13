<template>
	<div class="home">
		<div class="home-box" @scroll="loadMore">
			
			<div class="nav">
				<span class="fa fa-camera"></span>
				<router-link to="/home/search" class="search-bar"><span class="fa fa-search"></span> 请输入搜索名称</router-link>
				<span class="fa fa-info-circle"></span>
			</div>
			<img class="baner" src="/baner.png" alt="">
			
			<Categray :categray="categray"></Categray>
			
			<GoodsList :goods="goods"></GoodsList>
			<p style="text-align: center;">努力加载中...</p>
			
		</div>
		<slot></slot>
	</div>
</template>

<script>

import Categray from "@/components/Categray.vue"
import GoodsList from "@/components/GoodsList.vue"

import {mapState, mapActions} from "vuex" 

export default {
	data(){
		return {
			page:1,
			isLoading:false
		}
	},
	computed:{
		goods(){
			return this.$store.state.home.goods
		},
		categray(){
			return this.$store.state.home.categray
		}
	},
	mounted(){
		this.queryHome()
		this.queryCategray()
	},
	methods:{
		loadMore(e){
			if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 20){
				if (this.isLoading){
					
					return
				}
				this.isLoading = true
				this.page += 1
				this.homeLoadMore(this.page)
				.then(()=>{
					this.isLoading = false
				})
			}
			
		},
		...mapActions(["queryHome", "queryCategray", "homeLoadMore"])
	},
	components:{
		Categray,
		GoodsList
	}
}

</script>

<style scoped>
.home{
	height: 100vh;
}
.home-box{
	height: calc(100vh - 64px);
	width: 100%;
	overflow-y: scroll;
}
.nav{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	width: 100%;
	height: 50px;
	background-image: linear-gradient(to right, #f970d8, #f970d8);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1vw;
}
.fa{
	font-size: 6vw;
	color: white;
}
.search-bar{
	display: block;
	width: 76%;
	background-color: #f8f7fb;
	height: 36px;
	border-radius: 1vw;
	text-align: center;
	color: #D3D3D3;
	text-decoration: none;
	line-height: 36px;
}
.search-bar .fa{
	color: #D3D3D3;
}
.baner{
	width: 100%;
	margin-top: 50px;
}
</style>