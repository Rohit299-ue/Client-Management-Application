import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BugReport = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium'
  })

  const reportedIssues = [
    {
      id: 1,
      title: 'Login button not responding on mobile',
      status: 'In Progress',
      dateSubmitted: 'Jan 28, 2026',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Dashboard loading slowly',
      status: 'Open',
      dateSubmitted: 'Jan 25, 2026',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Export PDF feature not working',
      status: 'Resolved',
      dateSubmitted: 'Jan 20, 2026',
      priority: 'High'
    },
    {
      id: 4,
      title: 'Typo in email notification',
      status: 'Resolved',
      dateSubmitted: 'Jan 15, 2026',
      priority: 'Low'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Bug report submitted:', formData)
    // Reset form
    setFormData({ title: '', description: '', priority: 'Medium' })
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
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Report an Issue
        </h1>
        <p className="text-gray-600">Help us improve by reporting bugs and issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bug Submission Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Submit New Issue</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Issue Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Brief description of the issue"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide detailed information about the issue..."
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Screenshot (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Submit Issue
              </button>
            </form>
          </div>
        </div>

        {/* Reported Issues List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Your Reported Issues</h3>
            <div className="space-y-4">
              {reportedIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                    {issue.title}
                  </h4>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        issue.status === 'Resolved'
                          ? 'bg-green-100 text-green-700'
                          : issue.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {issue.status}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        issue.priority === 'High'
                          ? 'bg-red-100 text-red-700'
                          : issue.priority === 'Medium'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {issue.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{issue.dateSubmitted}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BugReport
