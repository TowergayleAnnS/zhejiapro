<template>
	<div class="searchrs" >
		
		<nav class="nav">
			<span class="fa fa-chevron-left" @click="$router.push('/home/search')"></span>
			<van-search
			  v-model="kw"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			  background="#f970d8"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search>
		</nav>
		<div class="goods-box" @scroll="loadMore">
			<GoodsList :goods="goods"></GoodsList>
			<p style="text-align: center;">努力加载中...</p>
		</div>
		
		<section class="retry" v-if="goods.length==0" @click="onSearch">
			
		</section>
	</div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue"

export default {
	data(){
		return {
			kw:"",
			page:1,
			goods:[],
			isLoading:false
		}
	},
	activated(){
		
		this.kw = this.$route.params.kw
		this.$toast.loading({
		  message: '搜索中...',
		  forbidClick: true
		});
		this.http.get(`http://114.116.83.180:3000/search?kw=${this.kw}&page=${this.page}`)
		.then(resp=>{
			try{
				
				this.goods = resp.data.result_list.map_data
				this.$toast.clear()
			}catch(err){
				console.log(err)
				this.goods=[]
				this.$toast.fail("搜索失败，请轻触页面重试！")
			}
		})
		
	},
	methods:{
		onSearch(){
			this.$toast.loading({
			  message: '搜索中...',
			  forbidClick: true
			});
			this.http.get(`http://114.116.83.180:3000/search?kw=${this.kw}&page=${this.page}`)
			.then(resp=>{
				try{
					this.$toast.clear()
					this.goods = resp.data.result_list.map_data
				}catch(err){
					console.log(err)
					this.goods=[]
					this.$toast.fail("搜索失败，请轻触页面重试！")
				}
				
			})
		},
		loadMore(e){
			if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 20){
				if (this.isLoading){
					
					return
				}
				this.isLoading = true
				this.page += 1
				this.http.get(`http://114.116.83.180:3000/search?kw=${this.kw}&page=${this.page}`)
				.then(resp=>{

					this.goods = this.goods.concat(resp.data.result_list.map_data)
					this.isLoading = false
				})
			}
			
		}
	},
	components:{
		GoodsList
	}
}
	
</script>

<style scoped>
	
.searchrs{
	background-color: white;
	height: 100vh;
}
.nav{
	display: flex;
	align-items: center;
	width: 100%;
	height: 55px;
	background: #f970d8;
	justify-content: space-around;
	position: ;
}
.van-search{
	width: 80%;
}
.retry{
	width: 100%;
	height: calc(100vh - 100px);
}
.goods-box{
	height: calc(100vh - 4vh - 28px);
	overflow-y: scroll;
}
</style>
