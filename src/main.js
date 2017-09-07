/**
 * Created by star on 17/9/7.
 */
import Vue from 'vue'
import App from './App'
import { createI18n } from './utils/lang/i18n.js'
const i18n = createI18n()
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)


new Vue({
    el: '#app',
    i18n,
    template: '<App></App>',
    components: {
        App
    }
})

