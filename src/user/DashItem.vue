<template>
	<div class="box">
		<div><font-awesome-icon :icon="iconName" style="font-size: 2rem;"/> {{title}}</div>
	</div>
</template>

<script>
	export default {
        props: ["title","iconName"],
	};
</script>

<style scoped>
	.box {
		width: 10rem;
		height: 5rem;
		background-color: white;
		color: #333333;
		border: 3px solid #333333;
		border-radius: 2px;
		margin: 0.5rem;
		padding: 0.5rem;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.box:hover {
		background-color: #333333;
		color: white;
		cursor: pointer;
        transition: 0.5s;
	}
</style>
