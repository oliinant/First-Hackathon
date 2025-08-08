export const LoginButton = ({ buttonName, signUpHasErrors=null }) => {
    const handleClick = (e) => {
        if (signUpHasErrors) {
            e.preventDefault();
        }
    }

    return (
        <button 
            type="submit"
            onClick={handleClick}
            className={`w-[300px] h-[50px] ${signUpHasErrors ? "cursor-not-allowed bg-white border-[#D4D4D4] border-[3px]": "cursor-pointer bg-black hover:bg-[#080808]"} rounded-[10px] mb-[15px]`}
        >
            <span className={`${signUpHasErrors ? "text-[#D4D4D4]" : "text-white"} text-xl font-bold`}>{buttonName}</span>
        </button>
    )
}