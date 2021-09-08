<template>
    <router-link to="/">
        <h1>GitHub User Preview</h1>
    </router-link>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    h1 {
        text-align: center;
        color: #f3f5f9;
        letter-spacing: 1.5px;
        word-spacing: 15px;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
</style>