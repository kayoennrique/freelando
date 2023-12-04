import { createContext, useContext } from "react";
import http from "../http";
import { StoreToken } from "../utils/StoreToken";

const UserSessionContext = createContext({
    userIsLogged: false,
    login: (email, senha) => null,
    logout: () => null,
    profile: {}
})

export const useUserSessionContext = () => {
    return useContext(UserSessionContext)
}

export const SessionUserProvider = ({children}) => {

    const login = (email, senha) => {
        http.post('auth/login', {
            email,
            senha
        })
            .then(response => {
                StoreToken.defineTokens(
                    response.data.access_token,
                    response.data.refresh_token,
                )
            })
            .catch(erro => console.error(erro))
    }

    const value = {
        login
    }
    return (<UserSessionContext.Provider value={value}>
        {children}
    </UserSessionContext.Provider>)
}