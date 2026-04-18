// Fetch products from the API and display them on the page

export async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Error when fetching products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en getProducts:', error);
        return [];
    }
}

export async function getProductById(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error in getProductById:', error);
        return null;
    }
}