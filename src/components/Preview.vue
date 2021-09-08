<template>
    <div class="preview-wrapper">
        <img v-bind:src="userData.avatar_url" v-bind:alt="userData.login">
        <div class="username-section">
            <h2>{{userData.login}}</h2>
            <a v-bind:href="userData.html_url" target="_blank">View Profile</a>
        </div>
        <div class="desc-section" v-if="userData.name !== null || userData.bio !== null">
            <h3 v-if="userData.name !== null">{{userData.name}}</h3>
            <p v-if="userData.bio !== null">{{userData.bio}}</p>
        </div>
        <div class="links-section" v-if="userData.blog !== '' || userData.twitter_username !== null">
            <div v-if="userData.blog !== ''">
                <fa icon="globe" />
                <a v-bind:href="`${userData.blog !== undefined && userData.blog.startsWith('https://') ? userData.blog : userData.blog !== undefined && userData.blog.startsWith('http://') ? userData.blog : `http://${userData.blog}`}`" target="_blank">{{userData.blog}}</a>
            </div>
            <div v-if="userData.twitter_username !== null">
                <fa :icon="['fab', 'twitter']" />
                <a v-bind:href="`https://twitter.com/${userData.twitter_username}`" target="_blank">{{`@${userData.twitter_username}`}}</a>
            </div>
        </div>
        <div class="followers-section">
            <div>
                <p>Followers</p>
                <p>{{userData.followers}}</p>
            </div>
            <div>
                <p>Following</p>
                <p>{{userData.following}}</p>
            </div>
        </div>
        <div class="repos-section">
            <div>
                <p>Repos</p>
                <p>{{userData.public_repos}}</p>
            </div>
            <div>
                <p>Gists</p>
                <p>{{userData.public_gists}}</p>
            </div>
        </div>
        <div class="location-section" v-if="userData.location !== null">
            <p v-if="userData.location !== null">
                {{userData.location}}
            </p>
        </div>
        <div class="user-since-section">
            <p>User since</p>
            <p>{{`${new Date(userData.created_at).getDate()}/${new Date(userData.created_at).getMonth()+1}/${new Date(userData.created_at).getFullYear()}`}}</p>
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
</script>

<style scoped>
    .preview-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 250px;
        border-radius: 50%;
        margin-bottom: 2rem;
    }
    .username-section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .username-section h2 {
        font-weight: 500;
        font-size: 1.8rem;
    }
    .username-section a {
        font-size: 1.2rem;
        font-weight: 500;
        opacity: 0.6;
    }
    .desc-section {
        width: 100%;
        margin-bottom: 0.6rem;
    }
    .desc-section h3 {
        font-size: 1.4rem;
        font-weight: 400;
    }
    .desc-section p {
        font-size: 1.1rem;
    }
    .followers-section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        font-size: 1.2rem;
        opacity: 0.6;
        font-weight: 500;
        margin-bottom: 0.6rem;
    }
    .followers-section div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .links-section {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
    }
    .links-section div {
        display: flex;
        justify-content: center;
        align-content: center;
        column-gap: 0.4rem;
    }
    @media (max-width: 550px) {
        .links-section {
            flex-direction: column;
            align-items: center;
        }
    }
    .location-section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
    }
    .repos-section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        font-size: 1.2rem;
        opacity: 0.6;
        font-weight: 500;
        margin-bottom: 0.6rem;
    }
    .repos-section div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .user-since-section {
        text-align: center;
        font-size: 1.2rem;
        opacity: 0.6;
    }
</style>