# Fake Store Front

Frontend e-commerce project built with HTML, CSS, Bootstrap, and vanilla JavaScript. It consumes the public [Fake Store API](https://fakestoreapi.com/) to display products, product details, and a shopping cart.

## Technologies

- HTML5
- CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- JavaScript (ES6+ Modules)
- [Fake Store API](https://fakestoreapi.com/)

## Project Structure

```
fake-store-front/
├── index.html              # Main / Home page
├── assets/                 # Images and static resources
├── css/
│   ├── styles.css          # Main stylesheet (imports the rest)
│   ├── base.css            # Base styles and variables
│   ├── components.css      # Reusable component styles
│   └── pages.css           # Page-specific styles
├── js/
│   ├── main.js             # Main JavaScript entry point
│   ├── api/
│   │   └── products.js     # Functions to consume the Fake Store API
│   ├── components/
│   │   └── navbar.js       # Navbar component
│   ├── utils/
│   │   └── utils.js        # Utility functions (formatting, filtering, etc.)
│   └── pages/              # Page-specific logic
└── views/
    ├── products.html        # Product listing
    ├── product-detail.html  # Single product detail
    └── cart.html            # Shopping cart
```

## Pages

| Page | Description |
|---|---|
| `index.html` | Home page |
| `views/products.html` | Full product listing |
| `views/product-detail.html` | Selected product detail |
| `views/cart.html` | Shopping cart |

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/fake-store-front.git
   ```

2. Open the project in your code editor.

3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code to run it locally.

> No dependencies or backend server required.

## API

This project uses the [Fake Store API](https://fakestoreapi.com/), a free REST API that provides product, category, and cart data for practice projects.

Example endpoint:
```
GET https://fakestoreapi.com/products
```
