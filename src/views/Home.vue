<template>
    <Form @trigger-preview="triggerPreview" />
</template>

<script>
    import Form from '../components/Form.vue'

    export default {
        name: 'Home',
        components: {
            Form,
        },
        methods: {
            triggerPreview(formUsername) {
                this.$emit('trigger-preview', formUsername)
            }
        },
        mounted() {
            document.title = "GitHub User Preview"
        },
        emits: ['trigger-preview']
    }
</script>