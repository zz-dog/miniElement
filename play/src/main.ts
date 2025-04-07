import { createApp } from "vue";
import App from "./app.vue";

import { ZIcon } from "../../packages/components";
import "@z/theme-chalk/src/index.scss";
const app = createApp(App);
app.use(ZIcon);
app.mount("#app");
