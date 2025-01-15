# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


src/
│
├── components/                # Reusable components
│   ├── Navbar.jsx             # Navigation bar
│   ├── Footer.jsx             # Footer
│   ├── Form/
│   │   ├── LoginForm.jsx      # Login form component
│   │   ├── RegisterForm.jsx   # Register form component
│   │   ├── AddStockForm.jsx   # Form to add new stocks
│   │   └── EditStockForm.jsx  # Form to edit existing stocks
│   ├── Stock/
│   │   ├── StockCard.jsx      # Individual stock details card
│   │   └── StockList.jsx      # List of all stocks
│   └── Dashboard/
│       ├── PortfolioSummary.jsx # Component to summarize the portfolio
│       └── RecentActivity.jsx   # Component for recent stock activities
│
├── pages/                     # Page-level components
│   ├── LoginPage.jsx          # Login page
│   ├── RegisterPage.jsx       # Register page
│   ├── HomePage.jsx           # Home or Dashboard page
│   ├── StockDetailsPage.jsx   # Stock details page
│   └── NotFoundPage.jsx       # 404 page for undefined routes
│
├── api/                       # API integration
│   ├── auth.js                # API calls related to login/register
│   └── stocks.js              # API calls for stock management
│
├── styles/                    # Stylesheets
│   ├── index.css              # Global styles
│   └── components.css         # Specific component styles
│
├── App.jsx                    # Main app component
├── main.jsx                   # React entry point
└── routes.jsx                 # Routing for all pages
