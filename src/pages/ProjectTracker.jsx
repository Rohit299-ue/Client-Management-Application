import { useNavigate } from 'react-router-dom'

const ProjectTracker = () => {
  const navigate = useNavigate()
  const project = {
    name: 'E-Commerce Platform Development',
    startDate: 'Jan 1, 2026',
    endDate: 'Mar 31, 2026',
    status: 'In Progress',
    completion: 65
  }

  const milestones = [
    { id: 1, title: 'Project Kickoff', date: 'Jan 1, 2026', status: 'Completed' },
    { id: 2, title: 'Design Phase', date: 'Jan 15, 2026', status: 'Completed' },
    { id: 3, title: 'Development Phase', date: 'Feb 1, 2026', status: 'In Progress' },
    { id: 4, title: 'Testing & QA', date: 'Mar 1, 2026', status: 'Upcoming' },
    { id: 5, title: 'Launch', date: 'Mar 31, 2026', status: 'Upcoming' }
  ]

  const tasks = {
    completed: 24,
    inProgress: 8,
    pending: 5
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
          Project Progress
        </h1>
        <p className="text-gray-600">Track your project milestones and tasks</p>
      </div>

      {/* Project Overview Card */}
      <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Start: {project.startDate}</span>
              <span>•</span>
              <span>End: {project.endDate}</span>
            </div>
          </div>
          <span className="mt-4 sm:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm">
            {project.status}
          </span>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-2xl font-bold text-primary-600">{project.completion}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-primary-600 to-blue-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${project.completion}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Task Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 hover:shadow-card-hover transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Completed</p>
              <p className="text-3xl font-bold text-green-600">{tasks.completed}</p>
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 hover:shadow-card-hover transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">In Progress</p>
              <p className="text-3xl font-bold text-blue-600">{tasks.inProgress}</p>
            </div>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 hover:shadow-card-hover transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">Pending</p>
              <p className="text-3xl font-bold text-gray-600">{tasks.pending}</p>
            </div>
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📋</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="bg-white rounded-card shadow-card border border-gray-100 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Project Milestones</h3>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="flex items-start">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`w-4 h-4 rounded-full ${
                    milestone.status === 'Completed'
                      ? 'bg-green-500'
                      : milestone.status === 'In Progress'
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                ></div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
                )}
              </div>

              {/* Milestone Content */}
              <div className="flex-1 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{milestone.title}</h4>
                    <p className="text-sm text-gray-600">{milestone.date}</p>
                  </div>
                  <span
                    className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                      milestone.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : milestone.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectTracker
