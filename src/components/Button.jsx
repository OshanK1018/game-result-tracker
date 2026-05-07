function Button({ handleClick, text}) {
    return(
        <button 
            onClick={handleClick}
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-semibold"
        >
            {text}
        </button>
    );
}

export default Button;