import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Resume from "../pages/Resume";

const router =createBrowserRouter([
    {
      path: "/",
      Component: Main,
      children: [
        { index: true, Component: Home },
        { path: "projects", Component: Projects },
        { path: "contact", Component: Contact },
        { path: "about", Component: About },
        { path: "resume", Component: Resume },
        { path: "home", Component: Home }
      ],
    },
  ]);

  export default router;