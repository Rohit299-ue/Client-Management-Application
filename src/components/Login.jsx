import { useState } from 'react'
import logo from '../assets/logo.svg'

const Login = ({ onLogin }) => {
  const [clientId, setClientId] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const validatePassword = (pwd) => {
    const requirements = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    }
    return requirements
  }

  const isPasswordValid = (pwd) => {
    const reqs = validatePassword(pwd)
    return Object.values(reqs).every(req => req === true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
    // Validate Client ID - must be exactly 10 characters
    if (!clientId.trim()) {
      newErrors.clientId = 'Client ID is required'
    } else if (clientId.length !== 10) {
      newErrors.clientId = 'Client ID must be exactly 10 characters'
    }
    
    // Validate Password
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (!isPasswordValid(password)) {
      newErrors.password = 'Password does not meet requirements'
    }
    
    setErrors(newErrors)
    
    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt:', { clientId, password })
      onLogin(clientId) // Pass clientId to parent
    }
  }

  const passwordReqs = validatePassword(password)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/20">
        {/* Logo with Glow */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
            <div className="relative transform hover:scale-110 transition-all duration-300">
              <img src={logo} alt="Clint UI" className="h-16 w-auto filter drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-2">
          Client Management
        </h1>
        <p className="text-center text-gray-500 mb-8 text-base">Sign in to access your dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Client ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Client ID
            </label>
            <input
              type="text"
              value={clientId}
              onChange={(e) => {
                setClientId(e.target.value)
                if (errors.clientId) setErrors({ ...errors, clientId: '' })
              }}
              placeholder="Enter your client ID (exactly 10 characters)"
              maxLength={10}
              required
              className={`w-full h-12 px-4 rounded-xl border-2 ${
                errors.clientId ? 'border-red-500' : 'border-gray-200'
              } focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
            />
            {errors.clientId && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.clientId}
              </p>
            )}
            {!errors.clientId && clientId.length > 0 && clientId.length < 10 && (
              <p className="text-orange-500 text-xs mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {clientId.length}/10 characters - Need {10 - clientId.length} more
              </p>
            )}
            {!errors.clientId && clientId.length === 10 && (
              <p className="text-green-600 text-xs mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid Client ID (10/10)
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (errors.password) setErrors({ ...errors, password: '' })
                }}
                placeholder="Enter your password"
                required
                className={`w-full h-12 px-4 pr-12 rounded-xl border-2 ${
                  errors.password ? 'border-red-500' : 'border-gray-200'
                } focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl hover:scale-110 transition-transform duration-200"
              >
                {showPassword ? '👁️' : '👁'}
              </button>
            </div>
            
            {/* Password Requirements - ALWAYS VISIBLE */}
            <div className="mt-4 p-5 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 shadow-md">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-bold text-indigo-900">Password Requirements:</p>
              </div>
              <div className="space-y-2.5">
                <div className={`flex items-center text-sm font-semibold ${passwordReqs.length ? 'text-green-700' : 'text-gray-700'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${passwordReqs.length ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordReqs.length ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>At least 8 characters</span>
                </div>
                
                <div className={`flex items-center text-sm font-semibold ${passwordReqs.uppercase ? 'text-green-700' : 'text-gray-700'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${passwordReqs.uppercase ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordReqs.uppercase ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>One uppercase letter (A-Z)</span>
                </div>
                
                <div className={`flex items-center text-sm font-semibold ${passwordReqs.lowercase ? 'text-green-700' : 'text-gray-700'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${passwordReqs.lowercase ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordReqs.lowercase ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>One lowercase letter (a-z)</span>
                </div>
                
                <div className={`flex items-center text-sm font-semibold ${passwordReqs.number ? 'text-green-700' : 'text-gray-700'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${passwordReqs.number ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordReqs.number ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>One number (0-9)</span>
                </div>
                
                <div className={`flex items-center text-sm font-semibold ${passwordReqs.special ? 'text-green-700' : 'text-gray-700'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${passwordReqs.special ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {passwordReqs.special ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>One special character (!@#$%^&*)</span>
                </div>
              </div>
            </div>
            
            {errors.password && (
              <p className="text-red-600 text-sm mt-2 flex items-center font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 text-base"
          >
            Login
          </button>

          {/* Support Text */}
          <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed px-2">
            Client ID must be exactly 10 characters. If you do not have an ID and Password, please contact your Account Manager.
          </p>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-red-500 text-lg animate-pulse">❤️</span>
            <span className="font-semibold text-gray-600">Tech Solutions India</span>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            © 2026 Client Management Application. All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
