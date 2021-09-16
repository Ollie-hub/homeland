import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [loginData, setLoginData] = useState('');
    const [houseDetails, setHouseDetails] = useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ loginData, setLoginData, houseDetails, setHouseDetails, open, setOpen }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
