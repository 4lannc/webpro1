import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import{createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import SaranPage from "./Pages/saran.jsx";
import ProductsPage from "./Pages/products.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Assalamualaikum, Dekk..</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/saran",
    element: <SaranPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
