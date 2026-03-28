// File to handle the the products page functionality

import { getProducts } from "../api/products.js";

getProducts().then((products) => {
    
    products.forEach(p => {
        let template = ''
    })
})