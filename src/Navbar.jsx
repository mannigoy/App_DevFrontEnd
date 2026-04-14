import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    width: "100%", background: "#800000", height: 72,
    display: "flex", alignItems: "center", padding: "0 24px",
    position: "sticky", top: 0, zIndex: 10,
    boxSizing: "border-box",
  },
  navMobile: {
    height: "auto",
    minHeight: 72,
    flexDirection: "column",
    alignItems: "stretch",
    gap: 10,
    padding: "12px 16px",
  },
  navBrand: { display: "flex", alignItems: "center", gap: 12, flex: 1 },
  navLogo: {
    width: 44, height: 44, background: "#9a0000", borderRadius: 8,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, color: "#FFD700", fontSize: 16, flexShrink: 0,
  },
  navTitleBold: { color: "#FFD700", fontWeight: 700, fontSize: 18, lineHeight: 1.2 },
  navTitleSub: { color: "#FFD700", fontSize: 12, opacity: 0.85 },
  navLinks: { display: "flex", alignItems: "center", gap: 4 },
  navLinksMobile: { width: "100%", justifyContent: "space-between", flexWrap: "wrap", gap: 2 },
  navBtn: {
    background: "transparent", border: "none", color: "white",
    fontSize: 14, cursor: "pointer", padding: "8px 12px", borderRadius: 6,
    fontFamily: "inherit", transition: "color 0.2s",
  },
};

export default function Navbar({
  links = [
    { label: "Shop", href: "#" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  brandName = "Campus Marketplace",
  brandSub = "CIT-U Official Store",
  onOrdersClick,
  onSignInClick,
  showNotification = true,
}) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const hoverOn = (e) => (e.currentTarget.style.color = "#FFD700");
  const hoverOff = (e) => (e.currentTarget.style.color = "white");

  return (
    <nav style={{ ...styles.nav, ...(isMobile ? styles.navMobile : {}) }}>
      {/* Brand */}
      <div style={styles.navBrand}>
        <div style={styles.navLogo}>CM</div>
        <div>
          <div style={styles.navTitleBold}>{brandName}</div>
          <div style={styles.navTitleSub}>{brandSub}</div>
        </div>
      </div>

      {/* Links */}
      <div style={{ ...styles.navLinks, ...(isMobile ? styles.navLinksMobile : {}) }}>
        {links.map(({ label, href, onClick }) =>
          href ? (
            <Link
              key={label}
              to={href}
              style={{ ...styles.navBtn, textDecoration: "none" }}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {label}
            </Link>
          ) : (
            <button
              key={label}
              style={styles.navBtn}
              onClick={onClick}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {label}
            </button>
          )
        )}

        <button style={styles.navBtn} onClick={onOrdersClick} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Orders
        </button>

        {showNotification && !isMobile && (
          <button style={styles.navBtn} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            🔔
          </button>
        )}

        <button style={styles.navBtn} onClick={onSignInClick} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Sign in
        </button>
      </div>
    </nav>
  );
}