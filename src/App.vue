<template>
	<div id="app">
		<site-header></site-header>
		<transition
			name="fade"
			mode="out-in"
		>
			<router-view class="content"></router-view>
		</transition>
	</div>
</template>

<script>
	import Header from "./common/Header.vue";
	export default {
		data() {
			return {
				prevHeight: 0
			};
		},
		components: {
			"site-header": Header
		},
	};
</script>

<style scoped>
	.content {
		width: 100vw;
		margin: 0 auto;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.4s;
		transition-property: opacity;
		transition-timing-function: ease;
		overflow: hidden;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

</style>
