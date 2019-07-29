<template>
	<div class="form-wrapper">
		<div>
			<h3>Sign in</h3>
		</div>
		<form>
			Email
			<br />
			<input type="email" name="email" v-model="userInput.email" />
			<br />Password
			<br />
			<input type="password" name="psw" v-model="userInput.password" />
		</form>
		<div class="buttons">
			<v-button buttonName="submit" @click.native="onSubmit"></v-button>
			<p>
				New customer?
				<router-link to="/register" class="router-link-style">Register here -></router-link>
			</p>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				userInput: {
					email: "",
					password: ""
				}
			};
		},
		methods: {
			onSubmit() {
				axios
					.post(
						'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqv2jR-WIHUTiYLcN33DUJb88c07O_zaY',
						{
							email: this.userInput.email,
							password: this.userInput.password,
							returnSecureToken: true
						}
					)
					.then(res => {
						console.log(res);
						this.$router.push("/Vue-Eshop");
					})
					.catch(error => console.log(error));
			}
		}
	};
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


