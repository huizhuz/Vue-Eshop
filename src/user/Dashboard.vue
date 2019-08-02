<template>
	<div class="dash-wrapper">
		<h2>Welcome back, {{$route.params.username}}!</h2>
		<div class="dash-item-wrapper">
			<dash-item title="Security" iconName="fingerprint" @click.native="goToLink('account')"></dash-item>
			<dash-item title="Cart" iconName="shopping-cart" @click.native="$router.push('/cart')"></dash-item>
			<dash-item title="Orders" iconName="history" @click.native="goToLink('orders')"></dash-item>
		</div>
		<v-button @click.native="onLogout" buttonName="Logout"></v-button>
	</div>
</template>

<script>
	import DashItem from "./DashItem.vue";
	export default {
		data(){
			return {
				username: this.$route.params.username
			}
		},
		components: {
			"dash-item": DashItem
		},
		methods: {
			onLogout() {
				this.$store.commit("clearAuthData");
				this.$store.commit("clearUserData");
				this.loggingOut = true;
				this.$router.push("/Vue-Eshop");
			},
			goToLink(linkName) {
				let url = '/user/' + this.username + '/' + linkName;
				this.$router.push(url);
			}
		}
	};
</script>

<style scoped>
body{
	margin: 0;
}
.dash-wrapper{
	width: 80vw;
	margin: 0 10vw 0 10vw;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.dash-item-wrapper{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5rem;
}

@media screen and (max-width: 600px){
	.dash-item-wrapper{
		flex-direction: column;
	}
}
</style>
