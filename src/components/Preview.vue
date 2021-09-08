<template>
    <div>
        <img v-bind:src="userData.avatar_url" v-bind:alt="userData.login">
        <div>
            <h2>{{userData.login}}</h2>
            <a v-bind:href="userData.html_url" target="_blank">View Profile</a>
        </div>
        <div v-if="userData.name !== null || userData.bio !== null">
            <h3 v-if="userData.name !== null">{{userData.name}}</h3>
            <p v-if="userData.bio !== null">{{userData.bio}}</p>
        </div>
        <div>
            <div>
                <p>Followers:</p>
                <p>{{userData.followers}}</p>
            </div>
            <div>
                <p>Following:</p>
                <p>{{userData.following}}</p>
            </div>
        </div>
        <div v-if="userData.blog !== '' || userData.twitter_username !== null">
            <div>
                <fa icon="globe" />
            </div>
            <div>
                <fa :icon="['fab', 'twitter']" />
            </div>
            <a v-if="userData.blog !== ''" v-bind:href="`${userData.blog !== undefined && userData.blog.startsWith('https://') ? userData.blog : userData.blog !== undefined && userData.blog.startsWith('http://') ? userData.blog : `http://${userData.blog}`}`" target="_blank">{{userData.blog}}</a>
            <a v-if="userData.twitter_username !== null" v-bind:href="`https://twitter.com/${userData.twitter_username}`" target="_blank">{{`@${userData.twitter_username}`}}</a>
        </div>
        <div v-if="userData.company !== null || userData.location !== null">
            <p v-if="userData.company !== null">
                {{userData.company}}
            </p>
            <p v-if="userData.location !== null">
                {{userData.location}}
            </p>
        </div>
        <div>
            <div>
                <p>Repos:</p>
                <p>{{userData.public_repos}}</p>
            </div>
            <div>
                <p>Gists:</p>
                <p>{{userData.public_gists}}</p>
            </div>
        </div>
        <div>
            <p>User since</p>
            <p>{{userData.created_at}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Preview',
        props: {
            userData: Object,
        },
        mounted() {
            if (this.userData.username !== this.$router.currentRoute._value.params.username) {
                this.$emit('trigger-preview', this.$router.currentRoute._value.params.username)
            }
            if (Object.keys(this.userData).length === 0) {
                this.$emit('trigger-preview', this.$router.currentRoute._value.params.username)
            }
        }
    }
</script

<style scoped>

</style>