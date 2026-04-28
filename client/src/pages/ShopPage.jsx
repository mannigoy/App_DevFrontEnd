import { useEffect, useState } from "react";
import "../styles/shop.css"; 

// Internal assets
import intramsShirt from "../assets/intrams_shirt.jpg";
import denImg from "../assets/den.jpg";
import pushPin from "../assets/push.jpg";
import lanyard from "../assets/gdg_lanyard.jpg";

const categories = [
  { title: "Food and Beverages", shopLabel: "Shop Food", image: denImg },
  { title: "Stickers and Pins", shopLabel: "Shop Stickers", image: denImg },
  { title: "CIT-U Official Items", shopLabel: "Shop Official", image: denImg },
];

export default function ShopPage() {
  const [extraProducts, setExtraProducts] = useState([]);

  // Example of "flooding" the page with API data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=18')
      .then(res => res.json())
      .then(data => setExtraProducts(data));
  }, []);

  return (
    <div className="shop-page">
      {/* HERO SECTION */}
      
      {/* CATEGORIES SECTION */}
      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Categories</h2>
            <p className="section-text">Browse official merchandise by collection.</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="category-card">
              <img src={cat.image} alt={cat.title} className="category-image" />
              <div className="category-overlay" />
              <div className="category-content">
                <div className="category-card-title">{cat.title}</div>
                <a href="#" className="category-link">{cat.shopLabel}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section section-gray">
        <div className="section-header">
          <div>
            <h2 className="section-title">Trending Products</h2>
            <p className="section-text">Popular items from the latest campus releases.</p>
          </div>
          <a href="#" className="view-all-link">View All Products</a>
        </div>

        <div className="products-grid">
          {/* Mapping the API data to "flood" the page */}
          {extraProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.id % 2 === 0 && <span className="new-badge">NEW</span>}
              </div>
              <span className="product-brand">{product.category}</span>
              <span className="product-name">{product.title}</span>
              <span className="product-price">₱{product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}