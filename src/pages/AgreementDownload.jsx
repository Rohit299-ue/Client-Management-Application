import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AgreementDownload = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const agreements = [
    {
      id: 1,
      name: 'Master Service Agreement',
      type: 'Service Contract',
      signedDate: 'Dec 15, 2023',
      fileSize: '2.4 MB'
    },
    {
      id: 2,
      name: 'Software License Agreement',
      type: 'License',
      signedDate: 'Jan 10, 2024',
      fileSize: '1.8 MB'
    },
    {
      id: 3,
      name: 'Data Processing Agreement',
      type: 'Compliance',
      signedDate: 'Nov 20, 2023',
      fileSize: '3.1 MB'
    },
    {
      id: 4,
      name: 'Consulting Services Agreement',
      type: 'Service Contract',
      signedDate: 'Jan 05, 2024',
      fileSize: '2.0 MB'
    }
  ]

  const filteredAgreements = agreements.filter(agreement =>
    agreement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agreement.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          Service Agreements
        </h1>
        <p className="text-gray-600">Download your signed agreements</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search agreements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Agreements Table - Desktop */}
      <div className="hidden md:block bg-white rounded-card shadow-card border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Agreement Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Signed Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAgreements.map((agreement) => (
              <tr key={agreement.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xl">📄</span>
                    </div>
                    <span className="font-medium text-gray-800">{agreement.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{agreement.type}</td>
                <td className="px-6 py-4 text-gray-600">{agreement.signedDate}</td>
                <td className="px-6 py-4 text-gray-600">{agreement.fileSize}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Agreements Cards - Mobile */}
      <div className="md:hidden space-y-4">
        {filteredAgreements.map((agreement) => (
          <div key={agreement.id} className="bg-white rounded-card shadow-card border border-gray-100 p-5">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-2xl">📄</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 mb-1">{agreement.name}</h3>
                <p className="text-sm text-gray-600">{agreement.type}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>{agreement.signedDate}</span>
              <span>{agreement.fileSize}</span>
            </div>
            <button className="w-full px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        ))}
      </div>

      {filteredAgreements.length === 0 && (
        <div className="bg-white rounded-card shadow-card border border-gray-100 p-12 text-center">
          <p className="text-gray-500">No agreements found</p>
        </div>
      )}
    </div>
  )
}

export default AgreementDownload
