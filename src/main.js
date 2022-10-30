import { createApp, h } from "vue";
import App from "./App.vue";
import { store } from "./vuex/store";
import "./assets/styles/styles.scss";

const app = createApp({
  render: () => h(App),
});

app.mount("#app");

app.use(store);
