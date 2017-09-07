import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Zh from './zh.js'
import En from './en.js'
Vue.use(VueI18n)

export function createI18n() {
    return new VueI18n({
        locale: 'zh',
        messages: {
            'zh': Zh,
            'en': En
        }
    })
}