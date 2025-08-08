import { useState } from "react";
import { LoginInputCreator } from "./LoginInputCreator";
import { RememberMe } from "./RememberMe";
import { LoginButton } from "./LoginButton";
import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";


function Login() {
    const [inputLoginValues, setInputLoginValues] = useState({"username": "", "password": ""});
    const LoginInputHash = {
        "username": {"id": "username", "type": "text", "labelText": "Username"},
        "password": {"id": "password", "type":"password", "labelText": "Password"}
    }

    const InputElList = LoginInputCreator(LoginInputHash, inputLoginValues, setInputLoginValues)

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
                <LoginHeader confirmButtonName="Login"/>

                <form action="">
                    {InputElList}

                    <div className="flex justify-around">
                        <RememberMe position=""/>
                        <Link to="/">Forgot password?</Link>
                    </div>  

                    
                    <LoginButton buttonName="Login"/>

                </form>

                <Link to="/login/sign-up" className="text-center">Create an account</Link>
            </div>
        </div>
    )
}

export default Login;