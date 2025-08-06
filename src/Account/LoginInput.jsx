import { useState } from "react"

export const LoginInput = ({ id, type, value, name, setValue }) => {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <div className={`flex relative w-[300px] h-[50px] pl-[10px] border-[3px] ${inputFocus ? "border-black/100": "border-black/0"} rounded-[10px] `}>
            <input
                id="input"
                type={type}
                value={value}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={(e) => setValue(e.target.value)}
                    className={`align-center w-[270px] font-bold focus:outline-none`} 

                />
                <label 
                    htmlFor="input"
                    className={`absolute top-1/2 -translate-y-1/2 left-[10px] cursor-text transition-opacity duration-200 
                        ${inputFocus || value ? "opacity-0" : "opacity-100"}`}
            >
                {name}
            </label>
        </div>
    )
}