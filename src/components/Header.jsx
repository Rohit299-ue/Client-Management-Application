import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import profileIcon from '../assets/profile-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'

const Header = ({ onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center hover:scale-105 transition-transform duration-200 group"
          >
            <img src={logo} alt="Clint UI" className="h-10 w-auto" />
          </button>

          {/* Right: Welcome Message & Profile */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="hidden md:block text-sm text-gray-700">
              Welcome, <span className="font-semibold text-gray-800">Client</span>
            </span>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 active:bg-primary-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center ring-2 ring-primary-300 shadow-md">
                  <span className="text-white font-bold text-sm">CL</span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    showProfileMenu ? 'rotate-180' : ''
                  }`}
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
                  <div className="fixed inset-0 z-10" onClick={() => setShowProfileMenu(false)} />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-20 overflow-hidden">
                    {/* Dashboard */}
                    <button
                      onClick={() => {
                        setShowProfileMenu(false)
                        navigate('/dashboard')
                      }}
                      className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 active:bg-primary-100 transition-all duration-200 flex items-center space-x-4 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                        <span className="text-white text-xl">🏠</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">Dashboard</span>
                        <span className="text-xs text-gray-500">Go to home</span>
                      </div>
                    </button>

                    {/* Profile */}
                    <button
                      onClick={() => {
                        setShowProfileMenu(false)
                        navigate('/profile')
                      }}
                      className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 active:bg-purple-100 transition-all duration-200 flex items-center space-x-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 overflow-hidden">
                        <img src={profileIcon} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">Profile</span>
                        <span className="text-xs text-gray-500">View your profile</span>
                      </div>
                    </button>

                    {/* Settings */}
                    <button
                      onClick={() => {
                        setShowProfileMenu(false)
                        navigate('/settings')
                      }}
                      className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 active:bg-indigo-100 transition-all duration-200 flex items-center space-x-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-90 transition-all duration-300 overflow-hidden">
                        <img src={settingsIcon} alt="Settings" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">Settings</span>
                        <span className="text-xs text-gray-500">Manage preferences</span>
                      </div>
                    </button>

                    <hr className="my-2 border-gray-100" />

                    {/* Logout */}
                    <button
                      onClick={() => {
                        setShowProfileMenu(false)
                        onLogout()
                      }}
                      className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 active:bg-red-100 transition-all duration-200 flex items-center space-x-4 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                        <span className="text-white text-xl">🚪</span>
                      </div>
                      <div>
                        <span className="font-semibold text-red-600 block">Logout</span>
                        <span className="text-xs text-red-400">Sign out of account</span>
                      </div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
