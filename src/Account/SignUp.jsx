import { useState } from "react";
import { LoginInputCreator } from "./LoginInputCreator";
import { RememberMe } from "./RememberMe";
import { LoginButton } from "./LoginButton";
import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";

function SignUp() {
    const [signUpInputLoginValues, setSignUpInputLoginValues] = useState(["", "", "", ""])
    const SignUpInputHash = {
        "username": {"id": "username", "type": "text", "labelText": "Username"},
        "email": {"id": "email", "type": "text", "labelText": "Email"},
        "password": {"id": "password", "type": "password", "labelText": "Password"},
        "confirmPassword": {"id": "confirmPassword", "type": "password", "labelText": "Confirm Password"},
    }

    const InputElList = LoginInputCreator(SignUpInputHash, signUpInputLoginValues, setSignUpInputLoginValues)

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
                <LoginHeader confirmButtonName="Sign Up"/>

                <form action="">
                    {InputElList}

                    <RememberMe />

                    <LoginButton buttonName="Create account"/>
                </form>

                <Link to="/login" className="text-center">Already have an account?</Link>
            </div>   
        </div>
    )
}

export default SignUp;