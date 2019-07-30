<template>
	<div>
		<cart-item v-for="(item,index) in cacheCart" :cartItem="item"></cart-item>
	</div>
</template>

<script>
import CartItem from './CartItem.vue'
	export default {
        components: {
            "cart-item": CartItem,
        },
		computed: {
			cacheCart() {
				return this.$store.state.cacheCart;
			}
		}
	};
</script>