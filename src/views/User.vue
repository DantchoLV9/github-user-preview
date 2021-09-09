<template>
    <Preview :userData="userData" />
</template>

<script>
    import Preview from '../components/Preview.vue'

    export default {
        name: 'User',
        components: {
            Preview
        },
        props: {
            userData: Object,
        },
        watch: {
            userData: function () {
                document.title = `${this.userData.login} | GitHub User Preview`
            }
        },
        mounted() {
            if (this.userData.login !== undefined) {
                document.title = `${this.userData.login} | GitHub User Preview`
            }
            else {
                document.title = 'GitHub User Preview'
            }
        },
    }
</script>