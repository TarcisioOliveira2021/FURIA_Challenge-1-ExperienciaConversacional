import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import {router} from './router'
import './style.css'
import './font.css'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'



createApp(App)
    .use(createVuetify({
        icons: {
            defaultSet: 'mdi'
        }
    }))
    .use(router)
    .mount('#app')
