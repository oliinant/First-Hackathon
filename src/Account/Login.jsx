import { LoginInput } from "./LoginInput";


function Login() {
    const [inputValues, setInputValues] = useState([]);

    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col p-[20px]">
            <h1 className="text-center font-bold text-4xl mb-[15px]">Login</h1>

                <form action="">
                    <LoginInput />
                </form>
            </div>
        </div>
    )
}

export default Login;