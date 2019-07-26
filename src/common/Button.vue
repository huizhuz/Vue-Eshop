<template>
    <div class="btn-wrapper">
        <div class="btn">{{ buttonName }}</div>
    </div>
</template>

<script>
export default {
    props:['buttonName']
}
</script>


<style scoped>
    .btn-wrapper{
        display: flex;
        justify-content: flex-start;
    }
    .btn{
        background-color: white;
        color: #333333;
        border: 3px solid #333333;
        height: 2rem;
        padding: 0 1rem;
        text-align: center;
        transition: 0.4s;
    }

    .btn:hover{
        background-color: #333333;
        color: white;
        cursor: pointer;
    }
</style>
