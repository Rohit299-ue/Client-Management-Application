const ActionCard = ({ 
  title, 
  icon, 
  description,
  onClick,
  featured = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group
        ${featured 
          ? 'bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50/50' 
          : 'bg-white'
        }
        p-8 rounded-2xl shadow-xl border-2 
        ${featured ? 'border-primary-300 shadow-primary-200/30' : 'border-gray-200'}
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-primary-400
        active:translate-y-0 active:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2
        text-center w-full cursor-pointer
        ${className}
      `}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-primary-400/30 via-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Popular Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-30 animate-bounce">
          <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
            <span>⭐</span>
            <span>Popular</span>
          </div>
        </div>
      )}
      
      {/* Navigation Arrow */}
      <div className="absolute top-4 right-4 z-30">
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:bg-primary-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-primary-500/10 group-hover:via-blue-500/5 group-hover:to-indigo-500/10 transition-all duration-700 rounded-2xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20">
        {/* Icon Container */}
        {icon && (
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Glow Effect Behind Icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-blue-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Icon Background */}
              <div className={`
                relative
                ${featured ? 'w-28 h-28 sm:w-32 sm:h-32' : 'w-24 h-24 sm:w-28 sm:h-28'}
                bg-gradient-to-br from-white via-primary-50 to-blue-100 
                rounded-3xl flex items-center justify-center 
                shadow-lg group-hover:shadow-2xl 
                border-2 border-white/50
                group-hover:scale-110 group-hover:rotate-6 
                transition-all duration-500
              `}>
                <span className={`${featured ? 'text-6xl sm:text-7xl' : 'text-5xl sm:text-6xl'} filter drop-shadow-lg`}>
                  {icon}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-3 leading-tight group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        )}
      </div>
    </button>
  )
}

export default ActionCard
