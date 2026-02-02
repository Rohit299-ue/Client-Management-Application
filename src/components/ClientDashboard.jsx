import { useState } from 'react'
import ActionCard from './ui/ActionCard'
import MeetingCard from './ui/MeetingCard'

const ClientDashboard = ({ onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const featureCards = [
    {
      id: 'nda',
      title: 'Sign NDA',
      icon: '📝',
      description: 'Review and sign non-disclosure agreements'
    },
    {
      id: 'agreement',
      title: 'Agreement Download',
      icon: '📄',
      description: 'Download your service agreements'
    },
    {
      id: 'tracker',
      title: 'Project Tracker',
      icon: '📊',
      description: 'Track your project progress',
      featured: true
    },
    {
      id: 'bug',
      title: 'Bug',
      icon: '🐛',
      description: 'Report and track bugs'
    },
    {
      id: 'invoice',
      title: 'Invoice',
      icon: '💰',
      description: 'View and download invoices'
    },
    {
      id: 'support',
      title: 'Support',
      icon: '💬',
      description: 'Get help from our support team'
    }
  ]

  const scheduledMeetings = [
    {
      id: 1,
      date: 'Mon, Feb 3',
      title: 'Project Kickoff Meeting',
      time: '10:00 AM - 11:00 AM',
      platform: 'Zoom'
    },
    {
      id: 2,
      date: 'Wed, Feb 5',
      title: 'Design Review Session',
      time: '2:00 PM - 3:30 PM',
      platform: 'Teams'
    },
    {
      id: 3,
      date: 'Fri, Feb 7',
      title: 'Weekly Status Update',
      time: '9:00 AM - 9:30 AM',
      platform: 'Meet'
    },
    {
      id: 4,
      date: 'Mon, Feb 10',
      title: 'Client Feedback Discussion',
      time: '3:00 PM - 4:00 PM',
      platform: 'Zoom'
    }
  ]

  const handleCardClick = (cardId) => {
    console.log('Card clicked:', cardId)
    // Handle navigation or action here
  }

  const handleMeetingClick = (meetingId) => {
    console.log('Meeting clicked:', meetingId)
    // Handle meeting details or join meeting
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Company Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">ClientHub</span>
            </div>

            {/* Right: Welcome Message & Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="hidden md:block text-sm text-gray-700">
                Welcome, <span className="font-semibold text-gray-800">Client</span>
              </span>
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center ring-2 ring-primary-200">
                    <span className="text-primary-700 font-bold text-sm">CL</span>
                  </div>
                  <svg 
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-card-lg border border-gray-100 py-2 z-20">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false)
                          console.log('Profile clicked')
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 active:bg-primary-100 transition-colors duration-150 flex items-center space-x-3 rounded-lg mx-1"
                      >
                        <span className="text-lg">👤</span>
                        <span className="font-medium">Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowProfileMenu(false)
                          console.log('Settings clicked')
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 active:bg-primary-100 transition-colors duration-150 flex items-center space-x-3 rounded-lg mx-1"
                      >
                        <span className="text-lg">⚙️</span>
                        <span className="font-medium">Settings</span>
                      </button>
                      <hr className="my-2 border-gray-100" />
                      <button
                        onClick={() => {
                          setShowProfileMenu(false)
                          onLogout()
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors duration-150 flex items-center space-x-3 rounded-lg mx-1"
                      >
                        <span className="text-lg">🚪</span>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">Access your tools and resources</p>
        </div>

        {/* Feature Cards Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {featureCards.map((card) => (
            <ActionCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              description={card.description}
              featured={card.featured}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        {/* Scheduled Meetings Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">Scheduled Meetings</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1.5">Your upcoming meetings and calls</p>
            </div>
            <button className="text-primary-600 hover:text-primary-700 active:text-primary-800 font-semibold text-sm flex items-center space-x-1.5 self-start sm:self-auto transition-colors duration-200 group">
              <span>View All</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Meetings List - Responsive */}
          <div className="space-y-5">
            {scheduledMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                date={meeting.date}
                title={meeting.title}
                time={meeting.time}
                platform={meeting.platform}
                onClick={() => handleMeetingClick(meeting.id)}
              />
            ))}
          </div>

          {/* Empty State (if no meetings) */}
          {scheduledMeetings.length === 0 && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-card p-12 text-center border border-gray-200">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-gray-600 text-lg font-medium">No scheduled meetings</p>
              <p className="text-gray-500 text-sm mt-2">Your upcoming meetings will appear here</p>
            </div>
          )}
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <div className="relative overflow-hidden bg-white p-6 sm:p-7 rounded-card shadow-card border border-gray-100 hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wider">Active Projects</p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">3</p>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <span className="text-3xl sm:text-4xl">📁</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white p-6 sm:p-7 rounded-card shadow-card border border-gray-100 hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wider">Pending Tasks</p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">7</p>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <span className="text-3xl sm:text-4xl">✓</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white p-6 sm:p-7 rounded-card shadow-card border border-gray-100 hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wider">Support Tickets</p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">2</p>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <span className="text-3xl sm:text-4xl">💬</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 mt-16 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-600">We love</span>
              <span className="font-bold text-primary-600">Acme Corporation</span>
              <span className="text-red-500 text-lg animate-pulse">❤️</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by ClientHub</span>
            </div>
            <p className="text-xs text-gray-400">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ClientDashboard
