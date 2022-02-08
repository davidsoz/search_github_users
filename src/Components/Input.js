
function Input({onChange, value}){
    return (
        <input
			className="shadow border rounded w-3/12 py-2 m-5 
			px-3 text-gray-700 leading-tight 
			focus:outline-none focus:shadow-outline"
            placeholder="search"
			type='text'
			value={value}
			onChange={onChange}
		/>
    )
}

export default Input;