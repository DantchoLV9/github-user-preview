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
    }
</script>