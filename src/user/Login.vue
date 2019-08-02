<template>
	<div>
		<div class="form-wrapper" v-if="!loggedin">
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
			<transition name="fade" mode="out-in">
				<div v-if="showError" class="error-box">The username or password you provided is incorrect.</div>
			</transition>
			<div class="buttons">
				<v-button buttonName="submit" @click.native="onSubmit"></v-button>
				<p>
					New customer?
					<router-link to="/register" class="router-link-style">Register here -></router-link>
				</p>
			</div>
		</div>
		<div class="logging-in" v-if="loggedin">
			<p>Successfully logged in...</p>
			<font-awesome-icon icon="fan" class="fa-spin" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userInput: {
					email: "",
					password: ""
				}
			};
		},
		created(){
			this.$store.commit('hideError');
		},
		computed: {
			loggedin() {
				return this.$store.state.loggedin;
			},
			showError() {
				return this.$store.state.showError;
			}
		},

		methods: {
			onSubmit() {
				this.$store.commit("hideError");
				this.$store.dispatch("login", this.userInput);
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
	.logging-in {
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
	.error-box {
		width: 300px;
		padding: 12px 20px;
		margin: 2rem 0 0 0;
		display: block;
		background-color: rgba(207, 103, 103, 0.452);
		border: 2px solid rgba(207, 103, 103, 0.767);
		border-radius: 2px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.3s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>


