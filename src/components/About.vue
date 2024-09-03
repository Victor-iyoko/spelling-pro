<template>
    <!-- Modal -->
    <div class="modal fade user-select-none" id="about" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header py-1 text-light" style="background: #773516">
                    <!-- <h5 class="modal-title fw-bold" id="staticBackdropLabel">About</h5> -->
                    <Title title="About" :small="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="modal" aria-label="Close"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="modal-body">
                    <strong data-bs-dismiss="modal" role="button">Spelling Pro</strong> is a web-based spelling game
                    application inspired by a popular Android app . It offers an interactive and engaging platform for
                    users to enhance their spelling skills while having
                    fun. With a user-friendly interface and a wide range of word challenges, <strong
                        data-bs-dismiss="modal" role="button">Spelling Pro</strong> caters
                    to users of all ages and skill levels. Players can compete against each other in real-time
                    multiplayer matches. The application also help players improve their vocabulary and spelling
                    accuracy. Whether you're a casual player looking to pass the time or a serious wordsmith aiming to
                    sharpen your skills,<strong data-bs-dismiss="modal" role="button">Spelling Pro</strong> provides an
                    entertaining and educational
                    experience for all.
                </div>
                <div class="modal-footer text-secondary">
                    <p class="me-auto">@2024</p>
                    <div>
                        Inspired by
                        <a href="http://play.google.com/store/apps/details?id=air.com.littlebigplay.spellingmaster&hl=en_US&gl=US"
                            target="_blank" class="link-dark">Spelling Master</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from './Title.vue'
</script>

<style scoped>
.modal-body {
    line-height: 2;
}
</style>