<template>
    <div class="container-fluid px-0">
        <div class="w-100 position-relative jumbotron shadow rounded-bottom-4">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <RouterLink to="/" class="d-flex d-block d-sm-none justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                            class="text-light" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </RouterLink>
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
            <ScoresTable />
            <div class="container justify-content-between gap-5 gap-md-4 d-flex flex-column flex-md-row mb-3 mt-6">
                <PlayerConnect :isSavedPlayers="true" />
                <PlayerConnect :isSavedPlayers="false" />
            </div>
        </div>
    </div>
    <EditProfile />
</template>

<script setup>
import Title from '../components/Title.vue';
import ProfileDetails from '../components/profile/ProfileDetails.vue';
import Stats from '../components/profile/Stats.vue';
import ScoresTable from '../components/profile/ScoresTable.vue';
import PlayerConnect from '../components/profile/PlayerConnect.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import TextInput from '../components/TextInput.vue';
import EditProfile from '../components/profile/EditProfile.vue';

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

.mt-6 {
    margin-top: 60px;
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