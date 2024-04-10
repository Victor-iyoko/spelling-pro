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
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useSettingsStore } from './stores/settings';
import { settingsDefault } from './data/default';

const route = useRoute();
let settings = useSettingsStore();

function loadSettings() {
  const localSettings = JSON.parse(localStorage.getItem('settings'));
  // set the default settings in the local storage if not set
  if (!localSettings) {
    // setting the default settings in the local storage
    localStorage.setItem('settings', JSON.stringify(settingsDefault));
    settings.$state = settingsDefault;
    console.log("set store to default value");
  } else {
    if (!("question" in settings.$state &&
      "time" in settings.$state &&
      "class" in settings.$state &&
      "age" in settings.$state &&
      "lifes" in settings.$state &&
      "sound" in settings.$state)) {
      settings.$state = localSettings;
      console.log("set store to local storage value");
    }
  }
  console.log(settings.$state);
  // settings.$state = settingsDefault;
  // console.log(settings.$state);
}

onMounted(() => {
  loadSettings();
});
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