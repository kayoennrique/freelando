import { createBrowserRouter } from "react-router-dom";

import NotFound404 from "../pages/errors/NotFound404";
import HomePage from "../pages/HomePage/HomePage";
import LayoutBase from "../pages/LayoutBase";
import LayoutBaseRegister from "../pages/register/LayoutBaseRegister";
import CustomerSelection from "../pages/register/CustomerSelection";
import Interests from "../pages/register/Interests";
import PersonalData from "../pages/register/PersonalData";
import Concluded from "../pages/register/Concluded";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: NotFound404,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <LayoutBaseRegister />,
        children: [
          {
            path: "",
            element: <CustomerSelection />,
          },
          {
            path: "interesses",
            element: <Interests />,
          },
          {
            path: "dados-pessoais",
            element: <PersonalData />,
          },
          {
            path: "concluido",
            element: <Concluded />,
          },
        ],
      },
    ],
  },
]);
