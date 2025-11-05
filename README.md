# 🏠 Home Storage App

A React-based web application for managing your home inventory and keeping track of your supplies. Never run out of essential items again!

[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![Node SASS](https://img.shields.io/badge/SASS-CSS_Modules-pink.svg)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 📋 About The Project

Home Storage App is an intuitive inventory management system designed to help you track products stored at home. Whether it's groceries, cleaning supplies, or any household items, this app helps you monitor quantities, set minimum thresholds, and automatically generate shopping lists.

This project was created as part of the ["React in 10 days"](https://reactw10dni.pl/) challenge by [eduweb.pl](https://eduweb.pl/), serving as a practical learning experience in React development.

### Why This App?

- **Never forget what you need to buy** - Automatic shopping list generation
- **Track inventory levels** - Monitor current vs. minimum quantities
- **Persistent storage** - All data saved locally in your browser
- **Easy to use** - Clean, intuitive interface
- **Visual organization** - Custom images for each product

---

## ✨ Features

- ✅ **Product Management** - Add, edit, and delete products with ease
- 📊 **Inventory Tracking** - Monitor current quantities against minimum thresholds
- 🛒 **Smart Shopping List** - Automatically lists items below minimum stock
- 🖼️ **Custom Images** - Add product images or use placeholder graphics
- 💾 **Local Persistence** - Data stored in browser localStorage
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔄 **Real-time Updates** - Instant UI updates on data changes
- 🎯 **Unit Flexibility** - Support for various units (g, kg, litres, bottles, pieces)

---

## 🛠 Built With

This project leverages modern web technologies:

- **[React](https://reactjs.org/)** - v16.13.1 - UI library
- **[React Router DOM](https://reactrouter.com/)** - v5.1.2 - Client-side routing
- **[SCSS Modules](https://sass-lang.com/)** - Component-scoped styling
- **[Create React App](https://create-react-app.dev/)** - Build tooling and configuration
- **[UUID](https://www.npmjs.com/package/uuid)** - v7.0.3 - Unique ID generation
- **[Lodash](https://lodash.com/)** - v4.17.15 - Utility functions

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v12.0 or higher)
  ```bash
  node --version
  ```

- **npm** or **yarn**
  ```bash
  npm --version
  # or
  yarn --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/home-storage-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd home-storage-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

**Development mode:**
```bash
npm start
# or
yarn start
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

**Production build:**
```bash
npm run build
# or
yarn build
```

Creates an optimized production build in the `build` folder.

**Run tests:**
```bash
npm test
# or
yarn test
```

Launches the test runner in interactive watch mode.

---

## 💡 Usage

### Adding a Product

1. Click **"Add Product"** or navigate to `/add`
2. Fill in the product details:
   - **Name** - Product name
   - **Current Quantity** - How much you currently have
   - **Minimum Quantity** - Alert threshold
   - **Unit** - Select from g, kg, litres, bottles, pieces
   - **Image URL** (optional) - Link to product image
3. Click **"Save"** to add the product

### Editing a Product

1. Go to the **Product List** (home page)
2. Click the **Edit icon** on any product card
3. Modify the details
4. Click **"Update"** to save changes

### Shopping List

1. Navigate to the **Shopping List** page
2. View all items where current quantity < minimum quantity
3. Use this list when shopping to restock items

### Deleting a Product

1. From the **Product List**, click the **Delete icon** on a product
2. Confirm the deletion

---

## 📁 Project Structure

```
home-storage-app/
├── public/                 # Static files
│   ├── index.html         # HTML entry point
│   ├── manifest.json      # PWA configuration
│   └── ...
├── src/
│   ├── index.js           # Application entry point
│   ├── context.js         # React Context for state management
│   ├── views/             # Page components (routes)
│   │   ├── Root/          # Main app wrapper with routing
│   │   ├── ItemsView/     # Product list page
│   │   ├── AddView/       # Add product page
│   │   ├── EditView/      # Edit product page
│   │   ├── ShoppingListView/  # Shopping list page
│   │   └── SettingsView/  # Settings page (under development)
│   ├── components/        # Reusable UI components
│   │   ├── Header/        # Navigation header
│   │   ├── Form/          # Product form (add/edit)
│   │   ├── List/          # Product list display
│   │   ├── ShoppingList/  # Shopping list components
│   │   └── [Input, Select, Button, Title]
│   └── assets/            # Images and static assets
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] **Form Validation** - Input validation and error messages
- [ ] **Settings Page** - User preferences and configuration
- [ ] **Export/Import Data** - Backup and restore functionality
- [ ] **Categories** - Organize products by categories
- [ ] **Search & Filter** - Find products quickly
- [ ] **Dark Mode** - Theme toggle
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Cloud Sync** - Optional cloud storage integration
- [ ] **Barcode Scanner** - Quick product addition via barcode

### Known Issues

- Form validation is currently missing
- Settings tab is not yet implemented

See the [open issues](https://github.com/yourusername/home-storage-app/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 👤 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/home-storage-app](https://github.com/yourusername/home-storage-app)

---

## 🙏 Acknowledgments

- **[eduweb.pl](https://eduweb.pl/)** - For the ["React in 10 days"](https://reactw10dni.pl/) challenge
- **[Freepik](https://www.flaticon.com/authors/freepik)** - Icons used in the project from [Flaticon](http://www.flaticon.com/)
- **[Create React App](https://github.com/facebook/create-react-app)** - Project bootstrapping
- **[React Documentation](https://reactjs.org/)** - Excellent learning resources

---

<div align="center">
  Made with ❤️ as a React learning project
</div>
