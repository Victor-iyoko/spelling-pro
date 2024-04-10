import { defineStore } from "pinia";

export const useSettingsStore = 
defineStore({
    id: 'settings',
    state: () => ({}),
    getters: {},
    actions: {
    handleSettings(key, val) {
    if (key === 'question' || key === 'time') {
        ['new question', 'end game', 'age', 'class'].includes(val) ? this.data[key].dependency = val : this.data[key].number = Number(val);
        // this.data.time.dependency === 'end game' ? this.data.time.number = 1 : this.data.time.number = 10;
        if (['new question', 'end game'].includes(val)) {
            val === 'end game' ? this.data.time.number = 1 : this.data.time.number = 10;
        }
    } else {
        key === 'sound' ? this.data[key] = val : this.data[key] = Number(val);
    }
    localStorage.setItem("settings", JSON.stringify(this.data));
}
    }
});