<template>
	<div style="margin-bottom: 2rem;">
		<div class="basic-info">
			<div>Order #: {{currentOrder.orderNumber}}</div>
			<div>{{currentOrder.orderDate}}</div>
		</div>
		<div class="grey-line"></div>

		<div v-for="i in currentOrder.orderItems.length">
			<div class="item-wrapper">
				<div class="item-info">
					<img :src="getImageUrl(currentOrder.orderItems[i-1].picture)" />
					<p>{{currentOrder.orderItems[i-1].name}}</p>
				</div>
				<div class="history-info">
					<p class="history-info-item">${{currentOrder.orderItems[i-1].price}}</p>
					<p class="history-info-item">{{currentOrder.orderItems[i-1].quantity}}</p>
				</div>
			</div>
		</div>
        <div class="grey-line"></div>
        <div class="order-footer">Total including tax: ${{currentOrder.orderTotal}}</div>
	</div>
</template>

<script>
	export default {
		props: ["currentOrder"],
		methods: {
			getImageUrl(imageName) {
				return require("../../src/images/" + imageName);
			}
		}
	};
</script>

<style scoped>
	.basic-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0;
	}
	.grey-line {
		height: 1px;
		background-color: rgb(204, 204, 204);
	}

	.item-wrapper {
		height: 7rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		height: 5rem;
		width: 5rem;
		object-fit: contain;
	}

	.item-info {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.history-info {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.history-info-item {
		padding: 1rem;
		margin: 0;
	}
    .order-footer{
        display: flex;
        flex-direction: row-reverse;
    }
	@media screen and (max-width: 850px) {
		.item-info {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		.item-info p {
			order: -1;
		}
	}
</style>
