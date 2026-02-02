const InputField = ({ 
  id,
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error,
  icon,
  className = ''
}) => {
  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 
            border rounded-input
            text-gray-900 placeholder-gray-400
            bg-white
            transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            hover:border-gray-400
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${icon ? 'pr-12' : ''}
          `}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default InputField
