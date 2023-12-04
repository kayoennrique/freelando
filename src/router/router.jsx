import { createBrowserRouter } from "react-router-dom"
import Concluded from "../pages/register/Concluded";
import PersonalData from "../pages/register/PersonalData";
import Interests from "../pages/register/Interests";
import LayoutBaseRegistration from "../pages/register/LayoutBaseRegistration";
import CustomerSelection from "../pages/register/CustomerSelection";
import LayoutBase from "../pages/LayoutBase";
import HomePage from "../pages/HomePage/HomePage";
import NotFound404 from "../pages/errors/NotFound404";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: NotFound404,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "area-logada",
                children: [
                    {
                        path: 'perfil',
                        element: <Profile />
                    }
                ]
            },
            {
                path:'cadastro',
                element: <LayoutBaseRegistration />,
                children: [
                    {
                        path: '',
                        element: <CustomerSelection />
                    },
                    {
                        path: 'interesses',
                        element: <Interests />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <PersonalData />
                    },
                    {
                        path: 'concluido',
                        element: <Concluded />
                    }
                ]
            }
        ],
    },
]);