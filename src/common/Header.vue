<template>
	<div class="header-wrapper">
		<div class="logo">
			<img src="../images/Musec_icon.png" alt="site-logo" />
			<router-link to="/" class="title router-link-style">Musec</router-link>
		</div>
		<div class="nav-wrapper">
			<router-link to="/list/guitar" class="nav-item router-link-style">Guitar</router-link>
			<router-link to="/list/ukulele" class="nav-item router-link-style">Ukulele</router-link>
			<router-link to="/list/accessory" class="nav-item router-link-style">Accessory</router-link>
		</div>
		<div class="user-wrapper">
			<router-link to="/login" class="user-item router-link-style">Sign in</router-link>
			<p class="user-item router-link-style">
				<font-awesome-icon icon="search" />
			</p>
			<p class="user-item router-link-style">
				<font-awesome-icon icon="shopping-cart" />
			</p>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.header-wrapper {
		margin: 0 auto;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		height: 5rem;
		text-align: center;
		background-color: #333333;
		color: white;
	}
	.logo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 7rem;
		padding: 0 0 0 0.8rem;
	}
	.logo img {
		width: 1.8rem;
		height: 1.8rem;
	}
	.title {
		align-items: center;
		font-family: 'Satisfy', cursive;
		font-size: 1.5rem;
	}
	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav-item {
		padding: 1rem;
	}
	.user-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.user-item {
		padding: 1rem;
	}

	.router-link-style {
		text-decoration: none;
		color: white;
		transition: 0.3s;
	}
	.router-link-style:hover {
		color: rgb(211, 206, 206);
	}
</style>
