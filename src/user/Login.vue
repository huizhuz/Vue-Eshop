<template>
	<div class="form-wrapper">
		<div>
			<h3>Sign in</h3>
		</div>
		<form>
			User name
			<br />
			<input type="text" name="username" />
			<br />Password
			<br />
			<input type="password" name="psw" />
		</form>
		<div class="buttons">
			<v-button buttonName="submit"></v-button>
			<p>
				New customer?
				<router-link to="/register" class="router-link-style">Register here -></router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.form-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.router-link-style {
		text-decoration: none;
		color: #9c7509;
		transition: 0.3s;
	}
	.router-link-style:hover {
		color: #b88a0b;
	}

	.buttons {
		margin-top: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>


