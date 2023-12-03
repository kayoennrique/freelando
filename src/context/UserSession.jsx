import { createContext, useContext } from "react";

const UserSessionContext = createContext({
    userIsLogged: false,
    login: () => null,
    logout: () => null,
    profile: {}
})

export const useUserSessionContext = () => {
    return useContext(UserSessionContext)
}

export const UserSessionProvider = ({children}) => {
    const value = {}
    return (<UserSessionContext.Provider value={value}>
        {children}
    </UserSessionContext.Provider>
    );
}