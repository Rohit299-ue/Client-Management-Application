# Client Management Web Application

A professional, modern client management system built with React and Tailwind CSS. Features a clean blue and white corporate design that's fully responsive across desktop, tablet, and mobile devices.

## Features

- **Dashboard**: Overview with key metrics and recent client activity
- **Client List**: Browse and filter clients with search functionality
- **Client Details**: Comprehensive view of client information, projects, and activity timeline
- **Add Client**: Form to add new clients with validation
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Clean, professional interface with smooth transitions

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Modern ES6+ JavaScript

## Getting Started

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

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Navigation sidebar
│   ├── Header.jsx        # Top header with search
│   ├── Dashboard.jsx     # Dashboard view
│   ├── ClientList.jsx    # Client listing with filters
│   ├── ClientDetails.jsx # Individual client details
│   └── AddClient.jsx     # Add new client form
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles with Tailwind
```

## Color Scheme

The application uses a professional blue and white color palette:
- Primary Blue: #3b82f6 (with shades from 50-900)
- White backgrounds with subtle gray borders
- Status indicators: Green (Active), Yellow (Pending), Gray (Inactive)

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Notes

This is a frontend-only UI implementation. No backend logic or API integration is included. All data is currently mocked for demonstration purposes.
