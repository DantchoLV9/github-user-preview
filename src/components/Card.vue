<template>
    <div class="card">
        <div class="form">
            <Input placeholder="Enter GitHub Username" />
            <Button text="Preview" />
        </div>
        
    </div>
</template>

<script>
    import Button from './Button'
    import Input from './Input.vue'

    export default {
        name: 'Card',
        components: {
            Button,
            Input
        }
    }
</script>

<style scoped>
    .card {
        background: #f3f5f9;
        border-radius: 15px;
        padding: 2rem;
        min-height: 50%;
        width: 50%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .form {
        display: flex;
        column-gap: 1rem;
    }
</style>