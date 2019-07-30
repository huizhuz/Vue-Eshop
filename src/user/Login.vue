<template>
	<div>
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userInput: {
					email: "",
					password: ""
				},
				// loggedin = this.$store.state.loggedin,
			};
		},
		// computed:{
		// 	username(){
		// 		return this.$store.state.username;
		// 	}
		// },
		// created(){
		// 	if (this.loggedin == true){
		// 		this.$router.push('/user/'+ this.username);
		// 	}
		// },
		methods: {
			onSubmit() {
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
</style>


