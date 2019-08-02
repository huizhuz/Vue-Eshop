<template>
    <p>{{userBalance}}</p>
</template>

<script>
export default {
    computed: {
        userBalance() {
            return this.$store.state.user.userBalance;
        }
    }
}
</script>
