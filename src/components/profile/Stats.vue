<template>
    <div class="container">
        <h3 class="fs-4 d-block d-sm-none mb-3 text-white text-shadow ls-1">
            Stats
        </h3>
        <div class="px-0 px-md-5 d-flex gap-3 justify-content-between justify-content-md-around">
            <div
                class="rounded-4 box-shadow-sharp bg-secondarybg py-3 d-flex flex-column justify-content-center align-items-center">
                <span class="display-3 text-shadow text-info">50</span>
                <span class="fs-5 text-white">Games</span>
            </div>
            <div
                class="rounded-4 box-shadow-sharp bg-secondarybg py-3 d-flex flex-column justify-content-center align-items-center">
                <span class="display-3 text-shadow text-success">14</span>
                <span class="fs-5 text-white">Wins</span>
            </div>
            <div
                class="rounded-4 box-shadow-sharp bg-secondarybg py-3 d-flex flex-column justify-content-center align-items-center">
                <span class="display-3 text-shadow text-danger">36</span>
                <span class="fs-5 text-white">Losses</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    margin-top: -40px;
}

.container>div>div {
    width: 155px;
    transition: all .5s ease-in-out;
}

.box-shadow-sharp:hover {
    box-shadow: none;
}

@media screen and (max-width: 390px) {
    .container>div {
        flex-wrap: wrap;
    }

    .container>div>div:nth-child(3) {
        margin: .5rem auto 0 auto;
    }
}

@media screen and (max-width: 445px) {
    .container>div>div {
        width: 110px;
    }
}

@media screen and (min-width: 446px) and (max-width: 520px) {
    .container>div>div {
        width: 130px;
    }
}

@media screen and (max-width: 575px) {
    .container {
        margin-top: -60px;
    }
}
</style>