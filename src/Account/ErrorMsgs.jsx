export const ErrorMsg = ({ errorText, signUpError, signUpInputValue}) => {
    return (
        <div className="absolute bottom-[-18px] pl-[8px]">
            <span className={`
            relative
            text-xs 
            text-[#4E0707] 
            w-[5px]
            pl-[1.3em]
            ${signUpError && signUpInputValue !== "" ? "opacity-100" : "opacity-0"}
            before:absolute
            before:left-0
            before:top-1/2
            before:-translate-y-1/2
            before:content-['']  
            before:w-[0.9em]
            before:h-[0.9em]
            before:rounded-[0.2em]
            before:bg-[#4E0707]
            before:rotate-45`}>
                {errorText}
            </span>
        </div>
    )
}