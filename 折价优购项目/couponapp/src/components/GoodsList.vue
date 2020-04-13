<template>
	<div class="goods-list">

		<div class="goods-item" v-for="(g,i) in goods" :key="i">
			<div v-if="del" class="deleCelloc" @click="delCelloc($event,g.item_id?g.item_id:g.num_iid)">x</div>
			<router-link :to="g|path">
			<img :src="g.pict_url" alt="" v-lazy="g.pict_url">
			<p class="goods-title">{{g.title}}</p>
			<p class="goods-coupon">
				<span class="goods-coupon-d"  v-if="g.coupon_amount">
					<span class="coupon-icon">券</span>
					<span class="coupon-amount">￥{{g.coupon_amount}}</span>
				</span>
				<span class="goods-volume">销量{{g.volume}}件</span>
			</p>
			<p class="goods-price">
				<span class="goods-price-d">券后<span>￥{{g.coupon_amount?(g.zk_final_price-g.coupon_amount).toFixed(2):g.zk_final_price}}</span></span>
				<span class="buy">立即购买</span>
			</p>
			</router-link>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			delCelloc(e,gid){
				this.http.get(`http://114.116.83.180:3000/goods/collecdel?goods_id=${gid}`)
				.then(resp=>{
					this.$emit("reload")
					this.$toast.success(resp.data.msg)
				})
			}
		},
		props: ["goods", "del"],
		filters: {
			path(g) {
				let url = ''
				// 判断商品是否有优惠券连接
				if (g.coupon_share_url) {
					url = g.coupon_share_url
				} else {
					url = g.url
				}
				let gid = g.item_id?g.item_id:g.num_iid

				url = url.split('/')[url.split('/').length - 1].replace("?", "|")
				// console.log(url)
				return `/goods/${gid}/${g.coupon_amount?g.coupon_amount:0}/${url}`

			}
		}
	}
</script>

<style>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 2vw;
		margin: 0 auto;
		/* justify-content: space-around; */
		background-color: #f2f1f1;
		text-align: center;

	}

	.goods-list>div:nth-of-type(2n+1) {
		margin-right: 2vw;
	}

	.goods-item {
		width: 48%;
		position: relative;
	}

	.goods-item>a {
		text-decoration: none;
		color: black;
		display: block;
		width: 100%;
		margin: 2vw 0;
		background-color: white;
		border-radius: 2vw;

	}

	.goods-item>a>img {
		width: 98%;
		height: 46vw;
		border-radius: 2vw;
	}

	.goods-item>p {
		margin: 2vw;
	}

	.goods-title {
		text-overflow: ellipsis;
		overflow: hidden;
		/* white-space: nowrap; */
		width: 100%;
		height: 12vw;
		margin: 2vw 0;
	}

	.goods-coupon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.coupon-icon {
		display: inline-block;
		width: 8vw;
		height: 6vw;
		background-color: #f970d8;
		border-top-left-radius: 1vw;
		border-bottom-left-radius: 1vw;
		text-align: center;
		color: white;
		font-size: 4vw;

	}

	.coupon-amount {
		display: inline-block;
		color: #F970D8;
		border: 1px solid #F970D8;
		border-top-right-radius: 1vw;
		border-bottom-right-radius: 1vw;
		width: 12vw;
		height: 6vw;
		font-size: 4vw;
		position: relative;
		top: 0.3vw;
	}

	.goods-volume {
		width: 20vw;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 2vw;
		color: dimgray;
	}

	.goods-price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.goods-price-d {
		font-size: 2vw;
	}

	.goods-price-d>span {
		font-size: 4vw;
	}

	.buy {
		width: 20vw;
		height: 6vw;
		background-color: #F970D8;
		text-align: center;
		color: white;
		border-radius: 2vw;
		font-size: 3.5vw;
		line-height: 6vw;
	}
	.deleCelloc{
		position: absolute;
		right: 0;
		color: white;
		top: 1vw;
		width: 7vw;
		height: 7vw;
		text-align: center;
		line-height: 7vw;
		background: lightgrey;
		border-radius: 50%;
	}
</style>
