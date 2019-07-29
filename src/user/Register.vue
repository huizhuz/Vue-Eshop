<template>
	<div>
		<div class="form-wrapper" v-if="!showLoading">
			<div>
				<h3>Sign up</h3>
			</div>
			<form>
				Username
				<br />
				<input type="text" name="username" v-model="newUser.username" />
				<br />Email
				<span class="error">{{errorMessage}}</span>
				<br />
				<input type="email" name="email" v-model="newUser.email" />
				<br />Password
				<br />
				<input type="password" name="password" v-model="newUser.password" />
				<br />
			</form>
			<div class="buttons">
				<v-button buttonName="Sign up" @click.native="register"></v-button>
				<p>
					Return customer?
					<router-link to="/login" class="router-link-style">Sign in -></router-link>
				</p>
			</div>
		</div>

		<div class="loading" v-if="showLoading">
			<p>Thank you for signing up! Redirecting...</p>
			<font-awesome-icon icon="fan" class="fa-spin" />
		</div>
	</div>
</template>

<script>
	import { User } from "../store/store.js";
	import axios from "axios";
	export default {
		data() {
			return {
				newUser: { username: "", email: "", password: "" },
				userList: this.$store.state.userList,
				errorMessage: '',
				showLoading: false
			};
		},
		methods: {
			register() {
				this.errorMessage = '';
				axios
					.post(
						"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqv2jR-WIHUTiYLcN33DUJb88c07O_zaY",
						{
							email: this.newUser.email,
							password: this.newUser.password,
							returnSecureToken: true
						}
					)
					.then(res => {
						this.showLoading = true;
						setTimeout(() => {
							this.$router.push("/login");
						}, 1500);
					})
					.catch(error => {
						this.errorMessage = "The email address already exists.";
					});
				// Below was the code before linked to firebase
				// this.usernameError = "";
				// this.emailError = "";
				// this.error = false;
				// axios
				// 	.get("https://vue-eshop-db.firebaseio.com/users.json")
				// 	.then(res => {
				// 		for (let i in res.data) {
				// 			if (res.data[i].username === this.newUser.username) {
				// 				this.usernameError = "The username already exists.";
				// 				this.error = true;
				// 				break;
				// 			}
				// 		}
				// 		for (let j in res.data) {
				// 			if (res.data[j].email === this.newUser.email) {
				// 				this.emailError =
				// 					"The email address already exists.";
				// 				this.error = true;
				// 				break;
				// 			}
				// 		}
				// 		if (this.error == false) {
				// 			axios
				// 				.post(
				// 					"https://vue-eshop-db.firebaseio.com/users.json",
				// 					this.newUser
				// 				)
				// 			this.showLoading = true;
				// 			setTimeout(() => {
				// 				this.$router.push("/login");
				// 			}, 1500);
				// 		}
				// 	});
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
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.error {
		color: maroon;
	}
	.loading {
		width: 350px;
		height: 100px;
		background: white;
		border: 3px solid #333333;
		border-radius: 3px;
		color: #333333;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10rem;
	}
</style>
