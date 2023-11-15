import {defineStore} from "pinia"


export const globalStore = defineStore('store', {
    state: () => ({
        url:import.meta.env.VITE_URL,
        icon_url:'./vite.svg'
    }),
    getters: {
    }
})

