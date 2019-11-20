<template>
	<div class="container">
		<h2>Shopping cart</h2>
		<line-break></line-break>
        <p>Username: {{userName}}</p>
		<p>Your balance: ${{userBalance}}</p>
	</div>
</template>

<script>
	export default {
		computed: {
			userBalance() {
				return Math.floor(this.$store.state.user.userBalance);
            },
            userName(){
                return this.$store.state.user.username;
            }
		}
	};
</script>

<style scoped>
	.container {
		width: 80vw;
	}
</style>