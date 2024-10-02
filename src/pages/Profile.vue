<template>
    <div v-ActivePage="useRoute().name" class="container-fluid px-0" :style="{ minHeight: '100vh' }">
        <div class="w-100 position-relative jumbotron shadow">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="MY  PROFILE" />
                    <form @submit.prevent="router.push('/users?search=' + search)"
                        class="login__field d-none d-sm-block">
                        <TextInput :auth="false" type="text" placeholder="Search for other users" size="14">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </TextInput>
                    </form>
                    <RouterLink class="d-flex d-block d-sm-none justify-content-center align-items-center" to="/users"
                        role="button">
                        <svg width="24" height="24" class="text-light" viewBox="0 0 20 20">
                            <path
                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </RouterLink>
                </header>
            </div>
        </div>
        <div class="wrapper mx-auto">
            <ProfileDetails />
            <Stats />
            <ProfileAnalytics />
            <Badges />
            <Progress />
            <div class="container justify-content-between gap-3 gap-md-4 d-flex flex-column flex-md-row mt-6 mb-3">
                <PlayerConnect :isSavedPlayers="true" />
                <PlayerConnect :isSavedPlayers="false" />
            </div>
        </div>
    </div>
    <!-- <Footing /> -->
    <EditProfile />
</template>

<script setup>
import Title from '../components/Title.vue';
import ProfileDetails from '../components/profile/ProfileDetails.vue';
import Stats from '../components/profile/Stats.vue';
import ProfileAnalytics from '../components/profile/ProfileAnalytics.vue';
import Badges from '../components/profile/Badges.vue';
import PlayerConnect from '../components/profile/PlayerConnect.vue';
import EditProfile from '../components/profile/EditProfile.vue';
import TextInput from '../components/TextInput.vue';
import ActivePage from '../directives/activePage.js';
// import Footing from '../components/Footing.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Progress from '../components/profile/Progress.vue';

const vActivePage = ActivePage;
const router = useRouter();
const search = ref('');
</script>

<style scoped>
.jumbotron {
    background-color: #1e292c;
    height: 250px;
}

.wrapper {
    max-width: 800px;
}

a svg {
    transition: all .5s ease-in-out;
}

a svg:hover {
    color: #D1D1D4 !important;
}

@media screen and (max-width: 575px) {
    .jumbotron {
        height: 180px;
    }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
    .jumbotron {
        height: 210px !important;
    }
}
</style>