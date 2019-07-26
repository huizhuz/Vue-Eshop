<template>
	<div>
		<div class="item-box" :style="{ backgroundImage: fullImageUrl(merchItem.pics[0])}">
			<div v-if="merchItem.stock == 0" class="sold-out">Sold out</div>
			<div v-if="merchItem.stock == 0"></div>
			<router-link class="item-info router-link-style" :to="getRouterLink(merchItem)">
				<h3>{{merchItem.brand}} -- {{merchItem.name}}</h3>
				<p>${{merchItem.price}}</p>
			</router-link>
		</div>

		<div class="item-box-mobile" @click="goToDetail">
			<img :src="getImageUrl(merchItem.pics[0])" />
			<div class="item-mobile-info">
				<h4>{{merchItem.brand}} -- {{merchItem.name}}</h4>
				<div class="detail">
					<p>${{merchItem.price}}</p>
					<p>{{soldOut}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["merchItem"],
		methods: {
			getImageUrl(imageName) {
				return "../../src/images/" + imageName;
			},
			fullImageUrl(imageName) {
				return "url('../../src/images/" + imageName + "')";
			},
			getRouterLink(merchItem) {
				return (
					"/list/" +
					this.merchItem.category +
					"/detail/" +
					this.merchItem.name
				);
			},
			goToDetail() {
				let link = this.getRouterLink(this.merchItem);
				this.$router.push(link);
			}
		},
		computed: {
			soldOut() {
				if (this.merchItem.stock == 0) {
					return "Sold out";
				} else {
					return "In stock";
				}
			}
		}
	};
</script>

<style scoped>
	.item-box-mobile {
		border-bottom: 1px solid gainsboro;
		display: none;
		padding: 1rem 0 1rem 0;
	}
	.item-box {
		margin: 0 auto;
		width: 250px;
		height: 420px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.item-info {
		color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #ffffffbd;
		opacity: 0;
		transition-property: all;
		transition: 0.3s;
		cursor: pointer;
	}
	.item-box:hover .item-info {
		opacity: 1;
	}
	.router-link-style {
		text-decoration: none;
		color: #333333;
		transition: 0.3s;
	}
	.router-link-style:hover {
		color: #363636;
	}
	.sold-out {
		background-color: #333333;
		color: white;
		border: 3px solid #333333;
		padding: 0 0.5rem;
		text-align: center;
		margin: 0 auto;
		width: 5rem;
		display: absolute;
	}
	@media screen and (max-width: 750px) {
		.item-box {
			display: none;
		}
		.item-box-mobile {
			display: flex;
			justify-content: space-between;
			cursor: pointer;
        }
		img {
			height: 10rem;
		}
		h4 {
			margin-top: 0;
			margin-bottom: 0.5rem;
		}
		.item-mobile-info {
			display: flex;
			flex-direction: column;
			width: 70%;
			padding: 0 0 0 1rem;
			justify-content: flex-start;
		}
		.detail {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
