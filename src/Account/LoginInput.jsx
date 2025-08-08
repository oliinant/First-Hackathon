import { useState } from "react"



export const LoginInput = ({ id, name, type, inputValues, setInputValues, labelText, signUpError, signUpInputValue }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const showError = signUpError && signUpInputValue !== "";
    console.log(showError)


    return (
        <div 
        className={`flex relative w-[300px] h-[50px] pl-[10px] mb-[17px] border-[3px] rounded-[10px]`}
        style={{ 
            borderColor: inputFocus 
            ? (showError ? "rgba(78, 7, 7, 1)" : "rgba(0, 0, 0, 1)")
            : "rgba(0, 0, 0, 0)"
        }}>
            <input
                id={id}
                name={name}
                type={type}
                value={inputValues[name]}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={(e) => {
                    setInputValues({...inputValues,
                    [name]: e.target.value
                });
                }}
                className={`align-center w-[270px] font-bold ${showError ? "text-[#4E0707]" : "text-black"} focus:outline-none`} 

            />
            <label 
                    htmlFor={id}
                    className={`absolute top-1/2 -translate-y-1/2 left-[10px] cursor-text pointer-events-none select-none transition-opacity duration-200 
                        ${inputValues[name] ? "opacity-0" : "opacity-100"}`}
            >
                {labelText}
            </label>
        </div>
    )
}