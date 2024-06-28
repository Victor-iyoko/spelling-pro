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
                    <form @submit.prevent="router.push('/users?search=' + search)"
                        class="login__field d-none d-sm-block">
                        <svg width="16" height="16" class="bi" viewBox="0 0 20 20">
                            <path
                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                        <input type="text" v-model="search" id="search" required class="login__input"
                            placeholder="Search for other users">
                    </form>
                    <!-- <RouterLink class="d-flex d-block d-sm-none justify-content-center align-items-center"
                        to="/my-profile" role="button">
                        <svg data-v-cdd2f924="" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                            fill="currentColor" class="text-light" viewBox="0 0 16 16">
                            <path data-v-cdd2f924=""
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z">
                            </path>
                        </svg>
                    </RouterLink> -->
                    <svg @click="showInput = !showInput" role="button" width="24" height="24"
                        class="d-flex d-block d-sm-none text-light" viewBox="0 0 20 20">
                        <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                            stroke-linejoin="round">
                        </path>
                    </svg>
                </header>
            </div>
        </div>
        <div class="position-sticky top-0 z-2 shadow border-0 bg-secondarybg container-fluid">
            <div class="wrapper py-1 mx-auto">
                <div v-if="!showInput" class="container d-flex align-items-center">
                    <div class="select-wrapper rounded-2 d-flex align-items-center p-1 ps-3">
                        <span class="text-white py-1">
                            Sort by:
                        </span>
                        <select class="form-select ps-1 text-info form-select-sm bg-transparent border-0 w-auto fs-6"
                            :style="{ paddingRight: '27px' }">
                            <option value="1" class="text-info bg-dark">Name</option>
                            <option value="2" class="text-info bg-dark">Level</option>
                            <option value="3" class="text-info bg-dark">Xp</option>
                            <option value="3" class="text-info bg-dark">Rank</option>
                        </select>
                    </div>
                    <div class="select-wrapper rounded-2 d-flex align-items-center p-1 ps-3 ms-1">
                        <span class="text-white py-1">
                            Order:
                        </span>
                        <select class="form-select ps-1 form-select-sm bg-transparent border-0 text-info w-auto fs-6"
                            :style="{ paddingRight: '27px' }">
                            <option value="3" class="text-info bg-dark">Ascending</option>
                            <option value="3" class="text-info bg-dark">Descending</option>
                        </select>
                    </div>
                    <Pagination :isSmall="true" />
                </div>
                <div v-else class="container p-0 p-sm-3 d-flex align-items-center justify-content-end">
                    <form @submit.prevent="" class="login__field pb-0 pt-2 pe-0 ms-auto">
                        <svg width="16" height="16" class="bi" viewBox="0 0 20 20">
                            <path
                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                        <input type="text" v-model="search" id="search" required class="login__input pt-0"
                            placeholder="Search for other users">
                    </form>
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

const search = ref("");
const showInput = ref(false);
const router = useRouter();

function handleShowInput(e) {
    e.target.innerWidth < 576 ? showInput.value = true : showInput.value = false;
}

onMounted(() => {
    // window.innerWidth < 576 ? showInput.value = true : showInput.value = false;
    window.addEventListener('resize', handleShowInput);
});

onUnmounted(() => {
    document.removeEventListener('resize', handleShowInput);
});
</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

.form-select {
    --bs-form-select-bg-img: url("data: image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' ><path fill='none' stroke='%23ffffff' %20stroke-linecap='round' %20stroke-linejoin='round' %20stroke-width='2' %20d='m2%205%206%206%206-6' /></svg>") !important;
}

header {
    margin-bottom: 30px;
}

.position-sticky {
    margin-top: -5px;
}

.select-wrapper:hover {
    background-color: #31393b;
}

.login__field {
    padding: 15px 0px;
    position: relative;
    display: flex;
    justify-content: start;
    z-index: 1;
}

.bi {
    position: absolute;
    top: 26px;
    color: white;
}

.login__field.pb-0.pt-2 .bi {
    top: 10px;
}

a svg {
    transition: all .5s ease-in-out;
}

a svg:hover {
    color: #D1D1D4 !important;
}

.login__input {
    border: none;
    border-bottom: 1px solid #D1D1D4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    padding-bottom: 5px;
    font-weight: 500;
    font-size: 14px;
    width: 100%;
    transition: .3s ease-in-out;
    color: white;
    letter-spacing: 1px;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
    outline: none;
    border-bottom-color: #773516;
}

.login__input::placeholder {
    font-size: 14px !important;
    color: #D1D1D4;
    letter-spacing: 1px;
    transition: color .3s ease-in-out;
}

select:focus {
    box-shadow: none;
}

@media screen and (max-width: 575px) {
    header {
        margin-bottom: 30px;
    }

    select,
    .select-wrapper span {
        font-size: .8rem !important;
    }

    .select-wrapper {
        padding: 0;
    }
}

@media screen and (max-width: 370px) {

    .position-sticky .wrapper>div.container {
        padding: 0;
        justify-content: space-between !important;
    }

    .select-wrapper {
        padding-left: .6rem !important;
        padding-right: 0 !important;
    }

    .select-wrapper select,
    .select-wrapper span {
        font-size: 12px !important;
    }
}
</style>