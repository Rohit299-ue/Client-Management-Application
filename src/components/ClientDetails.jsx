const ClientDetails = ({ client, onBack }) => {
  if (!client) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg">No client selected</p>
        </div>
      </div>
    )
  }

  const activities = [
    { id: 1, type: 'meeting', title: 'Initial consultation call', date: '2024-01-28', time: '10:00 AM' },
    { id: 2, type: 'email', title: 'Sent project proposal', date: '2024-01-27', time: '2:30 PM' },
    { id: 3, type: 'note', title: 'Client requested additional features', date: '2024-01-26', time: '4:15 PM' },
  ]

  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65, deadline: '2024-03-15' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', progress: 20, deadline: '2024-05-20' },
    { id: 3, name: 'SEO Optimization', status: 'Completed', progress: 100, deadline: '2024-01-10' },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
      >
        <span>←</span>
        <span>Back to Clients</span>
      </button>

      {/* Client Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary-700 font-bold text-3xl">
                {client.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{client.name}</h1>
              <div className="mt-2 space-y-1">
                <div className="flex items-center space-x-2 text-gray-600">
                  <span>📧</span>
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span>📞</span>
                  <span>{client.phone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Edit Client
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-300 transition-colors">
              Send Email
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className={`inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full ${
              client.status === 'Active' 
                ? 'bg-green-100 text-green-800'
                : client.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {client.status}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Projects</p>
            <p className="text-xl font-semibold text-gray-800 mt-1">{client.projects}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-semibold text-gray-800 mt-1">{client.revenue}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Client Since</p>
            <p className="text-xl font-semibold text-gray-800 mt-1">Jan 2024</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projects */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
          </div>
          <div className="p-6 space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{project.name}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">Deadline: {project.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={activity.id} className="flex space-x-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'meeting' ? 'bg-blue-100' :
                      activity.type === 'email' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      <span className="text-sm">
                        {activity.type === 'meeting' ? '📅' :
                         activity.type === 'email' ? '📧' : '📝'}
                      </span>
                    </div>
                    {index < activities.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-200 my-1"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {activity.date} at {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDetails
