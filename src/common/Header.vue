<template>
	<div class="header">
		<div v-if="show" class="page-cover" @click="hideMenu"></div>
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
					<font-awesome-icon icon="shopping-cart" />
				</p>
			</div>
		</div>

		<div class="mini-header-wrapper">
			<div class="logo">
				<img src="../images/Musec_icon.png" alt="site-logo" />
				<router-link to="/" class="title router-link-style">Musec</router-link>
			</div>
			<div class="dropdown">
				<span @click="showMenu">
					<font-awesome-icon class="dropdown-button" icon="bars" />
				</span>
				<transition name="slide">
					<div v-if="show" class="mini-nav-content">
						<div class="username">Hi, guest</div>
						<router-link to="/" class="mini-nav-item router-link-style" @click.native="hideMenu">Home</router-link>
						<router-link
							to="/list/guitar"
							class="mini-nav-item router-link-style"
							@click.native="hideMenu"
						>Guitar</router-link>
						<router-link
							to="/list/ukulele"
							class="mini-nav-item router-link-style"
							@click.native="hideMenu"
						>Ukulele</router-link>
						<router-link
							to="/list/accessory"
							class="mini-nav-item router-link-style"
							@click.native="hideMenu"
						>Accessory</router-link>
						<router-link
							to="/login"
							class="mini-nav-item router-link-style"
							@click.native="hideMenu"
						>Sign in</router-link>
						<p class="mini-nav-item router-link-style" @click.native="hideMenu">Cart</p>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		methods: {
			showMenu() {
				this.show = !this.show;
			},
			hideMenu() {
				this.show = false;
			}
		}
	};
</script>

<style scoped>
	.header {
		overflow: hidden;
	}
	.mini-header-wrapper {
		display: none;
	}
	.header-wrapper {
		margin: 0 auto;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		height: 5rem;
		text-align: center;
		background-color: #333333;
		color: white;
		z-index: 5;
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
		font-family: "Satisfy", cursive;
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
	.dropdown-button {
		margin: 0.5rem 0.8rem;
		padding: 0.3rem;
		font-size: 1.2rem;
		color: white;
		width: 3rem;
		height: 2rem;
	}
	@media screen and (max-width: 520px) {
		.header-wrapper {
			display: none;
		}
		.mini-header-wrapper {
			margin: 0 auto;
			width: 100vw;
			display: flex;
			justify-content: space-between;
			height: 5rem;
			text-align: center;
			background-color: #333333;
			color: white;
			align-items: center;
			top: 0;
			left: 0;
			z-index: 5;
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

		.slide-enter-active {
			transition: all 0.3s ease;
		}
		.slide-leave-active {
			transition: all 0.3s ease;
		}
		.slide-enter {
			transform: translate(-100%, 0);
		}
		.slide-leave-to {
			transform: translate(-100%, 0);
		}
		.mini-nav-content {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			background: #333333;
			position: fixed;
			top: 0rem;
			left: 0rem;
			height: 100vh;
			width: 75vw;
			z-index: 10;
		}
		.mini-nav-item {
			text-align: left;
			padding: 0.5rem;
		}
		.page-cover {
			position: fixed;
			top: 0;
			left: 0;
			opacity: 0;
			height: 100vh;
			width: 100vw;
			z-index: 4;
		}
		.username {
			width: 80%;
			height: 3rem;
			display: flex;
			flex-direction: column;
			background-color: rgb(109, 105, 105);
			border-radius: 3px;
			margin: 1.5rem;
			justify-content: center;
		}
	}
</style>
