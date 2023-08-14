import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import FlagIcon from 'vue-flag-icon'
import i18n from "./plugins/i18n";


createApp(App).use(FlagIcon).use(router).use(i18n).mount('#app').component('Datepicker', VueDatepickerUi)
