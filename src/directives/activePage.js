import {useAppStore} from '../stores/app.js';

export default {
  mounted(el, binding) {
    window.scrollTo(0, 0);
    useAppStore().toggleActiveMenu(binding.value);
  }
};