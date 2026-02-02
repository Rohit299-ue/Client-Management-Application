const MeetingCard = ({ 
  date, 
  title, 
  time, 
  platform,
  onClick,
  className = ''
}) => {
  // Format date if it's a Date object
  const formatDate = (dateInput) => {
    if (dateInput instanceof Date) {
      return dateInput.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    }
    return dateInput
  }

  // Parse date to get day and month
  const parsedDate = formatDate(date)
  const [weekday, month, day] = parsedDate.split(/[\s,]+/)

  // Get platform color
  const getPlatformColor = (platformName) => {
    const platforms = {
      zoom: 'bg-blue-500',
      teams: 'bg-purple-500',
      meet: 'bg-green-500',
      skype: 'bg-cyan-500',
      default: 'bg-indigo-500'
    }
    
    const key = platformName?.toLowerCase() || 'default'
    return platforms[key] || platforms.default
  }

  const platformColor = platform ? getPlatformColor(platform) : 'bg-indigo-500'

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl p-4 border border-gray-200 shadow-sm
        hover:shadow-md hover:border-gray-300 transition-all duration-200
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Date Circle */}
        <div className="shrink-0">
          <div className={`w-14 h-14 ${platformColor} rounded-full flex flex-col items-center justify-center`}>
            <span className="text-[9px] font-semibold text-white/80 uppercase">
              {weekday}
            </span>
            <span className="text-xl font-bold text-white leading-none">
              {day}
            </span>
          </div>
        </div>

        {/* Meeting Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-gray-900 mb-1">
            {title}
          </h4>
          <p className="text-sm text-gray-500">
            {time}
          </p>
        </div>

        {/* Platform Badge */}
        {platform && (
          <div className="shrink-0">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
              {platform}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingCard
