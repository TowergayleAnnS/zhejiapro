<template>
	<div class="cate-box">
		<router-link class="cate-item" v-for="c,i in categray" :key="i" :to="{path:'/hot?mid='+c.material_id}">
			<section :style="{backgroundColor:`rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`}">{{c.name.slice(0,1)}}</section>
			<span>{{c.name}}</span>
		</router-link>
	</div>
</template>

<script>
export default {
	props:["categray"],
	computed:{

	}
}
</script>

<style scoped>
	
.cate-box{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.cate-item{
	display: block;
	width: 20%;
	height: 25vw;
	text-decoration: none;
	color: #444444;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.cate-item>section{
	width: 15vw;
	height: 15vw;
	background-color: #00BFFF;
	border-radius: 50%;
	line-height: 15vw;
	text-align: center;
	color: white;
	font-size: 6vw;
	margin-bottom: 1vw;
	font-weight: 500;
	
}
</style>
