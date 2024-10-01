import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "aboutMe", element: <AboutMe /> },
        { path: "projects", element: <ProjectPage /> },
        { path: "skills", element: <SkillsPage /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
