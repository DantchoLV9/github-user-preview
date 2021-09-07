<template>
    <div class="form">
        <input v-model="formUsername" placeholder="Enter GitHub Username">
        <button @click="triggerPreview()">Preview</button>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                formUsername: '',
            }
        },
        methods: {
            triggerPreview() {
                if (this.formUsername === '') {
                    alert('Please enter a GitHub username!')
                    return
                }
                this.$emit('trigger-preview', this.formUsername)
            }
        },
        emits: ['trigger-preview']
    }
</script>

<style scoped>
    .form {
        display: flex;
        column-gap: 1rem;
    }
    input {
        font-size: 1.2rem;
        padding: 0.6rem;
        border: none;
        border-radius: 10px;
        outline: none;
        width: 100%;
    }
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