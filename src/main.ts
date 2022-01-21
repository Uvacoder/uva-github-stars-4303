import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import router from "./router";
import App from "./App.vue";
import { piniaInstance } from "./store";
import "./css/index.css";

const app = createApp(App);

app.use(router).use(createMetaManager(false)).use(piniaInstance);

router.isReady().then(() => {
  app.mount("#app");
});
