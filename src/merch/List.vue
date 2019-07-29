<template>
	<div style="padding: 0 10vw 0 10vw;">
		<h2 class="category">Shop {{category}}</h2>
        <line-break></line-break>
		<div class="item-wrapper">
			<list-item class="item" :merchItem="item" v-for="(item, index) in merchList[category]"></list-item>
		</div>
	</div>
</template>

<script>
	import ListItem from "./ListItem.vue";

	export default {
		data() {
			return {
				merchList: this.$store.state.merchList
			};
		},
		computed: {
			category() {
				return this.$route.params.category;
			}
		},
		components: {
			"list-item": ListItem
		}
	};
</script>

<style scoped>
	.item-wrapper {
		display: grid;
		justify-content: space-between;
		grid-template-columns: repeat(3, 1fr);
    }
    .category{
       text-align: center;
       padding: 2rem 0 0 0;
       margin: 2rem 0 0 0;
       color: #333333;
    }


    @media screen and (max-width: 1000px){
        .item-wrapper{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 750px){
        .item-wrapper{
            grid-template-columns: repeat(1, 1fr);
        }
        
    }
</style>

