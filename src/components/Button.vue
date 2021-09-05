<template>
    <button @click="onClick()">{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
    },
    methods: {
        onClick() {
            console.log("Button Pressed")
        }
    }
}
</script>

<style scoped>
    button {
        font-size: 1.2rem;
        padding: 0.6rem;
        border: none;
        border-radius: 10px;
        background: rgb(33, 104, 255);
        color: #f3f5f9;
        cursor: pointer;
    }
    button:hover {
        background: rgb(23, 89, 230);
    }
</style>