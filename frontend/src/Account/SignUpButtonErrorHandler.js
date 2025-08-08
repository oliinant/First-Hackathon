export default function signUpButtonErrorHandler(errorHash) {
    let signUpHasErrors = false

    for (const [key, error] of Object.entries(errorHash)) {
        if (error) {
            signUpHasErrors = true
        }
    }

    return signUpHasErrors
}  