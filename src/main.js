import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { useRoute, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  useRoute: useRoute(),
  routes,
});



const app = createApp(App).mount("#app");
app.use(router);
