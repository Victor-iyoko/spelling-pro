<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in" class="scale">
      <div class="w-100 h-100 position-relative" :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
    <NavMenu />
    <Chat />
  </router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useSettingsStore } from './stores/settings';
import { settingsDefault } from './data/default';
import NavMenu from './components/NavMenu.vue';
import Chat from './components/chat/Chat.vue';

const route = useRoute();
let settings = useSettingsStore();

function loadSettings() {
  const localSettings = JSON.parse(localStorage.getItem('settings'));
  // set the default settings in the local storage if not set
  if (!localSettings) {
    // setting the default settings in the local storage
    localStorage.setItem('settings', JSON.stringify(settingsDefault));
    settings.data = settingsDefault;
    console.log("set store to default value");
  } else {
    // check if global store is empty then set to local storage value
    if (Object.keys(settings.$state).length === 0) {
      console.log("set store to local storage value");
      settings.data = localSettings;
    }
  }
}

onMounted(() => {
  loadSettings();
});
</script>