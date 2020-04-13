<template>
	<div class="tabbar">
		<section class="bar-item" v-for="page in pages">
			<router-link :to="page.path">
				<span :class="page.icon"></span>
				<span>{{page.text}}</span>
			</router-link>
		</section>
	</div>
</template>

<script>
	
export default {
	props:["pages"]
}
	 
</script>

<style scoped>
.tabbar{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 64px;
	display: flex;
	background-color: white;
	box-shadow: 0 -1px 5px lightgrey;
}
.bar-item{
	width: 25%;
}
.bar-item>a{
	display:block;
	width: 100%;
	height: 64px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	color: black;
	text-decoration: none;
}
.fa{
	font-size: 6vw;
}
.router-link-exact-active{
	color: #f970d8 !important;
}
</style>
