import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default {
  mounted(el) {
    new Tooltip(el);
  },
  unmounted(el) {
    let tooltip = Tooltip.getInstance(el);
    if (tooltip) {
      tooltip.dispose();
    }
  }
};