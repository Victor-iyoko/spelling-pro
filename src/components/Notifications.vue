<template>
    <div class="offcanvas offcanvas-start bg-secondarybg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="notifications" aria-labelledby="notifications">
        <div class="offcanvas-header py-1">
            <Title title="Notifications" :small="true" />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="offcanvas" aria-label="Close"
                viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </div>
        <div class="offcanvas-body text-white">
            <div v-if="notifications.alerts.length === 0" class="mt-1">
                <p class="text-yellow mb-2">Get real-time alerts while you play!</p>
                <div role="button" class="clear d-flex justify-content-end text-light align-items-center mb-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                            class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </span>
                    <div class="ms-1 align-bottom ff-grandstander-thin">
                        Clear all
                    </div>
                </div>
                <div class="d-flex flex-column gap-2">
                    <div v-for="i in 7" class="notification ff-grandstander-thin rounded-2 p-2 sender bg-dark border">
                        A simple secondary alert. check it out! Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <span class="d-block mt-1 text-end ls-1'">
                            just now
                        </span>
                    </div>
                </div>
            </div>
            <div v-else
                class="position-absolute w-100 top-50 start-50 translate-middle d-flex align-items-center flex-column gap-2">
                <img src="/no-notifications.svg" alt="no notifications" class="empty">
                <h3 class="fs-4 text-center ff-grandstander-thin" :style="{ color: 'rgba(128, 128, 128, 0.216)' }">
                    There are no notifications.
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from './Title.vue';
import { useNotificationsStore } from '../stores/Notifications.js';

const notifications = useNotificationsStore();

</script>

<style scoped>
.offcanvas-header,
.offcanvas-footer {
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 4px;
}

input::placeholder {
    color: gray;
}

.text-yellow {
    font-size: 14px;
}

img.empty {
    width: 230px;
    height: 230px;
}

.clear {
    font-size: 12px;
    transition: all .3s ease-in-out;
}

.clear:hover {
    color: rgb(198, 198, 198) !important;
}

.notification {
    font-size: 13px;
    border-color: rgba(240, 255, 255, 0.09) !important;
    color: #dcdbdb;
}

.notification span {
    color: rgb(171, 171, 171);
    font-size: 10px;
}

*::-webkit-scrollbar {
    background-color: transparent;

}

*::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.216);
    width: 0.4rem;
}
</style>