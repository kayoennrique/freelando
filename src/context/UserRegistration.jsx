import { createContext, useState } from 'react';

const homeUser = {
    profile: '',
    interest: '',
    fullName: '',
    uf: '',
    city: '',
    email: '',
    password: '',
    passwordConfirmed: ''
}

export const RegistrationUserContext = createContext({
    user: homeUser,
    setProfile: () => null,
    setInterest: () => null,
    setFullName: () => null,
    setUf: () => null,
    setCity: () => null,
    setEmail: () => null,
    setPassword: () => null,
    setPasswordConfirmed: () => null,
});

export const useRegistrationUserContext = () => {
    return useState(RegistrationUserContext);
}

export const RegistrationUserProvider = ({ children }) => {

    const [user, setUser] = useState(homeUser);

    const setProfile = (profile) => {
        setUser(previousState => {
            return {
                ...previousState,
                profile
            }
        });
    }
    const setInterest = (interest) => {
        setUser(previousState => {
            return {
                ...previousState,
                interest
            }
        });
    }
    const setFullName = (fullName) => {
        setUser(previousState => {
            return {
                ...previousState,
                fullName
            }
        });
    }
    const setUf = (uf) => {
        setUser(previousState => {
            return {
                ...previousState,
                uf
            }
        });
    }
    const setCity = (city) => {
        setUser(previousState => {
            return {
                ...previousState,
                city
            }
        });
    }
    const setEmail = (email) => {
        setUser(previousState => {
            return {
                ...previousState,
                email
            }
        });
    }
    const setPassword = (password) => {
        setUser(previousState => {
            return {
                ...previousState,
                password
            }
        });
    }
    const setPasswordConfirmed = (passwordConfirmed) => {
        setUser(previousState => {
            return {
                ...previousState,
                passwordConfirmed
            }
        });
    }

    const context = {
        user,
        setProfile,
        setInterest,
        setFullName,
        setUf,
        setCity,
        setEmail,
        setPassword,
        setPasswordConfirmed,
    }

    return (<RegistrationUserContext.Provider value={context}>
        {children}
    </RegistrationUserContext.Provider>
    );
}