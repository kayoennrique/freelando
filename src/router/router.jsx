import { createBrowserRouter } from "react-router-dom";
import CustomerSelection from "../pages/register/CustomerSelection";
import LayoutBaseRegistration from "../pages/register/LayoutBaseRegistration";
import LayoutBase from "../pages/LayouBase";
import Interests from "../pages/register/Interests";
import PersonalData from "../pages/register/PersonalData";
import Concluded from "../pages/register/Concluded";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: 'cadastro',
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