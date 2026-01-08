TonaselPay Dashboard
Show Image
Show Image
Show Image
Show Image
TonaselPay Dashboard is a comprehensive payment management platform built with React.js and Bootstrap 5. Designed for businesses to manage payments, transactions, customers, and financial operations with ease.
About TonaselPay
TonaselPay is a payment processing solution by Tonasel, providing secure and efficient payment management tools for modern businesses. Our platform enables businesses to accept payments, track transactions, manage customers, and ensure compliance with financial regulations.
Key Features
Payment Management

Real-time payment processing and tracking
Multiple payment method support
Transaction history and analytics
Invoice generation and management

Business Tools

Multi-business management
Customer relationship management (CRM)
Financial reporting and insights
Compliance monitoring and tools

Security & Compliance

Enterprise-grade security
PCI DSS compliance tools
Fraud detection and prevention
Secure data encryption

Powered by React.js
TonaselPay Dashboard is built using modern web technologies including React.js, extending the popular react-bootstrap library and based on Bootstrap 5 CSS framework. It features over 100 UI components optimized for financial and payment management.
Data-Driven Architecture
Built with a data-driven methodology, TonaselPay Dashboard uses arrays of objects to manage tasks, transactions, notifications, and customer data. This architecture makes it easy to integrate with any back-end API or payment gateway.
Bootstrap 5 Framework
Based on the latest Bootstrap 5 CSS framework, featuring modern improvements including RTL support, utility API, and enhanced styling without jQuery dependency.
100+ React Components
Includes over 100 custom-styled React components:

Payment forms and processors
Transaction tables and charts
Customer management interfaces
Invoice generators
Analytics dashboards
Compliance monitoring tools
Navigation and UI elements

Dashboard Pages
Pre-built pages for complete payment management:

Overview Dashboard - Real-time business metrics
Payments - Payment processing interface
Transactions - Transaction history and management
Customers - Customer database and analytics
Invoices - Invoice creation and tracking
Compliance - Regulatory compliance monitoring
Settings - Business and account configuration
Business Registration - Multi-business onboarding

Table of Contents

Quick Start
Installation
File Structure
Browser Support
Technical Support
Licensing
About Tonasel

Quick Start
Prerequisites

Node.js (>= 14.x)
npm (>= 6.x) or Yarn (>= 1.x)

Installation

Clone the repository:

bashgit clone https://github.com/tonasel/tonaselpay-dashboard.git
cd tonaselpay-dashboard

Install dependencies:

Using npm:
bashnpm install
Using Yarn:
bashyarn install

Start the development server:

Using npm:
bashnpm start
Using Yarn:
bashyarn start

Open http://localhost:3000 in your browser.

Production Build
Update the homepage value in package.json to your domain, then:
Using npm:
bashnpm run build
Using Yarn:
bashyarn build
File Structure
TonaselPay Dashboard
.
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── img
│   │   └── styles
│   ├── components
│   │   ├── Charts.js
│   │   ├── Footer.js
│   │   ├── Forms.js
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── Tables.js
│   │   └── Widgets.js
│   ├── data
│   │   ├── charts.js
│   │   ├── notifications.js
│   │   ├── tables.js
│   │   └── transactions.js
│   ├── index.js
│   ├── pages
│   │   ├── DashboardOverview.js
│   │   ├── Payments.js
│   │   ├── Transactions.js
│   │   ├── Customers.js
│   │   ├── Invoices.js
│   │   ├── Compliance.js
│   │   ├── Settings.js
│   │   └── BusinessRegistration.js
│   ├── routes.js
│   └── scss
│       ├── tonaselpay
│       └── main.scss
└── yarn.lock
Technology Stack

React.js - Frontend framework
Bootstrap 5 - CSS framework
Sass - CSS preprocessing
React Router - Navigation
React Bootstrap - Bootstrap components for React
FontAwesome - Icon library
Chart.js - Data visualization

Browser Support
TonaselPay Dashboard supports the last two versions of:
<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64">
Configuration
Payment Gateway Integration
To integrate your payment gateway, update the configuration in src/config/payment.js:
javascriptexport const PAYMENT_CONFIG = {
  apiKey: 'your_api_key',
  merchantId: 'your_merchant_id',
  environment: 'production', // or 'sandbox'
};
API Endpoints
Configure your API endpoints in src/config/api.js:
javascriptexport const API_BASE_URL = 'https://api.tonasel.com/v1';
Security
TonaselPay Dashboard implements industry-standard security practices:

Encrypted data transmission (HTTPS)
Secure authentication and session management
Input validation and sanitization
CSRF protection
Regular security updates

Reporting Issues
If you encounter any issues:

Check that you're using the latest version
Search existing issues on GitHub Issues
Provide detailed reproduction steps
Specify browser and environment details

Technical Support
For technical support or integration questions:

Visit Tonasel Support
Email: support@tonasel.com
Documentation: TonaselPay Docs

Contributing
We welcome contributions! Please see our Contributing Guide for details.
Licensing
Copyright © 2024 Tonasel
This project is licensed under the MIT License - see the LICENSE.md file for details.
About Tonasel
Tonasel is a technology company focused on providing innovative payment solutions and business tools. Learn more at tonasel.com.
Connect With Us

Website: https://tonasel.com
Support: https://tonasel.com/support
Documentation: https://docs.tonasel.com


Built with ❤️ by Tonasel