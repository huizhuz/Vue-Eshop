<template>
	<div class="detail-page">
		<div class="path">
			<router-link to="/" class="router-link-style">Home</router-link>
			<span>></span>
			<router-link :to="'/list/' + category" class="router-link-style">{{category}}</router-link>
			<span>></span>
			<span>{{currentItem.name}}</span>
		</div>
		<div class="item">
			<div class="swiper-box">
				<swiper style="width: 100%" :options="swiperOption">
					<swiper-slide style="width: 100%; text-align:center;" v-for="(pic, index) in currentItem.pics">
						<img :src="getImageUrl(pic)" class="item-image" />
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<div class="item-info">
				<h3>{{currentItem.brand}} {{currentItem.name}}</h3>
				<p>${{currentItem.price}}</p>
				<p>{{currentItem.description}}</p>
				<div class="sold-out" v-if="soldOut">Sold out</div>
				<input type="number" v-if="!soldOut" v-model="quantity">
				<v-button v-if="!soldOut" buttonName="Add to cart" @click.native="addToCart"></v-button>
			</div>
		</div>
	</div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				category: this.$route.params.category,
				merchList: this.$store.state.merchList,
				currentDirectory: this.$store.state.merchList[
					this.$route.params.category
				],
				quantity: 1,
				swiperOption: {
					pagination: {
						el: ".swiper-pagination",
						dynamicBullets: true
					}
				}
			};
		},
		computed: {
			currentItem() {
				for (let i = 0; i < this.currentDirectory.length; i++) {
					if (
						this.currentDirectory[i].name ==
						this.$route.params.merchName
					) {
						return this.currentDirectory[i];
					}
				}
			},
			itemToCart(){
				return{
					pics: this.currentItem.pics[0],
					name: this.currentItem.name,
					price: this.currentItem.price,
					quantity: this.quantity,
				}
			},
			soldOut() {
				if (this.currentItem.stock == 0) {
					return true;
				} else {
					return false;
				}
			}
		},
		methods: {
			getImageUrl(imageName) {
				return require("../../src/images/" + imageName);
			},
			addToCart(){
				this.$store.commit("addToCart",this.itemToCart);
				console.log(this.$store.state.cacheCart);
			}
		}
	};
</script>

<style scoped>
	.detail-page {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0 10vw 0 10vw;
	}
	.item {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.path {
		padding: 0.5rem 0 1rem 0;
	}
	.item-info {
		padding: 0 0 0 2rem;
	}
	.swiper-box {
		width: 35%;
	}
	.item-image {
		max-height: 30rem;
		display: inline;
		object-fit: contain;
	}
	.router-link-style {
		text-decoration: none;
		color: #9c7509;
		transition: 0.3s;
	}
	.router-link-style:hover {
		color: #b88a0b;
	}
	.sold-out {
		background-color: #333333;
		color: white;
		border: 3px solid #333333;
		padding: 0 0.5rem;
		text-align: center;
		margin: 1rem 0 0 0;
		width: 5rem;
		display: absolute;
	}

	@media screen and (max-width: 850px) {
		.item {
			flex-direction: column;
		}
		.swiper-box {
			width: 100%;
		}
		.item-info {
			display: flex;
			flex-direction: column;
			text-align: justify;
		}
		.item-info :nth-child(3) {
			order: 2;
		}
	}
	@media screen and (max-width: 420px) {
		img {
			height: 18rem;
		}
		.item-info {
			padding: 0;
		}
	}
</style>
