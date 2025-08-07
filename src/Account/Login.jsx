import { useState } from "react";
import { LoginInputCreator } from "./LoginInputCreator";
import { RememberMe } from "./RememberMe";


function Login() {
    const [inputValues, setInputValues] = useState(["", ""]);
    const [rememberMe, setRememberMe] = useState(false)

    const LoginInputHash = {
        "email": {"id": "email", "type": "text", "labelText": "Email"},
        "password": {"id": "password", "type":"password", "labelText": "Password"}
    }

    const InputElList = LoginInputCreator(LoginInputHash, inputValues, setInputValues)

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
                <h1 className="text-center font-bold text-4xl mb-[15px]">Login</h1>

                <form action="">
                    {InputElList}

                    <RememberMe
                        rememberMe={rememberMe}
                        setRememberMe={setRememberMe}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login;