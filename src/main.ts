import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {router} from "./core/route"
import Notifications from '@kyvg/vue3-notification'
import {createPinia} from "pinia"

const app =createApp(App)
app.use(router)
app.use(Notifications)
app.use(createPinia())
app.mount('#app')
