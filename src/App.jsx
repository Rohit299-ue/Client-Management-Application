import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SignNDA from './pages/SignNDA'
import AgreementDownload from './pages/AgreementDownload'
import ProjectTracker from './pages/ProjectTracker'
import BugReport from './pages/BugReport'
import Invoice from './pages/Invoice'
import Support from './pages/Support'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentClientId, setCurrentClientId] = useState('')

  const handleLogin = (clientId) => {
    setIsLoggedIn(true)
    setCurrentClientId(clientId)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentClientId('')
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  // Show app with routing after login
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
        <Header onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile clientId={currentClientId} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sign-nda" element={<SignNDA />} />
          <Route path="/agreement-download" element={<AgreementDownload />} />
          <Route path="/project-tracker" element={<ProjectTracker />} />
          <Route path="/bug-report" element={<BugReport />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
