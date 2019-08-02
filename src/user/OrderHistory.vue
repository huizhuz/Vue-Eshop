<template>
	<!-- <div>
        <p>{{user.userHistory}}</p>
		<p v-for="i in user.userHistory.length">{{user.userHistory[i].orderDate}} -- {{user.userHistory[i].orderNumber}}</p>
	</div> -->
    <div>
        <v-button buttonName="click" @click.native="logUserHistory"></v-button>
    </div>
</template>

<script>
	export default {
		computed: {
			user() {
				return this.$store.state.user;
			}
        },
        methods: {
            logUserHistory(){
                console.log(this.user.userHistory);
            }
        }
	};
</script>
