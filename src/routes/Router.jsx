import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Career from "../pages/Career";


function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/search-job",
        element: <Career />,
      },
      {
        path: "/support",
        element: <About />,
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
