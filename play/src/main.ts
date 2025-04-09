import { createApp } from "vue";
import App from "./app.vue";

import { install } from "../../packages/components";
import "@z/theme-chalk/src/index.scss";
const app = createApp(App);
app.use(install);
app.mount("#app");
