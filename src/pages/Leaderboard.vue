<template>
    <div class="container-fluid px-0">
        <!-- jumbotron starts -->
        <div class="jumbotron pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="LEADERBOARD" class="title ps-0" />
                    <div class="select-wrapper rounded-2 d-flex align-items-center p-1 ps-3 ms-1"
                        :style="{ background: '#31393b' }">
                        <span class="text-white py-1 d-none d-md-block">
                            Rank by:
                        </span>
                        <select role="button"
                            class="form-select ps-1 form-select-sm bg-transparent border-0 text-info w-auto fs-6"
                            :style="{ paddingRight: '27px' }">
                            <option value="1 word 2 forms" class="text-info bg-dark">1 word 2 forms</option>
                            <option value="find misspelled" class="text-info bg-dark">find misspelled</option>
                            <option value="find correct" class="text-info bg-dark">find correct</option>
                            <option value="which letter" class="text-info bg-dark">which letter</option>
                            <option value="decide" class="text-info bg-dark">decide</option>
                            <option value="decide & correct" class="text-info bg-dark">decide & correct</option>
                            <option value="multiple choice" class="text-info bg-dark">multiple choice</option>
                            <option value="spell it" class="text-info bg-dark">spell it</option>
                            <option value="overall game" class="text-info bg-dark">overall game</option>
                        </select>
                    </div>
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

</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

.jumbotron {
    height: 240px;
}

.form-select {
    z-index: 10;
    --bs-form-select-bg-img: url("data: image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' ><path fill='none' stroke='%23ffffff' %20stroke-linecap='round' %20stroke-linejoin='round' %20stroke-width='2' %20d='m2%205%206%206%206-6' /></svg>") !important;
}

select:focus {
    box-shadow: none;
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

    select,
    .select-wrapper span {
        font-size: .9rem !important;
    }

    .select-wrapper {
        padding: 0;
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