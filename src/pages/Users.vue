<template>
    <div v-ActivePage="useRoute().name" class="container-fluid px-0">
        <div ref="header" class="pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="USERS" class="ps-0 me-4" />
                    <form @submit.prevent="router.push('/users?search=' + search)">
                        <TextInput :auth="false" type="text" placeholder="Search for other users" size="14">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </TextInput>
                    </form>

                </header>
            </div>
        </div>
        <div ref="searchOptions" class="position-sticky top-0 z-2 shadow border-0 bg-secondarybg container-fluid">
            <div class="wrapper py-1 mx-auto">
                <div class="container d-flex align-items-center">
                    <SelectInput v-model="sort" label='Sort by' :options="sortOptions" />
                    <SelectInput v-model="order" label='Order' :options="orderOptions" />

                    <Pagination v-if="users" :isSmall="true" />
                </div>
            </div>
        </div>
        <div class="wrapper mx-auto mt-4 mb-3" :style="users ? { minHeight: '100vh' } : {}">
            <div v-if="users" class="container">
                <p class="text-yellow fs-7 ff-grandstander-thin">
                    showing search results for: <b>user</b>
                </p>
                <PlayerTile :isSavedPlayers="true" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="false" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="true" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="true" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="true" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="false" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="false" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="true" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="false" :inUsersList="true" />
                <PlayerTile :isSavedPlayers="false" :inUsersList="true" />
                <Pagination :isSmall="false" />
            </div>
            <div v-else class="container d-flex flex-column gap-3 align-items-center justify-content-center"
                :style="{ height: noUsersHeight + 'px', maxHeight: '900px' }">
                <img src="/search-users.svg" alt="no room" class="opacity-75 empty">
                <h3 class="fs-4 text-center ff-grandstander-thin">
                    Search for players by their username.
                </h3>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Title from '../components/Title.vue';
import PlayerTile from '../components/PlayerTile.vue';
import Pagination from '../components/Pagination.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import SelectInput from '../components/SelectInput.vue';
import TextInput from '../components/TextInput.vue';
import ActivePage from '../directives/activePage.js';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';

const vActivePage = ActivePage;
const sortOptions = [
    { option: 'Name', value: 'name' },
    { option: 'Rank', value: 'rank' },
    { option: 'Level', value: 'level' },
    { option: 'Xp', value: 'xp' },
];
const orderOptions = [
    { option: 'Ascending', value: 'ascending' },
    { option: 'Descending', value: 'descending' }
];
const header = ref(null);
const searchOptions = ref(null);
const noUsersHeight = ref(window.innerHeight - (header.value?.clientHeight + searchOptions.value?.clientHeight))
const sort = ref('name');
const order = ref('ascending');
const users = ref(true);
const router = useRouter();
// noUsersHeight.value = ;

onMounted(() => {
    noUsersHeight.value = window.innerHeight - (header.value?.clientHeight + searchOptions.value?.clientHeight) - 35;
    // console.log(window.innerHeight - (header.value?.clientHeight + searchOptions.value?.clientHeight));
    // console.log(header.value?.clientHeight);
    // console.log(searchOptions.value?.clientHeight);
    console.log(noUsersHeight.value);
})
</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

header {
    margin-bottom: 30px;
}

.position-sticky {
    margin-top: -5px;
}

a svg {
    transition: all .5s ease-in-out;
}

a svg:hover {
    color: #D1D1D4 !important;
}

.empty {
    width: 240px;
}

h3 {
    color: #a36041E1;
}

@media screen and (max-width: 575px) {
    header {
        margin-bottom: 30px;
    }

    .empty {
        width: 150px;
    }

    div>h3 {
        font-size: 1.3rem !important;
    }
}

@media screen and (max-width: 370px) {

    .position-sticky .wrapper>div.container {
        padding: 0;
        justify-content: space-between !important;
    }
}
</style>