# Polymarket Scanner

A full-stack application that fetches and displays Polymarket betting markets. Built with Node.js + Express backend and React + Vite frontend.

## Project Structure

```
polymarket-scanner/
├─ server/
│  ├─ package.json
│  └─ index.js
├─ web/
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ index.html
│  └─ src/
│     ├─ main.jsx
│     └─ App.jsx
└─ README.md
```

## Features

- Fetches live Polymarket betting markets via their API
- Displays markets in a searchable, filterable table
- Filter by title/category and minimum liquidity
- Toggle between open and closed markets
- Shows market outcomes with implied probabilities
- Direct links to Polymarket pages

## Setup & Run

### 1. Start the Server

```bash
cd server
npm install
npm start
```

The server will run on http://localhost:4000

### 2. Start the Web App

In a new terminal:

```bash
cd web
npm install
npm run dev
```

The React app will run on http://localhost:5173

## API Endpoints

- `GET /api/polymarket?active=true&limit=1000` - Fetch Polymarket markets

## Requirements

- Node.js 18+ (uses built-in `fetch`)
- Modern browser with JavaScript enabled

## Environment Variables

### Server (optional)

Create `server/.env`:

```
PORT=4000
```

### Web (optional)

Create `web/.env`:

```
VITE_API_BASE=http://localhost:4000
```

## Development Notes

- The server normalizes Polymarket API responses into a consistent format
- Supports pagination to fetch large numbers of markets
- React app uses modern hooks (useState, useEffect, useMemo)
- Responsive table layout with inline styles
- Error handling for API failures

## Extending

You can extend this project by:

- Adding database persistence
- Implementing real-time updates
- Adding more market filters
- Creating charts/visualizations
- Adding user authentication
- Implementing market alerts
