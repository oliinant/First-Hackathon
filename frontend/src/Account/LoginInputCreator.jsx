import { LoginInput } from "./LoginInput"

export const LoginInputCreator = (inputComponentHash, inputValues, setInputValues, signUpErrors, signUpInputValues) => {
    return Object.entries(inputComponentHash).map(([inputName, inputAttributes], i) => {
        return (<LoginInput
            key={inputName}
            name={inputName}
            id={inputAttributes.id}
            type={inputAttributes.type}
            inputValues={inputValues}
            labelText={inputAttributes.labelText}
            setInputValues={setInputValues}
            signUpError={signUpErrors?.[inputName]}
            signUpInputValue={signUpInputValues?.[inputName]}
            i={i}
        />

        );
    });
};
    