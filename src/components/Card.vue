<template>
    <div class="card">
        <Form v-if="Object.keys(userData).length === 0" @trigger-preview="triggerPreview" />
        <Preview v-else-if="Object.keys(userData).length > 0" :userData="userData" />
    </div>
</template>

<script>
    import Form from './Form'
    import Preview from './Preview'

    export default {
        name: 'Card',
        components: {
            Form,
            Preview
        },
        methods: {
            triggerPreview(formUsername) {
                this.$emit('trigger-preview', formUsername)
            }
        },
        props: {
            userData: Object,
        },
        emits: ['trigger-preview']
    }
</script>

<style scoped>
    .card {
        background: #f3f5f9;
        border-radius: 15px;
        padding: 2rem;
        width: 50%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
</style>