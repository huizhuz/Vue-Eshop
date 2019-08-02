<template>
	<div>
		<div class="item-wrapper" v-if="cartItem.stock">
			<div class="item-info">
				<img :src="getImageUrl(cartItem.picture)" />
				<p>{{cartItem.name}}</p>
			</div>
			<div class="cart-info">
				<p class="cart-info-item">${{cartItem.price}}</p>
				<select v-model="cartItem.quantity">
					<option v-for="number in Math.min(5, cartItem.stock)">{{number}}</option>
				</select>
				<p class="cart-info-item" @click="remove">
					<font-awesome-icon icon="times" />
				</p>
			</div>
		</div>
		<div class="out-of-stock" v-if="!cartItem.stock">
			<p>{{cartItem.name}} is out of stock</p>
			<v-button @click.native="remove" buttonName="Remove"></v-button>
		</div>
		<line-break></line-break>
	</div>
</template>

<script>
	export default {
		props: ["cartItem"],
		computed: {
			cacheCart() {
				return this.$store.state.user.cacheCart;
			},
			isLoggedIn() {
				return this.$store.state.loggedin;
			},
			quantity() {
				return this.cartItem.quantity;
			}
		},
		methods: {
			getImageUrl(imageName) {
				return require("../../src/images/" + imageName);
			},
			remove() {
				let index = 0;
				for (let i = 0; i < this.cacheCart.length; i++) {
					if (this.cacheCart[i].name == this.cartItem.name) {
						index = i;
						this.$store.commit("removeFromCart", index);
						if (this.isLoggedIn == true) {
							this.$store.dispatch("updateUserCart");
						}
					}
				}
			}
		},
		watch: {
			quantity: function() {
				let index = 0;
				for (let i = 0; i < this.cacheCart.length; i++) {
					if (
						this.cacheCart[i].name == this.cartItem.name &&
						this.isLoggedIn == true
					) {
						this.$store.dispatch("updateUserCart");
					}
				}
			}
		}
	};
</script>

<style scoped>
	.item-wrapper {
		height: 10rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		height: 7rem;
		width: 7rem;
		object-fit: contain;
	}
	.out-of-stock {
		height: 10rem;
		background-color: rgba(240, 237, 234, 0.459);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item-info {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.cart-info {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.cart-info-item {
		padding: 1rem;
		margin: 0;
	}
	@media screen and (max-width: 850px) {
		.item-info {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		.item-info p {
			order: -1;
		}
	}
</style>

