import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";

import AdminView from "../views/layouts/AdminView.vue";
import ProductsView from "../views/admin/products/ProductsView.vue";
import ProductsCreateView from "../views/admin/products/ProductsCreateView.vue";
import ProductsEditView from "../views/admin/products/ProductsEditView.vue";
import UploadView from "../views/admin/products/photos/UploadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      component: AdminView,
      children: [
        {
          path: "products",
          name: "admin.products",
          component: ProductsView,
        },
        {
          path: "products/create",
          name: "admin.products.create",
          component: ProductsCreateView,
        },
        {
          path: "products/:id/edit",
          name: "admin.products.edit",
          component: ProductsEditView,
          props: true,
        },
        {
          path: "products/:id/photos/upload",
          name: "admin.products.photos.upload",
          component: UploadView,
          props: true,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
