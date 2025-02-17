import { createBrowserRouter } from "react-router-dom";
import { ErrorNotFound } from "pages/PageErrors";
import Layout from "pages/Layout";
import Home from "pages/Home";
import Edit from "pages/Edit";
import View from "pages/View";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/edit/:id?", element: <Edit /> },
      { path: "/view/:id", element: <View /> },
      { path: "*", element: <ErrorNotFound /> },
    ],
  },
]);
