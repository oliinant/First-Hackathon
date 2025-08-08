import { ErrorMsg } from "./ErrorMsgs";

export const ErrorMsgCreator = (ErrorMsgHash, signUpErrors, signUpInputValues) => {
    return Object.entries(ErrorMsgHash).map(([key, errorText], i) => {
        return (<ErrorMsg
            key={key + "Msg"} 
            errorText={errorText}
            signUpError={signUpErrors[key]}
            signUpInputValue={signUpInputValues[key]}
            />
        )
    });
}