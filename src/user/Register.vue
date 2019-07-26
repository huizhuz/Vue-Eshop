<template>
	<div class="form-wrapper">
		<div>
			<h3>Sign up</h3>
		</div>
		<form>
            Username <br />
            <input type="text" name="username" /> <br />
            Email <br />
            <input type="email" name="email" /> <br /> 
            Password <br />
            <input type="password" name="password" /> <br />
		</form>
		<div class="buttons">
			<v-button buttonName="Sign up"></v-button>
			<p>
				Return customer?
				<router-link to="/login" class="router-link-style">Sign in -></router-link>
			</p>
		</div>
	</div>
</template>

<style scoped>
	.form-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
	@media screen and (max-width: 415px) {
		.buttons {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
</style>
