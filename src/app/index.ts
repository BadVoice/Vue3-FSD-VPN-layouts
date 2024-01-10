import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers'
import './index.css'

import App from './App.vue'

export const app = createApp(App).use(createPinia).use(router)
