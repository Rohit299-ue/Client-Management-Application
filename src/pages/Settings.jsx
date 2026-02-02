import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import settingsIcon from '../assets/settings-icon.svg'

const Settings = () => {
  const navigate = useNavigate()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    projectUpdates: true,
    meetingReminders: true,
    weeklyReports: false,
    darkMode: false,
    language: 'English',
    timezone: 'IST',
    twoFactorAuth: false
  })

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] })
  }

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors duration-200 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">Back to Dashboard</span>
      </button>

      {/* Page Header */}
      <div className="mb-8 flex items-center space-x-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
          <img src={settingsIcon} alt="Settings" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Settings
          </h1>
          <p className="text-gray-600">Manage your preferences and account settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <nav className="space-y-2">
              <button className="w-full text-left px-4 py-3 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 rounded-xl font-semibold flex items-center space-x-3">
                <span className="text-xl">🔔</span>
                <span>Notifications</span>
              </button>
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium flex items-center space-x-3 transition-colors duration-200">
                <span className="text-xl">🎨</span>
                <span>Appearance</span>
              </button>
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium flex items-center space-x-3 transition-colors duration-200">
                <span className="text-xl">🔒</span>
                <span>Security</span>
              </button>
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium flex items-center space-x-3 transition-colors duration-200">
                <span className="text-xl">🌍</span>
                <span>Language & Region</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h3>
            
            <div className="space-y-5">
              {/* Email Notifications */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Notifications</h4>
                  <p className="text-sm text-gray-600">Receive email updates about your account</p>
                </div>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.emailNotifications ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.emailNotifications ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Project Updates */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Project Updates</h4>
                  <p className="text-sm text-gray-600">Get notified about project milestones</p>
                </div>
                <button
                  onClick={() => handleToggle('projectUpdates')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.projectUpdates ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.projectUpdates ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Meeting Reminders */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Meeting Reminders</h4>
                  <p className="text-sm text-gray-600">Reminders 15 minutes before meetings</p>
                </div>
                <button
                  onClick={() => handleToggle('meetingReminders')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.meetingReminders ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.meetingReminders ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Weekly Reports */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Weekly Reports</h4>
                  <p className="text-sm text-gray-600">Receive weekly activity summaries</p>
                </div>
                <button
                  onClick={() => handleToggle('weeklyReports')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.weeklyReports ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.weeklyReports ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Appearance</h3>
            
            <div className="space-y-5">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Dark Mode</h4>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <button
                  onClick={() => handleToggle('darkMode')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.darkMode ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.darkMode ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Security</h3>
            
            <div className="space-y-5">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <button
                  onClick={() => handleToggle('twoFactorAuth')}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                    settings.twoFactorAuth ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                      settings.twoFactorAuth ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Change Password */}
              <div>
                <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Language & Region */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Language & Region</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Language */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                >
                  <option>IST - Indian Standard Time</option>
                  <option>PST - Pacific Standard Time</option>
                  <option>EST - Eastern Standard Time</option>
                  <option>GMT - Greenwich Mean Time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
