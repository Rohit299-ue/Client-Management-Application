import { useState } from 'react'

const ClientList = ({ onSelectClient, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const clients = [
    { id: 1, name: 'Acme Corporation', email: 'contact@acme.com', phone: '+1 234-567-8900', status: 'Active', projects: 5, revenue: '$125K' },
    { id: 2, name: 'TechStart Inc', email: 'info@techstart.com', phone: '+1 234-567-8901', status: 'Active', projects: 3, revenue: '$89K' },
    { id: 3, name: 'Global Solutions', email: 'hello@global.com', phone: '+1 234-567-8902', status: 'Pending', projects: 1, revenue: '$45K' },
    { id: 4, name: 'Innovation Labs', email: 'contact@innovation.com', phone: '+1 234-567-8903', status: 'Active', projects: 7, revenue: '$210K' },
    { id: 5, name: 'Digital Dynamics', email: 'info@digital.com', phone: '+1 234-567-8904', status: 'Active', projects: 4, revenue: '$156K' },
    { id: 6, name: 'Future Systems', email: 'hello@future.com', phone: '+1 234-567-8905', status: 'Inactive', projects: 0, revenue: '$0' },
  ]

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || client.status.toLowerCase() === filterStatus.toLowerCase()
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
          <p className="text-gray-600 mt-1">Manage your client relationships</p>
        </div>
        <button
          onClick={() => onNavigate('add-client')}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <span>➕</span>
          <span>Add Client</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex gap-2">
            {['all', 'active', 'pending', 'inactive'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  filterStatus === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onSelectClient(client)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-bold text-lg">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                client.status === 'Active' 
                  ? 'bg-green-100 text-green-800'
                  : client.status === 'Pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {client.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{client.name}</h3>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span className="truncate">{client.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>{client.phone}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Projects</p>
                <p className="font-semibold text-gray-800">{client.projects}</p>
              </div>
              <div>
                <p className="text-gray-500">Revenue</p>
                <p className="font-semibold text-gray-800">{client.revenue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500 text-lg">No clients found</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}

export default ClientList
