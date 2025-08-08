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
            className={`w-[300px] h-[50px] border-[3px] ${signUpHasErrors ? "cursor-not-allowed": "cursor-pointer"} bg-black hover:bg-[#080808] rounded-[10px] mb-[15px]`}
        >
            <span className="text-white text-xl font-bold" >{buttonName}</span>
        </button>
    )
}