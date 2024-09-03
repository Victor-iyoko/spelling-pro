<template>
    <div class="d-flex flex-column bg-secondarybg box-shadow-sharp mb-3 rounded-3">
        <div class="player d-flex w-100 py-2 px-3">
            <div class="avatar__container rounded-circle border border-2 me-3">
                <img src="/IMG-20230322-WA0201.jpg" class="w-100 h-100 rounded-circle" alt="avatar">
            </div>
            <div class="player__tile d-flex flex-grow-1 align-items-center justify-content-between">
                <div class="d-flex flex-column">
                    <RouterLink to="/profile">
                        <h5 class="text-light fs-6 ls-1 mb-0" role="button">
                            Micheal
                        </h5>
                    </RouterLink>
                    <div class="info d-flex py-1 rounded-2 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill" stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill" stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill" stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill" stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill" stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                </div>
                <span class="text-white-50 fs-6">
                    6/30/24
                </span>
            </div>
        </div>
        <div class="px-3 py-2 text-light ff-grandstander-thin" :style="{ fontSize: '14px' }">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente unde nostrum ullam numquam eos vero
            libero quisquam asperiores reprehenderit odit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione vero ad totam sequi.
            Culpa.
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.bg-secondarybg.box-shadow-sharp {
    transition: all 300ms ease-in-out;
}

.bg-secondarybg.box-shadow-sharp:hover {
    box-shadow: none;
}

.avatar__container {
    width: 50px;
    height: 50px;
    border-color: #8f4d2f !important;
}

a:hover h5 {
    text-decoration: underline;
}

h5 {
    font-size: 1.1rem !important;
}
</style>