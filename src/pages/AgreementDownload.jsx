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
      fileSize: '2.4 MB',
      fileName: 'master-service-agreement.pdf'
    },
    {
      id: 2,
      name: 'Software License Agreement',
      type: 'License',
      signedDate: 'Jan 10, 2024',
      fileSize: '1.8 MB',
      fileName: 'software-license-agreement.pdf'
    },
    {
      id: 3,
      name: 'Data Processing Agreement',
      type: 'Compliance',
      signedDate: 'Nov 20, 2023',
      fileSize: '3.1 MB',
      fileName: 'data-processing-agreement.pdf'
    },
    {
      id: 4,
      name: 'Consulting Services Agreement',
      type: 'Service Contract',
      signedDate: 'Jan 05, 2024',
      fileSize: '2.0 MB',
      fileName: 'consulting-services-agreement.pdf'
    }
  ]

  const filteredAgreements = agreements.filter(agreement =>
    agreement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agreement.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDownload = (agreement) => {
    // Try to download from public folder first
    const link = document.createElement('a')
    link.href = `/agreements/${agreement.fileName}`
    link.download = agreement.fileName
    link.target = '_blank'
    
    // Check if file exists, if not generate a sample PDF
    fetch(link.href, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, download it
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // File doesn't exist, generate sample agreement
          generateSampleAgreement(agreement)
        }
      })
      .catch(() => {
        // If fetch fails, generate sample agreement
        generateSampleAgreement(agreement)
      })
  }

  const generateSampleAgreement = (agreement) => {
    // Generate a simple text-based agreement document
    const content = `
${agreement.name.toUpperCase()}

Type: ${agreement.type}
Signed Date: ${agreement.signedDate}

AGREEMENT BETWEEN:
Tech Solutions India Pvt Ltd
AND
Client

This ${agreement.name} ("Agreement") is entered into as of ${agreement.signedDate}.

1. SERVICES
   The Company agrees to provide professional services as outlined in the scope of work.

2. TERMS AND CONDITIONS
   - Payment terms: Net 30 days
   - Service delivery: As per project timeline
   - Confidentiality: Both parties agree to maintain confidentiality

3. INTELLECTUAL PROPERTY
   All intellectual property rights remain with the respective parties.

4. TERMINATION
   Either party may terminate this agreement with 30 days written notice.

5. GOVERNING LAW
   This agreement shall be governed by the laws of India.

SIGNATURES:
_______________________          _______________________
Tech Solutions India             Client
Date: ${agreement.signedDate}    Date: ${agreement.signedDate}

---
This is a sample agreement document.
For the actual signed agreement, please contact your account manager.
---
    `

    // Create a blob and download
    const blob = new Blob([content], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = agreement.fileName.replace('.pdf', '.txt')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
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
          Service Agreements
        </h1>
        <p className="text-gray-600">Download your signed agreements</p>
      </div>

      {/* Info Banner */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm text-blue-800 font-medium">Sample Agreements</p>
            <p className="text-sm text-blue-700 mt-1">These are sample agreement documents. To add your actual PDFs, place them in the <code className="bg-blue-100 px-1 rounded">public/agreements/</code> folder.</p>
          </div>
        </div>
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
                  <button 
                    onClick={() => handleDownload(agreement)}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 inline-flex items-center"
                  >
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
            <button 
              onClick={() => handleDownload(agreement)}
              className="w-full px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
            >
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
