import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    errors: {},
    setProfile: () => null,
    setInterest: () => null,
    setFullName: () => null,
    setUf: () => null,
    setCity: () => null,
    setEmail: () => null,
    setPassword: () => null,
    setPasswordConfirmed: () => null,
    submitUser: () => null,
    canSelectInterest: () => null
})

export const useRegistrationUserContext = () => {
    return useContext(RegistrationUserContext);
}

export const RegistrationUserProvider = ({ children }) => {

    const toBrowse = useNavigate();

    const [user, setUser] = useState(homeUser)

    const setProfile = (profile) => {
        setUser(previousState => {
            return {
                ...previousState,
                profile
            }
        })
    }
    const setInterest = (interest) => {
        setUser(previousState => {
            return {
                ...previousState,
                interest
            }
        })
    }
    const setFullName = (fullName) => {
        setUser(previousState => {
            return {
                ...previousState,
                fullName
            }
        })
    }
    const setUf = (uf) => {
        setUser(previousState => {
            return {
                ...previousState,
                uf
            }
        })
    }
    const setCity = (city) => {
        setUser(previousState => {
            return {
                ...previousState,
                city
            }
        })
    }
    const setEmail = (email) => {
        setUser(previousState => {
            return {
                ...previousState,
                email
            }
        })
    }
    const setPassword = (password) => {
        setUser(previousState => {
            return {
                ...previousState,
                password
            }
        })
    }
    const setPasswordConfirmed = (passwordConfirmed) => {
        setUser(previousState => {
            return {
                ...previousState,
                passwordConfirmed
            }
        })
    }

    const submitUser = () => {
        axios.post('http://localhost:8080/auth/register', user)
            .then(() => {
                toBrowse('/cadastro/concluido')
            })
            .catch(erro => {
                console.error(erro)
            })
    }

    const canSelectInterest = () => {
        return !!user.profile
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
        submitUser,
        canSelectInterest
    }

    return (<RegistrationUserContext.Provider value={context}>
        {children}
    </RegistrationUserContext.Provider>)
}