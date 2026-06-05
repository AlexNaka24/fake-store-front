# Fake Store Front

Frontend e-commerce application built with HTML, CSS, Bootstrap, and vanilla JavaScript. Consumes the public [Fake Store API](https://fakestoreapi.com/) to display products, product details, and a shopping cart.

The project uses native ES6 modules, which require a server environment to work correctly. Opening `index.html` directly as a local file (`file://`) will not work.

---

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Local Development (Live Server)](#local-development-live-server)
  - [Docker (Manual)](#docker-manual)
  - [Docker Compose](#docker-compose)
- [Pages](#pages)
- [JavaScript Modules](#javascript-modules)
- [CSS Files](#css-files)
- [API Reference](#api-reference)

---

## Technologies

- HTML5
- CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- JavaScript (ES6+ Modules)
- [Fake Store API](https://fakestoreapi.com/)
- [Nginx](https://nginx.org/) (used as static file server in Docker)
- Docker / Docker Compose

---

## Project Structure

```
fake-store-front/
├── index.html                      # Main / Home page
├── Dockerfile                      # Docker image definition
├── docker-compose.yml              # Docker Compose service definition
├── nginx.conf                      # Nginx configuration for serving the app
├── .dockerignore                   # Files excluded from the Docker build context
├── assets/                         # Static images and resources
│   └── hero-bg.jpg
├── css/
│   ├── styles.css                  # Main stylesheet (imports the rest)
│   ├── base.css                    # Base styles and CSS variables
│   ├── components.css              # Reusable component styles
│   └── pages.css                   # Page-specific styles
├── js/
│   ├── main.js                     # App entry point
│   ├── api/
│   │   └── products.js             # Fake Store API requests
│   ├── components/
│   │   ├── navbar.js               # Navbar component
│   │   ├── footer.js               # Footer component
│   │   └── cartSidebar.js          # Cart sidebar UI and logic
│   ├── pages/
│   │   ├── productsPage.js         # Product listing logic
│   │   ├── productsDetailPage.js   # Product detail logic
│   │   └── cartPage.js             # Cart page logic
│   └── storage/
│       └── storage.js              # Local storage utilities
└── views/
    ├── products.html               # Product listing page
    ├── product-detail.html         # Single product detail page
    └── cart.html                   # Shopping cart page
```

---

## Prerequisites

Choose the method you want to use and ensure the corresponding tool is installed.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/alexnakagama/fake-store-front.git
cd fake-store-front
```

---

### Local Development (Live Server)

This is the simplest option for development. It does not require Docker.

1. Open the project folder in VS Code.
2. Right-click `index.html` and select **Open with Live Server**.
3. The browser will open automatically at `http://127.0.0.1:5500`.

> Live Server serves files over HTTP, which satisfies the browser requirement for ES modules.

---

### Docker (Manual)

Use this if you want to build and run the container yourself without Compose.

1. Build the Docker image:

    ```bash
    docker build -t fake-store-front .
    ```

2. Run the container:

    ```bash
    docker run -p 8080:80 fake-store-front
    ```

3. Open your browser at [http://localhost:8080](http://localhost:8080).

4. To stop the container:

    ```bash
    docker ps                        # find the container ID
    docker stop <container_id>
    ```

---

### Docker Compose

Use this for a more managed setup. The `docker-compose.yml` defines the service, port mapping, and restart policy.

1. Build and start the service:

    ```bash
    docker compose up --build
    ```

2. Open your browser at [http://localhost:8080](http://localhost:8080).

3. To run in detached mode (background):

    ```bash
    docker compose up --build -d
    ```

4. To stop and remove the container:

    ```bash
    docker compose down
    ```

> The `nginx.conf` included in the project sets the correct `Content-Type: application/javascript` header, which is required for native ES modules to load properly in the browser.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `index.html` | Home page |
| `/views/products.html` | `views/products.html` | Full product listing |
| `/views/product-detail.html` | `views/product-detail.html` | Single product detail (requires `?id=` query param) |
| `/views/cart.html` | `views/cart.html` | Shopping cart |

---

## JavaScript Modules

| File | Responsibility |
|---|---|
| `js/main.js` | App entry point. Initializes navbar, footer, and listens for cart storage changes. |
| `js/api/products.js` | All HTTP requests to the Fake Store API. |
| `js/components/navbar.js` | Renders and updates the navigation bar, including cart item count. |
| `js/components/footer.js` | Renders the footer. |
| `js/components/cartSidebar.js` | Cart sidebar UI, item list, quantity controls, and total calculation. |
| `js/pages/productsPage.js` | Fetches and renders the product grid on the listing page. |
| `js/pages/productsDetailPage.js` | Fetches and renders a single product based on the URL query parameter. |
| `js/pages/cartPage.js` | Renders the full cart page and handles item removal and checkout flow. |
| `js/storage/storage.js` | Read/write utilities for the cart stored in `localStorage`. |

---

## CSS Files

| File | Description |
|---|---|
| `css/styles.css` | Entry point. Imports all other CSS files. |
| `css/base.css` | CSS custom properties (variables), resets, and base typography. |
| `css/components.css` | Styles for reusable UI components (cards, buttons, sidebar, etc.). |
| `css/pages.css` | Styles scoped to specific pages. |

---

## API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/), a free public REST API that provides product, category, and cart data.

| Endpoint | Description |
|---|---|
| `GET /products` | Returns all products |
| `GET /products/:id` | Returns a single product by ID |
| `GET /products/categories` | Returns all available categories |
| `GET /products/category/:name` | Returns products filtered by category |

Base URL: `https://fakestoreapi.com`

Example:

```
GET https://fakestoreapi.com/products
GET https://fakestoreapi.com/products/1
```

No API key or authentication is required.
