<template>
	<div class="wrapper">
		<div class="left-wrapper">
			<h2>Shopping cart</h2>
			<line-break></line-break>
			<div class="item-list-wrapper">
				<h3 v-if="cacheCart.length == 0">Your shopping cart is empty.</h3>
				<cart-item v-if="cacheCart.length != 0" v-for="(item,index) in cacheCart" :cartItem="item"></cart-item>
			</div>
		</div>
		<div class="right-wrapper">
			<h3 class="toggle">Order summary</h3>
			
			<div class="total">
				<div class="line">
					<p>Account Blance:</p>
					<p>${{parseFloat(userBalance).toFixed(2)}}</p>
				</div>
				<div class="line">
					<p>Subtotal:</p>
					<p>${{subTotal}}</p>
				</div>
				<div class="line">
					<p>Tax:</p>
					<p>${{tax}}</p>
				</div>
				<div class="line">
					<p style="font-weight: 700">Total:</p>
					<p>${{total}}</p>
				</div>
			</div>
			<div class="break"></div>
			<v-button buttonName="Checkout" v-if="cacheCart.length != 0" @click.native="checkout"></v-button>
			<v-button buttonName="Go shopping" v-if="cacheCart.length == 0" @click.native="goHome"></v-button>
		</div>
	</div>
</template>

<script>
	import CartItem from "./CartItem.vue";
	export default {
		data() {
			return {};
		},
		components: {
			"cart-item": CartItem
		},
		computed: {
			isLoggedIn() {
				return this.$store.state.loggedin;
			},
			user() {
				return this.$store.state.user;
			},
			cacheCart() {
				return this.$store.state.user.cacheCart;
			},
			subTotal() {
				let subtotal = 0;
				for (let i = 0; i < this.user.cacheCart.length; i++) {
					if (this.user.cacheCart[i].stock != 0) {
						subtotal +=
							this.user.cacheCart[i].price *
							this.user.cacheCart[i].quantity;
					}
				}
				return parseFloat(subtotal).toFixed(2);
			},
			tax() {
				return parseFloat(0.07 * this.subTotal).toFixed(2);
			},
			total() {
				return parseFloat(1.07 * this.subTotal).toFixed(2);
			},
			userBalance() {
				return this.$store.state.user.userBalance;
			}
		},
		methods: {
			goHome() {
				this.$router.push("/Vue-Eshop");
			},
			getDate() {
				let dateObj = new Date();
				let month = dateObj.getUTCMonth() + 1; //months from 1-12
				let day = dateObj.getUTCDate();
				let year = dateObj.getUTCFullYear();

				return month + "/" + day + "/" + year;
			},
			checkout() {
				let newBalance = this.userBalance - this.total;
				if (newBalance < 0) {
					alert("Balance not enough");
				} else {
					this.user.userBalance = newBalance;
					this.$store.commit("writeHistory", {
						orderNumber:
							Math.random()
								.toString(36)
								.substring(2, 15) +
							Math.random()
								.toString(36)
								.substring(2, 15),
						orderDate: this.getDate(),
						orderItems: this.user.cacheCart
					});

					////测试用的
					console.log("After commit, local history:");
					console.log(this.user.userHistory);
					////测试用的

					this.user.cacheCart = [];
					if (this.isLoggedIn == true) {
						this.$store.dispatch("updateBalance");
						this.$store.dispatch("updateUserCart");
						this.$store.dispatch("updateUserHistory");

					}
					// push local order history to firebase
					// clear server cart
					// update local stock
				}
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		padding: 0 10vw 0 10vw;
	}
	.item-list-wrapper {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
	}
	.right-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.line {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total {
		display: flex;
		flex-direction: column;
		padding: 0 3rem 0 0;
		width: 80%;
	}
	p {
		margin: 0;
		padding: 0.3rem 0.3rem 0 0;
	}
	.break {
		display: none;
	}

	.toggle {
		display: none;
	}

	@media screen and (min-width: 420px) {
		.wrapper {
			display: flex;
			flex-direction: row;
		}
		.left-wrapper {
			width: 70%;
			border-right: 1px solid rgba(128, 128, 128, 0.575);
			min-height: 100vh;
		}
		.right-wrapper {
			margin-top: 5rem;
			width: 30%;
			height: 100vh;
			padding: 10rem 1rem;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			position: fixed;
			right: 0;
			top: 0;
		}
		.break {
			display: block;
			height: 2rem;
		}
		.total {
			padding: 0;
			width: 90%;
		}
		.toggle {
			display: block;
		}
	}
</style>
