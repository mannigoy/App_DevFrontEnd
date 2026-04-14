import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    width: "100%",
    background: "#800000",
    minHeight: 72,
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxSizing: "border-box",
  },
  navMobile: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 10,
    padding: "12px 16px",
  },
  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  navLogo: {
    width: 44,
    height: 44,
    background: "#9a0000",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#ffd700",
    fontSize: 16,
    flexShrink: 0,
  },
  navTitleWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  navTitleBold: {
    color: "#ffd700",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.2,
  },
  navTitleSub: {
    color: "#ffd700",
    fontSize: 12,
    opacity: 0.85,
    lineHeight: 1.2,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  navLinksMobile: {
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 4,
  },
  navBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: 14,
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: 6,
    fontFamily: "inherit",
    transition: "color 0.2s ease",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

export default function Navbar({
  links = [
    { label: "Shop", href: "/" },
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

  const hoverOn = (e) => {
    e.currentTarget.style.color = "#ffd700";
  };

  const hoverOff = (e) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <nav style={{ ...styles.nav, ...(isMobile ? styles.navMobile : {}) }}>
      <div style={styles.navBrand}>
        <div style={styles.navLogo}>CM</div>
        <div style={styles.navTitleWrap}>
          <div style={styles.navTitleBold}>{brandName}</div>
          <div style={styles.navTitleSub}>{brandSub}</div>
        </div>
      </div>

      <div
        style={{
          ...styles.navLinks,
          ...(isMobile ? styles.navLinksMobile : {}),
        }}
      >
        {links.map(({ label, href, onClick }) =>
          href ? (
            <Link
              key={label}
              to={href}
              style={styles.navBtn}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {label}
            </Link>
          ) : (
            <button
              key={label}
              type="button"
              style={styles.navBtn}
              onClick={onClick}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {label}
            </button>
          )
        )}

        <button
          type="button"
          style={styles.navBtn}
          onClick={onOrdersClick}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          Orders
        </button>

        {showNotification && !isMobile && (
          <button
            type="button"
            style={styles.navBtn}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Notifications
          </button>
        )}

        <button
          type="button"
          style={styles.navBtn}
          onClick={onSignInClick}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}