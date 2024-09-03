<template>
    <div v-ActivePage="useRoute().name" class="container-fluid px-0">
        <!-- jumbotron starts -->
        <div class="jumbotron pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="LEADERBOARD" class="title ps-0" />
                    <SelectInput v-model="leaderboardParams" label='Rank by' :options="leaderboardOptions"
                        :inLeaderBoard="true" />
                </header>
            </div>
        </div>
        <!-- jumbotron ends -->

        <!-- leaderboard slider starts -->
        <div class="wrapper mx-auto translate-middle-y">
            <div class="container d-flex justify-content-center">
                <LeaderBoardSlider />
            </div>
        </div>
        <!-- leaderboard slider ends -->

        <!-- leaderboard table starts -->
        <div class="wrapper mx-auto mt-4 mb-3 leaderboard-table">
            <div class="container">
                <table class="table table-borderless table-sm mb-0 w-100 h-100">
                    <thead class="z-3 position-sticky top-0">
                        <tr>
                            <th class="rounded-start-2 bg-secondarybg text-shadow ps-1 ps-sm-3" scope="col">#</th>
                            <th class="ls-1 bg-secondarybg text-shadow text-center" scope="col">Player
                            </th>
                            <th class="rounded-end-2 ls-1 bg-secondarybg text-shadow text-end pe-1 pe-sm-3" scope="col">
                                Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-transparent">
                            <th class="bg-transparent pt-2 ps-1 ps-sm-3" scope="row">1.</th>
                            <td class="bg-transparent pt-2 ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent pt-2 ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">2.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">3.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">4.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">5.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">6.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">7.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">8.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">9.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                        <tr class="bg-transparent">
                            <th class="bg-transparent ps-1 ps-sm-3" scope="row">10.</th>
                            <td class="bg-transparent ps-2 ps-sm-3 ps-md-4 pe-0">
                                <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                            </td>
                            <td class="bg-transparent ps-0 text-end pe-1 pe-sm-3">234</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- leaderboard table ends -->

        <!-- pagination starts -->
        <Pagination :isSmall="false" />
        <!-- pagination ends -->
    </div>
</template>

<script setup>
import Title from '../components/Title.vue';
import PlayerTile from '../components/PlayerTile.vue';
import Pagination from '../components/Pagination.vue';
import LeaderBoardSlider from '../components/LeaderBoardSlider.vue';
import SelectInput from '../components/SelectInput.vue';
import { ref } from 'vue';
import ActivePage from '../directives/activePage.js';
import { useRoute } from 'vue-router';

const vActivePage = ActivePage;
const leaderboardOptions = [
    { option: '1 word 2 forms', value: '1 word 2 forms' },
    { option: 'find misspelled', value: 'find misspelled' },
    { option: 'find correct', value: 'find correct' },
    { option: 'which letter', value: 'which letter' },
    { option: 'decide', value: 'decide' },
    { option: 'decide & correct', value: 'decide & correct' },
    { option: 'multiple choice', value: 'multiple choice' },
    { option: 'spell it', value: 'spell it' },
    { option: 'overall game', value: 'overall game' },
];
const leaderboardParams = ref('overall game');

function handleSelectInput(e) {
    console.log(e);
}

</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

.jumbotron {
    height: 240px;
}

.leaderboard-table {
    margin-top: -130px !important;
}

.swiper.swiper-coverflow.swiper-3d.swiper-initialized.swiper-horizontal {
    width: 100% !important;
}

table th,
tr td.text-end {
    font-size: 1.25rem;
    color: white;
}

@media screen and (max-width: 767px) {
    .jumbotron {
        height: 200px;
    }

    table th,
    tr td.text-end {
        font-size: 1rem;
    }

    .leaderboard-table {
        margin-top: -120px !important;
    }
}

@media screen and (max-width: 500px) {
    .jumbotron {
        height: 220px;
    }

    header {
        flex-direction: column;
        align-items: center !important;
    }

    .title {
        padding-left: 8px !important;
    }

    header span {
        display: block !important;
    }

    .leaderboard-table {
        margin-top: -110px !important;
    }
}
</style>