# LAPO Dashboard

A React + TypeScript application for managing card profiles, users, roles, and more.

## Features

- Dashboard with analytics and charts
- Card management
- User management
- Role-based authorization
- Branch management
- And more...

## Technologies Used

- React
- TypeScript
- Bootstrap
- Recharts
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/your-username/lapo-dashboard.git
   cd lapo-dashboard
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

\`\`\`
my-app/
├── src/
│   ├── assets/             # Images, fonts, CSS
│   │   ├── css/
│   │   └── images/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level components
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
│   └── types/              # Type definitions
│       └── index.d.ts
├── index.html              # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
\`\`\`

```gitignore file=".gitignore"
# Logs
logs
*.log
npm-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json