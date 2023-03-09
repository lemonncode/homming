import App from "./App.vue";

import NotFound from "./components/NotFound.vue";

export const routes = [
  { path: "/", name: "Dashboard", component: App },
  
   { path: "/:path(.*)", component: NotFound },
];
