import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'Medium'
  })

  const supportTickets = [
    {
      id: 1,
      title: 'Login Issue - Cannot access dashboard',
      status: 'Open',
      dateSubmitted: 'Feb 1, 2026',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Invoice download not working',
      status: 'In Progress',
      dateSubmitted: 'Jan 28, 2026',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Request for project timeline update',
      status: 'Resolved',
      dateSubmitted: 'Jan 25, 2026',
      priority: 'Low'
    },
    {
      id: 4,
      title: 'NDA signature verification needed',
      status: 'Responded',
      dateSubmitted: 'Jan 20, 2026',
      priority: 'Medium'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Support ticket submitted:', formData)
    // Reset form
    setFormData({ subject: '', description: '', priority: 'Medium' })
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
          Customer Support
        </h1>
        <p className="text-gray-600">Get help from our support team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Support Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Submit Ticket Form */}
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Submit a Support Ticket</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide detailed information about your issue..."
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachment (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors duration-200">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* My Support Tickets */}
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">My Support Tickets</h2>
            
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 rounded-lg p-5 hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{ticket.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {ticket.dateSubmitted}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            ticket.priority === 'High'
                              ? 'bg-red-100 text-red-700'
                              : ticket.priority === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        ticket.status === 'Resolved'
                          ? 'bg-green-100 text-green-700'
                          : ticket.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : ticket.status === 'Responded'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1 transition-colors duration-200">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Contact Options */}
        <div className="space-y-6">
          {/* Live Chat */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-card shadow-card p-6 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Live Chat</h3>
            <p className="text-sm text-white/90 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="w-full px-4 py-2.5 bg-white text-primary-600 rounded-lg font-semibold hover:bg-white/95 transition-colors duration-200">
              Start Chat
            </button>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Send us an email and we'll respond within 24 hours
            </p>
            <a
              href="mailto:support@techsolutions.in"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
            >
              <span>support@techsolutions.in</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Help Center */}
          <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Help Center</h3>
            <p className="text-sm text-gray-600 mb-4">
              Browse our knowledge base and FAQs
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200">
              <span>Visit Help Center</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Support Hours */}
          <div className="bg-gray-50 rounded-card border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Support Hours (IST)</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9:30 AM - 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
