<template>
	<div>
		<div v-if="!loggingOut">
			<p>{{$route.params.username}}</p>
			<v-button @click.native="onLogout" buttonName="Logout"></v-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			onLogout() {
				this.$store.commit("clearAuthData");
				this.loggingOut = true;
				this.$router.push("/Vue-Eshop");
			}
		}
	};
</script>

<style scoped>
</style>
