<template>
    <div class="container">
        <Header />
        <div class="card">
            <router-view :userData="userData" @trigger-preview="triggerPreview"></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
            Header,
        },
        methods: {
            triggerPreview(formUsername) {
                this.username = formUsername
                this.fetchUserData(this.username)
            },
            async fetchUserData(username) {
                const res = await fetch(`https://api.github.com/users/${username}`)
                const data = await res.json()
                if (data.message === "Not Found") {
                    alert(`${this.username} Not Found`)
                    this.$router.push('/')
                    return
                }
                this.userData = data
                this.$router.push(this.username)
            }
        },
        data () {
            return {
                username: "",
                userData: {}
            }
        },
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
    .card {
        background: #f3f5f9;
        border-radius: 15px;
        padding: 2rem;
        width: 50%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
</style>
