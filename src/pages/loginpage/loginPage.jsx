import { useContext } from "react";
import { ReviewSection } from "../../components/Deletefunction/ReviewSection";
import { Login } from "../../components/login/Login"
import { AuthContext } from "../../components/login/AuthProvider";
import './loginpage.scss'

const LoginPage = (props) => {
    const { loginData, setLoginData } = useContext(AuthContext)
    return (
        <main className="login-page">
            <div>
                <ReviewSection />
            </div>
            <div className="login-section">
                <Login loginData={props.loginData} setLoginData={props.setLoginData} />
            </div>
        </main>



    )
}

export { LoginPage };