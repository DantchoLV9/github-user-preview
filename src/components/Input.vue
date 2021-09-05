<template>
    <input :placeholder="placeholder">
</template>

<script>
    export default {
        name: "Input",
        props: {
            placeholder: String
        }
    }
</script>

<style scoped>
    input {
        font-size: 1.2rem;
        padding: 0.6rem;
        border: none;
        border-radius: 10px;
        outline: none;
        width: 100%;
    }
</style>