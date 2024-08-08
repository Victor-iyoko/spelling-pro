<template>
    <div class="mt-5">
        <h3 class="fs-4 mb-2 text-white text-shadow ls-1">
            Open challenges
        </h3>
        <p class="fs-6 ff-grandstander-thin text-yellow text-start mb-2">
            Check out some open challenges from players all over the world!
        </p>
        <div class="row d-flex g-2 w-100 mx-auto" id="open-challenges">
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
            <Challenge />
        </div>
        <div class="text-center mt-4 tap" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-down text-light me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
            <span class="text-light ff-grandstander-thin">Load more...</span>
        </div>
    </div>
</template>

<script setup>
import Challenge from './Challenge.vue';
</script>

<style scoped>
@media screen and (max-width: 575px) {
    p {
        font-size: 14px !important;
    }
}
</style>