import { createBrowserRouter } from "react-router-dom";
import CustomerSelection from "../pages/register/CustomerSelection";
import LayoutBaseRegistration from "../pages/register/LayoutBaseRegistration";
import LayoutBase from "../pages/LayouBase";

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
                        element: <h1> Interesses</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1> Dados Pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1> Concluído </h1>
                    }
                ]
            }
        ],
    },
]);