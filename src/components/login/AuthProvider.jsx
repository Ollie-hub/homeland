import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [loginData, setLoginData] = useState('');
    const [houseDetails, setHouseDetails] = useState({})

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ loginData, setLoginData, houseDetails, setHouseDetails }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
