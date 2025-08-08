import { useState } from "react";
import { LoginInputCreator } from "./LoginInputCreator";
import { RememberMe } from "./RememberMe";
import { LoginButton } from "./LoginButton";
import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import ErrorHandling from "./ErrorHandling";

function SignUp() {
    const [signUpInputValues, setSignUpInputValues] = useState({"username": "", "email": "", "password": "", "confirmPassword": ""})
    const [signUpErrors, setSignUpErrors] = useState({"username": false, "email": false, "password": false, "confirmPassword": false})
    console.log(signUpErrors)
    const SignUpInputHash = {
        "username": {"id": "username", "type": "text", "labelText": "Username"},
        "email": {"id": "email", "type": "text", "labelText": "Email"},
        "password": {"id": "password", "type": "password", "labelText": "Password"},
        "confirmPassword": {"id": "confirmPassword", "type": "password", "labelText": "Confirm Password"},
    }

    ErrorHandling(signUpInputValues, setSignUpErrors)

    const InputElList = LoginInputCreator(SignUpInputHash, signUpInputValues, setSignUpInputValues)

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
                <LoginHeader confirmButtonName="Sign Up"/>

                <form action="">
                    {InputElList}

                    <RememberMe position="pl-[15px]"/>

                    <LoginButton buttonName="Create account"/>
                </form>

                <Link to="/login" className="text-center">Already have an account?</Link>
            </div>   
        </div>
    )
}

export default SignUp;