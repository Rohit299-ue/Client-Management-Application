import { useNavigate } from 'react-router-dom'
import ActionCard from './ui/ActionCard'
import MeetingCard from './ui/MeetingCard'
import logo from '../assets/logo.svg'

const Dashboard = () => {
  const navigate = useNavigate()

  const featureCards = [
    {
      id: 'nda',
      title: 'Sign NDA',
      icon: '📝',
      description: 'Review and sign non-disclosure agreements',
      path: '/sign-nda'
    },
    {
      id: 'agreement',
      title: 'Agreement Download',
      icon: '📄',
      description: 'Download your service agreements',
      path: '/agreement-download'
    },
    {
      id: 'tracker',
      title: 'Project Tracker',
      icon: '📊',
      description: 'Track your project progress',
      featured: true,
      path: '/project-tracker'
    },
    {
      id: 'bug',
      title: 'Bug',
      icon: '🐛',
      description: 'Report and track bugs',
      path: '/bug-report'
    },
    {
      id: 'invoice',
      title: 'Invoice',
      icon: '💰',
      description: 'View and download invoices',
      path: '/invoice'
    },
    {
      id: 'support',
      title: 'Support',
      icon: '💬',
      description: 'Get help from our support team',
      path: '/support'
    }
  ]

  const scheduledMeetings = [
    {
      id: 1,
      date: 'Mon, Feb 3',
      title: 'Project Kickoff Meeting',
      time: '10:00 AM - 11:00 AM IST',
      platform: 'Zoom'
    },
    {
      id: 2,
      date: 'Wed, Feb 5',
      title: 'Design Review Session',
      time: '2:00 PM - 3:30 PM IST',
      platform: 'Teams'
    },
    {
      id: 3,
      date: 'Fri, Feb 7',
      title: 'Weekly Status Update',
      time: '9:00 AM - 9:30 AM IST',
      platform: 'Meet'
    },
    {
      id: 4,
      date: 'Mon, Feb 10',
      title: 'Client Feedback Discussion',
      time: '3:00 PM - 4:00 PM IST',
      platform: 'Zoom'
    }
  ]

  const handleCardClick = (path) => {
    navigate(path)
  }

  const handleMeetingClick = (meetingId) => {
    console.log('Meeting clicked:', meetingId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-3">
            Dashboard
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium">Access your tools and resources</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {featureCards.map((card) => (
            <ActionCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              description={card.description}
              featured={card.featured}
              onClick={() => handleCardClick(card.path)}
            />
          ))}
        </div>

        {/* Scheduled Meetings Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-3">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-primary-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Scheduled Meetings
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-2">Your upcoming meetings and calls</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 self-start sm:self-auto flex items-center space-x-2 group">
              <span>View All</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Meetings List */}
          <div className="space-y-6">
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
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30 p-7 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-blue-500/20 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-2">
                  Active Projects
                </p>
                <p className="text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">3</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-4xl">📁</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-white to-green-50/30 p-7 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-2xl hover:border-green-300 hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-2">
                  Pending Tasks
                </p>
                <p className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">7</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-4xl">✓</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50/30 p-7 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-2xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-2">
                  Support Tickets
                </p>
                <p className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">2</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-4xl">💬</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 mt-20 border-t border-gray-200/50 bg-gradient-to-r from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Clint UI" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-base">
              <span className="text-gray-600">Powered by</span>
              <span className="font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Tech Solutions India Pvt Ltd</span>
            </div>
            <p className="text-xs text-gray-400">© 2026 Client Management Application. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
