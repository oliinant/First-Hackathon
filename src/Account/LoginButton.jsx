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
            className="w-[300px] h-[50px] bg-black rounded-[10px] cursor-pointer mb-[15px] hover:bg-[#080808]"
        >
            <span className="text-white text-xl font-bold">{buttonName}</span>
        </button>
    )
}