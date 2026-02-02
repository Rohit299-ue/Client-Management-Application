const AuthCard = ({ 
  children, 
  title, 
  subtitle,
  logo,
  footer,
  maxWidth = 'md'
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
        {/* Main Card */}
        <div className="bg-white rounded-card shadow-card-lg p-6 sm:p-8 border border-gray-100">
          {/* Header Section */}
          {(logo || title || subtitle) && (
            <div className="text-center mb-6 sm:mb-8">
              {logo && (
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mb-4 shadow-lg">
                  {logo}
                </div>
              )}
              {title && (
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          <div>
            {children}
          </div>
        </div>

        {/* Footer */}
        {footer && (
          <div className="text-center mt-4 sm:mt-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthCard
