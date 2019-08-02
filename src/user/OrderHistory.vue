<template>
	<div class="wrapper">
		<h2>Order History</h2>
		<div class="reverse-display">
			<history-item v-for="eachOrder in user.userHistory" :currentOrder="eachOrder"></history-item>
		</div>
	</div>
</template>

<script>
	import OrderHistoryItem from "./OrderHistoryItem.vue";
	export default {
		components: {
			"history-item": OrderHistoryItem
		},
		computed: {
			user() {
				return this.$store.state.user;
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		padding: 0 10vw 0 10vw;
	}
	.reverse-display {
		display: flex;
		flex-direction: column-reverse;
		margin-bottom: 2rem;
	}
</style>
