<template>
	<div class="search">
		<nav class="nav">
			<span class="fa fa-chevron-left" @click="$router.push('/home')"></span>
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
		
		<div class="search-kw">
			
			<router-link v-for="k in kws" :to="{path:'/home/search/'+k}">{{k}}</router-link>
			
		</div>
	</div>
</template>

<script>

export default {
	
	data(){
		return {
			kw:'',
			kws:["零食", "女装", "三只松鼠", "mac 口红", "网红火锅", "洗锅神器", "拖鞋", "女鞋", "儿童玩具", "拖把", "连衣裙","四件套","卡通玩具","柿子","水果","皮衣 女", "冬季男裤", "电车挡风","车载香水","不锈钢锅","水果刀","呲水枪","吃鸡神器","华为P30","枕头", "高跟鞋", "switch", "情侣装", "男短袖", "桑蚕丝a字裙大牌", "雪纺连衣裙", "热风", "装饰画", "蓝牙耳机", "鱼竿", "折叠电瓶车", "跑步手机腰包男", "凌度行车记录仪", "ysl口红", "泡泡面膜", "电子烟", "施华洛世奇", "收纳箱", "分类垃圾桶", "生日礼品", "胶原蛋白", "花盆", "纸箱", "彩色打印", "记账软件", "论文查重", "砍价", "kfc", "电影票", "鱼缸","乐高","公主裙","电动牙刷","玻璃水"]
		}
	},
	methods:{
		onSearch(){
			if (this.kw){
				this.$router.push("/home/search/"+this.kw)
			}else{
				this.$toast.fail("请输入搜索关键词！")
			}
		}
	}
}

</script>

<style scoped>
.search{
	background-color: white;
	height: 100vh;
}
.nav{
	display: flex;
	align-items: center;
	width: 100%;
	background: #f970d8;
	justify-content: space-around;
}
.van-search{
	width: 80%;
}
.search-kw{
	padding: 2vw 2vw;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.search-kw>a{
	display: block;
	padding: 1vw 2vw;
	background-color: #D3D3D3;
	margin: 1vw 2vw;
	border-radius: 1vw;
	text-decoration: none;
	color: white;
}
</style>