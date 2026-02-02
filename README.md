# Client Management Application

A modern, professional client management system built with React and Tailwind CSS for Tech Solutions India Pvt Ltd. Features secure authentication, profile management, document downloads, and comprehensive client tools.

## 🌐 Live Demo

**Deployed Application:** [https://client-management-application.onrender.com](https://client-management-application.onrender.com)

**GitHub Repository:** [https://github.com/Rohit299-ue/Client-Management-Application](https://github.com/Rohit299-ue/Client-Management-Application)

## ✨ Features

- **🔐 Secure Login**: Password validation with real-time requirements checking
- **👤 Profile Management**: User profile with image upload and profile card generation
- **📄 Document Management**: Download service agreements and NDAs
- **📊 Project Tracker**: Track project progress and milestones
- **🐛 Bug Reporting**: Submit and track bug reports
- **💰 Invoice Management**: View and download invoices
- **💬 Support System**: Contact support team
- **⚙️ Settings**: Manage notifications, appearance, and preferences
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **💾 Data Persistence**: Profile data stored in localStorage by Client ID

## 🚀 Tech Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **Tailwind CSS 4** - Styling
- **React Router DOM 7** - Navigation
- **localStorage** - Data Persistence

## 📋 Requirements

- **Client ID**: Must be exactly 10 characters
- **Password**: Must meet security requirements:
  - At least 8 characters
  - One uppercase letter (A-Z)
  - One lowercase letter (a-z)
  - One number (0-9)
  - One special character (!@#$%^&*)

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header with dropdown menu
│   ├── Dashboard.jsx        # Main dashboard with stats and meetings
│   ├── Login.jsx            # Login page with validation
│   └── ui/                  # Reusable UI components
│       ├── ActionCard.jsx
│       ├── MeetingCard.jsx
│       ├── Button.jsx
│       └── ...
├── pages/
│   ├── Profile.jsx          # User profile with card generation
│   ├── Settings.jsx         # Application settings
│   ├── SignNDA.jsx          # NDA signing page
│   ├── AgreementDownload.jsx # Download agreements
│   ├── ProjectTracker.jsx   # Project tracking
│   ├── BugReport.jsx        # Bug reporting
│   ├── Invoice.jsx          # Invoice management
│   └── Support.jsx          # Support contact
├── assets/                  # Images and SVG files
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css                # Global styles with Tailwind
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563eb (Tailwind blue-600)
- **Indigo**: #4f46e5 (Tailwind indigo-600)
- **Purple**: #9333ea (Tailwind purple-600)
- **Backgrounds**: White with subtle gray borders
- **Status Colors**: Green (Success), Orange (Warning), Red (Error)

### Typography
- **Headings**: Bold, extrabold weights
- **Body**: Regular, medium weights
- **Font Family**: System fonts (Arial, sans-serif)

## 📄 Adding Real PDFs

To add actual agreement PDFs:

1. Create folder: `public/agreements/`
2. Add your PDF files:
   - `master-service-agreement.pdf`
   - `software-license-agreement.pdf`
   - `data-processing-agreement.pdf`
   - `consulting-services-agreement.pdf`
3. Commit and push to GitHub
4. Redeploy on Render

## 🚀 Deployment

### Render (Recommended)

**Option 1: Static Site**
1. Create new Static Site on Render
2. Connect GitHub repository
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`

**Option 2: Web Service**
1. Create new Web Service on Render
2. Connect GitHub repository
3. Build Command: `npm install && npm run build`
4. Start Command: `npm run start`

## 📝 License

© 2026 Client Management Application. All rights reserved.

## 👨‍💻 Developer

Built for Tech Solutions India Pvt Ltd

---

**Need Help?** Contact your Account Manager for Client ID and Password.
