// Fetch products from the API and display them on the page

export function getProducts() {
    let res = fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => data);

    return res
}