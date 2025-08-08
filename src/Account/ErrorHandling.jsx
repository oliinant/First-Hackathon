import { useEffect } from "react"

export default function ErrorHandling(signUpInputValues, setSignUpErrors) {
    const usernameRegex = /^[a-zA-Z]{3,}[a-zA-Z0-9]{0,22}$/;             // First three must be char max len 25
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    // Valid Email (not one that exist but could)
    const passwordRegex = /(?=.*[^a-zA-Z0-9])(?=.*[0-9])^.{8,70}$/ // Must have one char, num, and special char max 70

    const regexValidateHash = {
        "username": usernameRegex, 
        "email": emailRegex, 
        "password": passwordRegex, 
        "confirmPassword": passwordRegex
    }

    

    useEffect(() => {
        const newErrors = {}

        Object.entries(regexValidateHash).forEach(([regexName, regex]) => {
            const isValid = regex.test(signUpInputValues[regexName])
            newErrors[regexName] = !isValid;

        })
        newErrors.confirmPassword = signUpInputValues["password"] !== signUpInputValues["confirmPassword"]
        
        setSignUpErrors(newErrors)
    }, [signUpInputValues])
}