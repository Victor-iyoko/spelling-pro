<template>
    <div class="container-fluid px-0">
        <div class="jumbotron pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <RouterLink to="/" class="d-flex d-block d-sm-none justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                            class="text-light" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </RouterLink>
                    <Title title="USERS" class="ps-0" />
                    <form @submit.prevent="router.push('/users?search=' + search)" class="d-none d-sm-block">
                        <TextInput :auth="false" type="text" placeholder="Search for other users" size="14">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </TextInput>
                    </form>
                    <div role="button" class="position-relative d-flex d-block d-sm-none ">
                        <svg @click="showInput = !showInput" width="24" height="24" class="text-light"
                            viewBox="0 0 20 20">
                            <path
                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                        <form v-show="showInput" @submit.prevent="router.push('/users?search=' + search)"
                            class="position-absolute end-0" :style="{ width: '190px', top: '165%' }">
                            <TextInput :auth="false" type="text" placeholder="Search for other users" size="12">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </TextInput>
                        </form>
                    </div>
                </header>
            </div>
        </div>
        <div class="position-sticky top-0 z-2 shadow border-0 bg-secondarybg container-fluid">
            <div class="wrapper py-1 mx-auto">
                <div class="container d-flex align-items-center">
                    <SelectInput v-model="sort" label='Sort by' :options="sortOptions" />
                    <SelectInput v-model="order" label='Order' :options="orderOptions" />

                    <Pagination :isSmall="true" />
                </div>
            </div>
        </div>
        <div class="wrapper mx-auto mt-4 mb-3">
            <div class="container">
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
            </div>
        </div>
        <Pagination :isSmall="false" />
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
const sort = ref('name');
const order = ref('ascending');
const showInput = ref(false);
const router = useRouter();

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

@media screen and (max-width: 575px) {
    header {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 370px) {

    .position-sticky .wrapper>div.container {
        padding: 0;
        justify-content: space-between !important;
    }
}
</style>