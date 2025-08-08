import { useState } from "react";
import { LoginInputCreator } from "./LoginInputCreator";
import { RememberMe } from "./RememberMe";
import { LoginButton } from "./LoginButton";
import { Link } from "react-router-dom";
import { LoginHeader } from "./LoginHeader";
import ErrorHandling from "./ErrorHandling";
import { ErrorMsgCreator } from "./ErrorMsgCreator";
import { InputWithErrorMsgCreator } from "./InputWithErrorMsgCreator";
import signUpButtonErrorHandler from "./SignUpButtonErrorHandler";

function SignUp() {
    const [signUpInputValues, setSignUpInputValues] = useState({"username": "", "email": "", "password": "", "confirmPassword": ""})

    const [signUpErrors, setSignUpErrors] = useState({"username": false, "email": false, "password": false, "confirmPassword": false})
    
    ErrorHandling(signUpInputValues, setSignUpErrors)

    const SignUpInputHash = {
        "username": {"id": "username", "type": "text", "labelText": "Username"},
        "email": {"id": "email", "type": "text", "labelText": "Email"},
        "password": {"id": "password", "type": "password", "labelText": "Password"},
        "confirmPassword": {"id": "confirmPassword", "type": "password", "labelText": "Confirm Password"},
    }

    const ErrorMsgHash = {
        "username": "You must use 3-25 letters, no symbols",
        "email": "You must enter a valid email",
        "password": "You must include 8+ chars, letter, digit, symbol",
        "confirmPassword": "You must match the password"
    }

    const InputElList = LoginInputCreator(SignUpInputHash, signUpInputValues, setSignUpInputValues, signUpErrors, signUpInputValues)
    const ErrorMsgElList = ErrorMsgCreator(ErrorMsgHash, signUpErrors, signUpInputValues)

    const InputErrorMsgPairHash = {
        "usernamePair": {"input": InputElList[0], "errorMsg": ErrorMsgElList[0]},
        "emailPair": {"input": InputElList[1], "errorMsg": ErrorMsgElList[1]},
        "passwordPair": {"input": InputElList[2], "errorMsg": ErrorMsgElList[2]},
        "confirmPasswordPair": {"input": InputElList[3], "errorMsg": ErrorMsgElList[3]}
    }
    
    const signUpHasErrors = signUpButtonErrorHandler(signUpErrors)

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
                <LoginHeader confirmButtonName="Sign Up"/>

                <form action="">
                    <InputWithErrorMsgCreator InputErrorMsgPairHash={InputErrorMsgPairHash} />

                    <RememberMe position="pl-[15px]"/>

                    <LoginButton buttonName="Create account" signUpHasErrors={signUpHasErrors}/>
                </form>

                <Link to="/login" className="text-center">Already have an account?</Link>
            </div>   
        </div>
    )
}

export default SignUp;