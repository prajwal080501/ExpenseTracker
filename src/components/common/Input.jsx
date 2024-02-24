const Input = ({ placeholder, name, label, className }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="block text-lg font-bold text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name={name}
                    id={name}
                    className={`shadow-sm p-3 bg-white outline-none ring-1 focus:ring-4 ease-linear focus:ring-blue-300  block w-full sm:text-sm border-gray-300 rounded-md ${className}`}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input;