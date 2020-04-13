<template>
	<div class="hot">
		<div class="hot-box" @scroll="loadMore">
			<div class="nav-box">
				<nav class="nav">
					<h3><span class="fa fa-fire"></span> 热销榜单 <span class="fa fa-fire"></span></h3>
				</nav>
				<!-- <section class="categray">
					<div v-for="c in categray" @click="getGoods($event, c.material_id)">{{c.name}}</div>
				</section> -->
				<van-tabs @click="getGoods">
				  <van-tab v-for="c in categray" :title="c.name" :name="c.material_id">
				  </van-tab>
				</van-tabs>
			</div>
			<div class="goods-box">
				<GoodsList :goods="goods"></GoodsList>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue"
import {mapActions} from "vuex"

export default {
	data(){
		return {
			material_id:3756,
			page:1,
			isLoading:false
		}
	},
	computed:{
		goods(){
			return this.$store.state.hot.goods
		},
		categray(){
			return this.$store.state.hot.categray
		}
	},
	activated(){
		this.queryhotCategray()
		this.material_id = this.$route.query.mid?this.$route.query.mid:3756
		console.log(this.material_id)
		this.queryHotGoods({material_id:this.material_id, page:this.page})
	},
	methods:{
		getGoods(name, title){
			// console.log(name, title)
			// console.log(123)
			// 记录当前所选的分类
			this.$toast.loading({
			  message: '加载中...',
			  forbidClick: true
			})
			this.material_id = name
			this.page = 1
			this.queryHotGoods({material_id:this.material_id, page:this.page})
			.then(()=>{
				this.$toast.clear()
			})
		},
		loadMore(e){
			if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 20){
				if (this.isLoading){
					return
				}
				this.isLoading = true
				this.page += 1
				this.queryHotGoods({material_id:this.material_id, page:this.page})
				.then(()=>{
					this.isLoading = false
				})
			}
		},
		...mapActions(["queryhotCategray", "queryHotGoods"])
		
	},
	components:{
		GoodsList
	}
}

</script>
<style scoped>
	
.hot{
	height: 100vh;
}
.hot-box{
	height: calc(100vh - 64px);
	overflow-y: scroll;
}
.nav-box{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 100;
}
.nav{
	width: 100%;
	text-align: center;
	height: 50px;
	line-height: 50px;
	background-color: #f970d8;
	color: white;
}
.categray{
	height: 40px;
	display: flex;
	width: 100%;
	overflow-x: scroll;
	align-items: center;
	background-color: white;
}
.categray>div{
	/* width: 20vw; */
	flex-shrink: 0;
	margin:0 3vw ;
}
.goods-box{
	margin-top: 95px;
}

</style>