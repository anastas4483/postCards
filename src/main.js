import { createApp } from "vue"
import App from "./App.vue"
import { store } from "@/store/rootStore"

createApp(App).use(store).mount("#app")
