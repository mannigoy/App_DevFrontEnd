import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import intrams_shirt from "./assets/intrams_shirt.jpg";
import denImg from "./assets/den.jpg";
import pushpin from "./assets/push.jpg";
import lanyard from "./assets/gdg_ lanyard.jpg";
// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  {
    title: "Food and Beverages",
    shopLabel: "Shop Food",
    gradient: "linear-gradient(160deg, #e8c5a0 0%, #c4956a 40%, #8b6045 100%)",
   image: denImg,
  },
  {
    title: "Stickers and Pins",
    shopLabel: "Shop Stickers",
    gradient: "linear-gradient(160deg, #a0b4c8 0%, #6a8ca0 40%, #3d6070 100%)",
   image: denImg,
  },
  {
    title: "CITU Official Items",
    shopLabel: "Shop Official",
    gradient: "linear-gradient(160deg, #c8b4a0 0%, #a09080 40%, #6a5a50 100%)",
   image: denImg,
  },
];

const trendingProducts = [
  {
    id: 1,
    brand: "Wildcats Den",
    name: "Wildcats T-Shirt",
    price: "₱500.00",
    isNew: true,
    image: denImg,
    gradient: "linear-gradient(135deg, #c4a882 0%, #a08060 50%, #7a6048 100%)",
  },
  {
    id: 2,
    brand: "Wildcats Den",
    name: "Intrams Shirt",
    price: "₱450.00",
    isNew: true,
    image: intrams_shirt,
    gradient: "linear-gradient(135deg, #e8d5c0 0%, #d4b896 50%, #c09872 100%)",
  },
  {
    id: 3,
    brand: "Push: Printing and Pins",
    name: "Intramurals Pins",
    price: "₱30.00",
    isNew: false,
    image: pushpin,
    gradient: "linear-gradient(135deg, #d0c0b0 0%, #b8a090 50%, #9a8070 100%)",
  },
  {
    id: 4,
    brand: "GDG CIT-U Merch",
    name: "GDG CIT-U Lanyard",
    price: "₱250.00",
    isNew: false,
    image: lanyard,
    gradient: "linear-gradient(135deg, #c8b8a0 0%, #b0a080 50%, #988870 100%)",
  },
];

// ── Viewport hook ─────────────────────────────────────────────────────────────

function useViewport() {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 1200 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HeroShowcaseSection({ viewport }) {
  const { isMobile, isTablet } = viewport;
  return (
    <section style={{ ...styles.hero, ...(isTablet ? styles.heroTablet : {}) }}>
      <div style={{ ...styles.heroLeft, ...(isMobile ? styles.heroLeftMobile : isTablet ? styles.heroLeftTablet : {}) }}>
        <div style={styles.heroBadge}>
          <span style={styles.heroBadgeText}>NEW INTRAMS COLLECTION</span>
        </div>
        <h1 style={{ ...styles.heroH1, ...(isMobile ? styles.heroH1Mobile : isTablet ? styles.heroH1Tablet : {}) }}>
          Official<br />Intramurals<br />Shirt Reveal
        </h1>
        <p style={{ ...styles.heroP, ...(isMobile ? styles.heroPMobile : {}) }}>
          The mana has aligned, and the moment has arrived to unveil the Official Magic Knight-Themed Intramurals Shirts!
        </p>
        <div style={{ ...styles.heroBtns, ...(isMobile ? styles.heroBtnsMobile : {}) }}>
          <button
            style={styles.btnPrimary}
            onMouseEnter={e => e.currentTarget.style.background = "#6a001a"}
            onMouseLeave={e => e.currentTarget.style.background = "#800020"}
          >
            Shop Collection &rarr;
          </button>
          <button
            style={styles.btnOutline}
            onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            Explore Lookbook
          </button>
        </div>
      </div>
      <div style={styles.heroRight}>
        <div style={styles.heroOverlay} />
        <img
          src={intrams_shirt}
          alt="Intrams Shirt"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </section>
  );
}

function CuratedCategoriesSection({ viewport }) {
  const { isMobile, isTablet } = viewport;
  return (
    <section style={{ ...styles.section, ...(isMobile ? styles.sectionMobile : isTablet ? styles.sectionTablet : {}) }}>
      <div style={{ ...styles.sectionHeader, ...(isMobile ? styles.sectionHeaderMobile : {}) }}>
        <div>
          <h2 style={{ ...styles.sectionH2, ...(isMobile ? styles.sectionH2Mobile : {}) }}>Curated Categories</h2>
          <p style={styles.sectionSub}>Explore our finely crafted assortments by category.</p>
        </div>
      </div>
      <div style={{ ...styles.catGrid, ...(isMobile ? styles.catGridMobile : {}) }}>
        {categories.map(cat => (
          <div
            key={cat.title}
            style={{ ...styles.catCard, ...(isMobile ? styles.catCardMobile : {}), background: cat.gradient }}
          >
            {/* ✅ image as background */}
            <img
              src={cat.image}
              alt={cat.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={styles.catOverlay} />
            <div style={styles.catContent}>
              <h3 style={styles.catTitle}>{cat.title}</h3>
              <a href="#" style={styles.catLink}>{cat.shopLabel} →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrendingProductsSection({ viewport }) {
  const { isMobile, isTablet } = viewport;
  const [liked, setLiked] = useState({});
  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section style={{ ...styles.section, ...(isMobile ? styles.sectionMobile : isTablet ? styles.sectionTablet : {}), background: "#fafafa" }}>
      <div style={{ ...styles.sectionHeader, ...(isMobile ? styles.sectionHeaderMobile : {}) }}>
        <div>
          <h2 style={{ ...styles.sectionH2, ...(isMobile ? styles.sectionH2Mobile : {}) }}>Trending Now</h2>
          <p style={styles.sectionSub}>Our most coveted pieces of the season.</p>
        </div>
        <a href="#" style={styles.viewAll}>View All Products →</a>
      </div>
      <div style={{ ...styles.productsGrid, ...(isMobile ? styles.productsGridMobile : {}) }}>
        {trendingProducts.map(product => (
          <div key={product.id} style={styles.productCard}>
            <div style={{ ...styles.productImg, background: product.gradient }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
              {product.isNew && <div style={styles.newBadge}>NEW</div>}
              <button
                style={{ ...styles.heartBtn, color: liked[product.id] ? "#800020" : "#1c1b1f" }}
                onClick={() => toggleLike(product.id)}
              >
                {liked[product.id] ? "♥" : "♡"}
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={styles.productBrand}>{product.brand}</span>
              <span style={styles.productName}>{product.name}</span>
              <span style={styles.productPrice}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = {
  hero: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", minHeight: 500, background: "#fff9f6" },
  heroTablet: { gridTemplateColumns: "1fr", minHeight: "auto" },
  heroLeft: { display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 40px" },
  heroLeftTablet: { padding: "40px 28px" },
  heroLeftMobile: { padding: "30px 16px" },
  heroBadge: {
    display: "inline-flex", alignItems: "center", padding: "6px 14px",
    background: "#fce8ec", borderRadius: 20, marginBottom: 24, width: "fit-content",
  },
  heroBadgeText: { color: "#800020", fontSize: 12, letterSpacing: "0.5px", fontWeight: 500 },
  heroH1: { fontSize: 60, fontWeight: 700, color: "#1c1b1f", lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 24 },
  heroH1Tablet: { fontSize: 48, lineHeight: 1.12 },
  heroH1Mobile: { fontSize: 36, lineHeight: 1.15, letterSpacing: "-1px" },
  heroP: { color: "#8a8890", fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 420 },
  heroPMobile: { fontSize: 15, marginBottom: 24 },
  heroBtns: { display: "flex", alignItems: "center", gap: 12 },
  heroBtnsMobile: { flexDirection: "column", alignItems: "stretch", gap: 10 },
  btnPrimary: {
    background: "#800020", color: "white", border: "none",
    padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s",
  },
  btnOutline: {
    background: "transparent", color: "#1c1b1f",
    border: "1px solid rgba(0,0,0,0.12)", padding: "14px 32px",
    borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer",
    fontFamily: "inherit", transition: "background 0.2s",
  },
  heroRight: {
    background: "linear-gradient(135deg, #d4a574 0%, #c8956a 30%, #8b6553 60%, #5c3d2e 100%)",
    position: "relative", overflow: "hidden", minHeight: 500,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  heroRightMobile: { minHeight: 320 },
  heroOverlay: {
    position: "absolute", inset: 0,
    background: "linear-gradient(45deg, rgba(128,0,32,0.3) 0%, transparent 60%)",
  },
  section: { padding: "60px 40px", background: "white" },
  sectionTablet: { padding: "48px 28px" },
  sectionMobile: { padding: "36px 16px" },
  sectionHeader: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 },
  sectionHeaderMobile: { flexDirection: "column", alignItems: "flex-start", gap: 16, marginBottom: 28 },
  sectionH2: { fontSize: 36, fontWeight: 400, color: "#1c1b1f", letterSpacing: "-1px", lineHeight: 1.4, marginBottom: 8 },
  sectionH2Mobile: { fontSize: 30 },
  sectionSub: { color: "#8a8890", fontSize: 15 },
  viewAll: { color: "#800020", fontSize: 14, textDecoration: "none", fontWeight: 500 },
  catGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 },
  catGridMobile: { gridTemplateColumns: "1fr", gap: 16 },
  catCard: { borderRadius: 10, overflow: "hidden", position: "relative", height: 420, cursor: "pointer" },
  catCardMobile: { height: 320 },
  catOverlay: {
    position: "absolute", inset: 0,
    background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 50%)",
  },
  catDeco: { position: "absolute", top: "28%", right: "15%", opacity: 0.2, fontSize: 80 },
  catContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 28 },
  catTitle: { color: "white", fontSize: 26, fontWeight: 400, lineHeight: 1.4, marginBottom: 8 },
  catLink: { color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500, textDecoration: "none" },
  productsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 },
  productsGridMobile: { gridTemplateColumns: "1fr 1fr", gap: 16 },
  productCard: { display: "flex", flexDirection: "column", gap: 14, cursor: "pointer" },
  productImg: {
    position: "relative", borderRadius: 8, overflow: "hidden",
    aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center",
  },
  newBadge: {
    position: "absolute", top: 12, left: 12,
    background: "#800020", color: "white", fontSize: 11,
    letterSpacing: "0.5px", padding: "4px 10px", borderRadius: 20, fontWeight: 500,
  },
  heartBtn: {
    position: "absolute", top: 10, right: 10,
    width: 32, height: 32, background: "white", border: "none",
    borderRadius: "50%", cursor: "pointer", fontSize: 16,
    boxShadow: "0 1px 4px rgba(0,0,0,0.12)", transition: "transform 0.15s",
  },
  productBrand: { color: "#8a8890", fontSize: 12, letterSpacing: "0.5px" },
  productName: { color: "#1c1b1f", fontSize: 14, fontWeight: 500, lineHeight: 1.4 },
  productPrice: { color: "#800020", fontSize: 14 },
};

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Marketplace() {
  const viewport = useViewport();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "white", width: "100%", overflowX: "hidden" }}>
      

      <HeroShowcaseSection viewport={viewport} />
      <CuratedCategoriesSection viewport={viewport} />
      <TrendingProductsSection viewport={viewport} />

      
    </div>
  );
}