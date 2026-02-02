import { useNavigate } from 'react-router-dom'

const SignNDA = () => {
  const navigate = useNavigate()
  const ndaDocuments = [
    {
      id: 1,
      title: 'Standard Non-Disclosure Agreement',
      status: 'Pending',
      dateIssued: 'Jan 15, 2026',
      description: 'General NDA for project collaboration'
    },
    {
      id: 2,
      title: 'Mutual NDA - Project Alpha',
      status: 'Signed',
      dateIssued: 'Dec 20, 2025',
      description: 'Bilateral confidentiality agreement'
    },
    {
      id: 3,
      title: 'Technical Information NDA',
      status: 'Pending',
      dateIssued: 'Jan 28, 2026',
      description: 'Protection of technical specifications'
    },
    {
      id: 4,
      title: 'Vendor NDA Agreement',
      status: 'Signed',
      dateIssued: 'Nov 10, 2025',
      description: 'Third-party vendor confidentiality'
    }
  ]

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
          Non-Disclosure Agreements
        </h1>
        <p className="text-gray-600">Review and sign your NDAs</p>
      </div>

      {/* NDA Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ndaDocuments.map((nda) => (
          <div
            key={nda.id}
            className="bg-white rounded-card shadow-card border border-gray-100 p-6 hover:shadow-card-hover transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {nda.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{nda.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-3 ${
                  nda.status === 'Signed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {nda.status}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Issued: {nda.dateIssued}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                View Document
              </button>
              {nda.status === 'Pending' && (
                <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-sm hover:shadow-md">
                  Sign Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
          <p className="text-sm text-gray-600 font-medium mb-2">Total NDAs</p>
          <p className="text-3xl font-bold text-gray-800">4</p>
        </div>
        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
          <p className="text-sm text-gray-600 font-medium mb-2">Signed</p>
          <p className="text-3xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-white rounded-card shadow-card border border-gray-100 p-6">
          <p className="text-sm text-gray-600 font-medium mb-2">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">2</p>
        </div>
      </div>
    </div>
  )
}

export default SignNDA
