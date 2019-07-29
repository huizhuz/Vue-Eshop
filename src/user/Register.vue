<template>
	<div>
		<div class="form-wrapper" v-if="!showLoading">
			<div>
				<h3>Sign up</h3>
			</div>
			<form>
				Username
				<span class="error">{{usernameError}}</span>
				<br />
				<input type="text" name="username" v-model="newUser.username" />
				<br />Email
				<span class="error">{{emailError}}</span>
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
	export default {
		data() {
			return {
				newUser: { username: "", email: "", password: "" },
				userList: this.$store.state.userList,
				usernameError: "",
				emailError: "",
				error: false,
				showLoading: false
			};
		},
		methods: {
			register() {
				this.usernameError = "";
				this.emailError = "";
				this.error = false;
				for (let i = 0; i < this.userList.length; i++) {
					if (this.userList[i].username === this.newUser.username) {
						this.usernameError = "The username already exists.";
						this.error = true;
						break;
					}
				}
				for (let j = 0; j < this.userList.length; j++) {
					if (this.userList[j].email === this.newUser.email) {
						this.emailError = "The email address already exists.";
						this.error = true;
						break;
					}
				}
				if (this.error == false) {
					this.$store.state.userList.push(new User(this.newUser));
					this.showLoading = true;
					setTimeout(()=>{this.$router.push('/login')}, 1500)
					console.log(this.userList);
				}
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
		width: 320px;
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
