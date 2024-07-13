<template>
    <div class="container-fluid px-0">
        <!-- jumbotron starts -->
        <div class="jumbotron pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="REVIEWS" class="title ps-0" />
                    <button type="button" class="d-flex gap-2 align-items-center ls-1 me-2 me-md-3 btn btn-light"
                        data-bs-toggle="modal" data-bs-target="#add-review">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path
                                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <span class="d-none d-sm-inline">
                            Add a review
                        </span>
                    </button>
                </header>
            </div>
        </div>
        <!-- jumbotron ends -->

        <!-- ratings details starts -->
        <div class="wrapper mx-auto translate-middle-y">
            <div class="container">
                <RatingsDetails />
            </div>
        </div>
        <!-- ratings details ends -->

        <!-- reviews starts -->
        <div class="wrapper mx-auto mb-5 review__wrapper">
            <div class="container">
                <div class="d-flex gap-2 mb-3">
                    <SelectInput v-model="sort" label='Sort by'
                        :options="[{ option: 'Latest', value: 'latest' }, { option: 'Oldest', value: 'oldest' }]"
                        :inLeaderBoard="false" />
                    <SelectInput v-model="rating" label='Ratings'
                        :options="[{ option: 5, value: 5 }, { option: 4, value: 4 }, { option: 3, value: 3 }, { option: 2, value: 2 }, { option: 1, value: 1 }, { option: 'All', value: 'all' },]"
                        :inLeaderBoard="false" />

                </div>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </div>
        <!-- reviews ends -->

        <!-- pagination starts -->
        <Pagination :isSmall="false" />
        <!-- pagination ends -->

        <!-- add review starts -->
        <AddReview />
        <!-- add review ends -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from '../components/Title.vue';
import Pagination from '../components/Pagination.vue';
import SelectInput from '../components/SelectInput.vue';
import RatingsDetails from '../components/reviews/RatingsDetails.vue';
import Review from '../components/reviews/Review.vue';
import AddReview from '../components/reviews/AddReview.vue';

const sort = ref('latest');
const rating = ref('all');
</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

.jumbotron {
    height: 210px;
}

.review__wrapper {
    margin-top: -50px;
}

@media screen and (max-width: 575px) {
    .jumbotron {
        height: 230px;
    }

    .review__wrapper {
        margin-top: -120px;
    }
}
</style>