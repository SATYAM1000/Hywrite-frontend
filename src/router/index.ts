import { createBrowserRouter } from "react-router";

const routerConfig = [
  {
    path: "/",
    lazy: () => import("../pages/home/index"),
  },
  {
    path: "/blogs",
    lazy: () => import("../pages/blogs/layout.tsx"),
  },
];

export const router = createBrowserRouter(routerConfig);
