<template>
  <div id="app">
    <transition :name="aniType">
		<keep-alive>
			<router-view>
				<Tabbar :pages="pages"></Tabbar>
			</router-view>
		</keep-alive>
	</transition>
  </div>
</template>

<script>
	
import Tabbar from "@/components/Tabbar.vue"

export default {
	data(){
		return {
			pages:[
				{path:"/home", icon:"fa fa-home", text:"首页"},
				{path:"/hot", icon:"fa fa-fire", text:"热销"},
				{path:"/cart", icon:"fa fa-star", text:"收藏"},
				{path:"/user", icon:"fa fa-history", text:"最近浏览"}
			],
			aniType:""
		}
	},
	components:{
		Tabbar
	},
	watch:{
		$route(to, from){
			let toLevel = to.path.split("/").length
			let fromLevel = from.path.split("/").length
			
			if (fromLevel>toLevel){
				this.aniType = "pageout"
			}else if(fromLevel < toLevel){
				this.aniType = "pagein"
			}else{
				this.aniType = ""
			}
		}
	}
}
	
</script>

<style>
*{
	box-sizing: border-box;
}
html,body,h1,h2,h3,h4,h5,h6,p,ul,li{
	margin: 0;
	padding: 0;
}
/* 页面入场动画 */
.pagein-enter{
	left: 100%;
	z-index: 1000;
}
.pagein-enter-active, .pagein-leave-active{
	position: absolute;
	transition: all 0.3s;
	top: 0;
	width: 100%;
	overflow: hidden;
}
.pagein-enter-to, .pagein-leave{
	left: 0;
}
.pagein-enter-active{
	z-index: 1000;
}
.pagein-leave-to{
	left: -20%;
}

/* 离场动画 */
.pageout-enter{
	left: -20%;
}
.pageout-enter-active, .pageout-leave-active{
	position: absolute;
	transition: all 0.3s;
	top: 0;
	width: 100%;
}
.pageout-leave-active{
	z-index: 1000;
}
.pageout-enter-to, .pageout-leave{
	left: 0;
}
.pageout-leave-to{
	left: 100%;
}
</style>
