import { useContext } from "react";
import { ReviewSection } from "../../components/Deletefunction/ReviewSection";
import { Login } from "../../components/login/Login"
import { AuthContext } from "../../components/login/AuthProvider";

const LoginPage = (props) => {
    const { loginData, setLoginData } = useContext(AuthContext)
    return (
        <article>
            <div>
                <ReviewSection />
            </div>
            <div>
                <Login loginData={props.loginData} setLoginData={props.setLoginData} />
            </div>
        </article>



    )
}

export { LoginPage };