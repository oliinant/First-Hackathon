import { useState } from "react"

export const RememberMe = ({ rememberMe, setRememberMe }) => {

    return (
        <div className="flex items-center justify-end flex-row-reverse border-box">
            <input
                id="remember-me-checkbox"
                type="checkbox"
                className="peer cursor-pointer opacity-0 absolute"
            />
            <label
                htmlFor="remember-me-checkbox"
                className="relative 
                cursor-pointer
                select-none
                pl-[1.2em]
                before:absolute 
                before:w-[1em]
                before:h-[1em]
                before:left-0
                before:top-1/2
                before:-translate-y-1/2
                before:rounded-[0.2em]

                peer-checked:before:bg-black
                checkmark-icon"
                >
                Remember Me
            </label>
        </div>
    )
}