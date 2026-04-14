// File to handle the footer component

export function renderFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="row align-items-start gy-4">

                    <!-- Brand -->
                    <div class="col-md-4">
                        <a href="/index.html" class="footer-brand">Fake Store</a>
                        <p class="footer-tagline">Timeless style, curated for you.</p>
                    </div>

                    <!-- Navigation -->
                    <div class="col-md-4">
                        <h3 class="footer-heading">Navigation</h3>
                        <ul class="footer-nav">
                            <li><a href="/index.html" class="footer-link">Home</a></li>
                            <li><a href="/views/products.html" class="footer-link">Products</a></li>
                            <li><a href="/views/cart.html" class="footer-link">Cart</a></li>
                        </ul>
                    </div>

                    <!-- Info -->
                    <div class="col-md-4">
                        <h3 class="footer-heading">Shop</h3>
                        <ul class="footer-nav">
                            <li><a href="/views/products.html" class="footer-link">New Arrivals</a></li>
                            <li><a href="/views/products.html" class="footer-link">All Products</a></li>
                        </ul>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p class="footer-copy">&copy; ${new Date().getFullYear()} Fake Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}
