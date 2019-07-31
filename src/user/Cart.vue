<template>
	<div class="wrapper">
		<div class="left-wrapper">
			<h2>Shopping cart</h2>
			<line-break></line-break>
			<div class="item-list-wrapper">
                <h3 v-if="cacheCart.length == 0">Your shopping cart is empty.</h3>
				<cart-item 
                    v-if="cacheCart.length != 0"
                    v-for="(item,index) in cacheCart" :cartItem="item"></cart-item>
			</div>
		</div>
		<div class="right-wrapper">
            <h3>Order summary</h3>
			<div class="total">
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
		components: {
			"cart-item": CartItem
		},
		computed: {
			cacheCart() {
				return this.$store.state.cacheCart;
			},
			subTotal() {
				let subtotal = 0;
				for (let i = 0; i < this.cacheCart.length; i++) {
					if (this.cacheCart[i].stock != 0) {
						subtotal +=
							this.cacheCart[i].price * this.cacheCart[i].quantity;
					}
				}
				return parseFloat(subtotal).toFixed(2);
			},
			tax() {
				return parseFloat(0.07 * this.subTotal).toFixed(2);
			},
			total() {
				return parseFloat(1.07 * this.subTotal).toFixed(2);
			}
        },
        methods: {
            goHome(){
                this.$router.push('/Vue-Eshop');
            },
            checkout(){
                console.log("checkout clicked")
                // account money
                // push to order history
                // reduce stock
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
    .line{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
	.total {
		display: flex;
		flex-direction: column;
        width: 80%;
	}
	p {
		margin: 0;
		padding: 0.3rem 0.3rem 0 0;
	}
	.break {
		display: none;
	}

	@media screen and (min-width: 420px) {
		.left-wrapper {
			width: 70%;
		}
		.right-wrapper {
			width: 30%;
			height: 100vh;
			padding: 15rem 2rem;
			border-left: 1px solid rgba(128, 128, 128, 0.575);
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			position: fixed;
			right: 0;
			top: 0rem;
			z-index: -1;
		}
		.break {
			display: block;
			height: 2rem;
		}
	}
</style>
