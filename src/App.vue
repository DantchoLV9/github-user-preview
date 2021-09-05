<template>
    <div class="container">
        <Header />
        <Card />
    </div>
</template>

<script>
    import Card from './components/Card'
    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
            Header,
            Card,
        },
        data () {
            return {
                userData: []
            }
        },
        mounted () {
            console.log(this.userData)
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    body, button, input {
        font-family: 'Rubik', sans-serif;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
</style>
