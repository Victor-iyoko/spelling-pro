<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <div class="w-100 h-100" :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>