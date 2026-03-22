# Fake Store Front

Proyecto de tienda online frontend desarrollado con HTML, CSS, Bootstrap y JavaScript vanilla. Consume la API pública [Fake Store API](https://fakestoreapi.com/) para mostrar productos, detalle de producto y carrito de compras.

## Tecnologías

- HTML5
- CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- JavaScript (ES6+ Modules)
- [Fake Store API](https://fakestoreapi.com/)

## Estructura del proyecto

```
fake-store-front/
├── index.html              # Página principal
├── assets/                 # Imágenes y recursos estáticos
├── css/
│   ├── styles.css          # Hoja de estilos principal (importa las demás)
│   ├── base.css            # Estilos base y variables
│   ├── components.css      # Estilos de componentes reutilizables
│   └── pages.css           # Estilos específicos de cada página
├── js/
│   ├── main.js             # Punto de entrada principal de JavaScript
│   ├── api/
│   │   └── products.js     # Funciones para consumir la Fake Store API
│   ├── components/
│   │   └── navbar.js       # Componente de barra de navegación
│   ├── utils/
│   │   └── utils.js        # Funciones utilitarias (formateo, filtros, etc.)
│   └── pages/              # Lógica específica de cada página
└── views/
    ├── products.html        # Listado de productos
    ├── product-detail.html  # Detalle de un producto
    └── cart.html            # Carrito de compras
```

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Página principal / Home |
| `views/products.html` | Listado de todos los productos |
| `views/product-detail.html` | Detalle de un producto seleccionado |
| `views/cart.html` | Carrito de compras |

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/fake-store-front.git
   ```

2. Abre el proyecto en tu editor de código.

3. Abre el archivo `index.html` en tu navegador, o usa una extensión como **Live Server** en VS Code para levantarlo localmente.

> No requiere instalación de dependencias ni servidor backend.

## API utilizada

Este proyecto consume [Fake Store API](https://fakestoreapi.com/), una API REST gratuita que provee datos de productos, categorías y carritos de compra para proyectos de práctica.

Ejemplo de endpoint utilizado:
```
GET https://fakestoreapi.com/products
```
