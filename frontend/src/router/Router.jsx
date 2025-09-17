import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router =createBrowserRouter([
    {
      path: "/",
      Component: Main,
      children: [
        { index: true, Component: Home },
        { path: "projects", Component: Projects }
      ],
    },
  ]);

  export default router;