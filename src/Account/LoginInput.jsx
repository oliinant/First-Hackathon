import { useState } from "react"

export const LoginInput = ({ id, type, inputValues, setInputValues, labelText, i }) => {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className={`flex relative w-[300px] h-[50px] pl-[10px] mb-[15px] border-[3px] ${inputFocus ? "border-black/100": "border-black/0"} rounded-[10px] `}>
            <input
                id={id}
                type={type}
                value={inputValues[i]}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={(e) => {
                    const newValues = [...inputValues];
                    newValues[i] = e.target.value;
                    setInputValues(newValues);
                }}
                    className={`align-center w-[270px] font-bold focus:outline-none`} 

                />
                <label 
                    htmlFor={id}
                    className={`absolute top-1/2 -translate-y-1/2 left-[10px] cursor-text transition-opacity duration-200 
                        ${inputFocus || inputValues[i] ? "opacity-0" : "opacity-100"}`}
            >
                {labelText}
            </label>
        </div>
    )
}