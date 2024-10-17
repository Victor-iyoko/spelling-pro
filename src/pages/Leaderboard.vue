<template>
    <div v-ActivePage="useRoute().name" class="container-fluid px-0" :style="{ minHeight: '100vh' }">
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
            <div class="container d-flex flex-column align-items-center justify-content-center">
                <LeaderBoardSlider />
                <span class="text-yellow d-block">
                    Switch active player to check out progress below.
                </span>
            </div>
        </div>
        <!-- leaderboard slider ends -->

        <!-- leaderboard progress starts -->
        <div class="wrapper mx-auto leaderboard__progress">
            <Progress />
        </div>
        <!-- leaderboard progress ends -->

        <!-- leaderboard table starts -->
        <div class="wrapper mx-auto mb-3 leaderboard__table" :style="{ marginTop: '60px !important' }">
            <div class="container">
                <h3 class="fs-4 mb-2 text-white text-shadow ls-1">
                    Top 20
                </h3>
                <p class="fs-6 ff-grandstander-thin text-yellow mb-2">
                    Check out the top 20 players from around the world.
                </p>
                <div id="leaderboard-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#leaderboard-carousel" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#leaderboard-carousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <table class="table table-borderless table-sm mb-0 w-100 h-100">
                                <thead class="z-3 position-sticky top-0">
                                    <tr>
                                        <th class="rounded-start-2 bg-secondarybg text-shadow ps-1 ps-sm-2 ps-md-3"
                                            scope="col">
                                            #</th>
                                        <th class="ls-1 bg-secondarybg text-shadow text-center" scope="col">Player
                                        </th>
                                        <th class="rounded-end-2 ls-1 bg-secondarybg text-shadow text-end pe-1 pe-sm-2 pe-md-3"
                                            scope="col">
                                            Score
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent pt-2 ps-1 ps-sm-2 ps-md-3" scope="row">1.</th>
                                        <td class="bg-transparent pt-2 ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent pt-2 ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">2.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">3.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">4.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">5.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">6.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">7.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">8.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">9.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">10.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="carousel-item">
                            <table class="table table-borderless table-sm mb-0 w-100 h-100">
                                <thead class="z-3 position-sticky top-0">
                                    <tr>
                                        <th class="rounded-start-2 bg-secondarybg text-shadow ps-1 ps-sm-2 ps-md-3"
                                            scope="col">
                                            #</th>
                                        <th class="ls-1 bg-secondarybg text-shadow text-center" scope="col">Player
                                        </th>
                                        <th class="rounded-end-2 ls-1 bg-secondarybg text-shadow text-end pe-1 pe-sm-2 pe-md-3"
                                            scope="col">
                                            Score
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent pt-2 ps-1 ps-sm-2 ps-md-3" scope="row">11.</th>
                                        <td class="bg-transparent pt-2 ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent pt-2 ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">12.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">13.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">14.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">15.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">16.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">17.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">18.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">19.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                    <tr class="bg-transparent">
                                        <th class="bg-transparent ps-1 ps-sm-2 ps-md-3" scope="row">20.</th>
                                        <td class="bg-transparent ps-2 ps-sm-2 ps-md-3 ps-md-4 pe-0">
                                            <PlayerTile :inTable="true" :isSavedPlayers="true" :inUsersList="true" />
                                        </td>
                                        <td class="bg-transparent ps-0 text-end pe-1 pe-sm-2 pe-md-3">234</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- leaderboard table ends -->
    </div>
    <Footer />
</template>

<script setup>
import Title from '../components/Title.vue';
import PlayerTile from '../components/PlayerTile.vue';
import LeaderBoardSlider from '../components/LeaderBoardSlider.vue';
import SelectInput from '../components/SelectInput.vue';
import { ref } from 'vue';
import ActivePage from '../directives/activePage.js';
import { useRoute } from 'vue-router';
import Progress from '../components/profile/Progress.vue';
import Footer from '../components/Footer.vue';

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

</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

.jumbotron {
    height: 240px;
}

.leaderboard__table {
    margin-top: -130px !important;
}

.leaderboard__progress {
    margin-top: -180px;
}

.swiper.swiper-coverflow.swiper-3d.swiper-initialized.swiper-horizontal {
    width: 100% !important;
}

.carousel-indicators {
    top: 99%;
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

    .leaderboard__progress {
        margin-top: -150px;
    }

    table th,
    tr td.text-end {
        font-size: 1rem;
    }

    .leaderboard__table {
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

    .leaderboard__table {
        margin-top: -110px !important;
    }
}
</style>