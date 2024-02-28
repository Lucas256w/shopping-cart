import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "Shop", element: <Shop /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
