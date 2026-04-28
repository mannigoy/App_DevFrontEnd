import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar_footer.css";

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
  onLogoutClick, // Added to handle logging out
  isLoggedIn = false, // Added to track auth state
  username = "Wildcat", // Added to personalize the experience
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

  return (
    <nav className={`brand-bg navbar ${isMobile ? "mobile" : ""}`}>
      <div className="nav-brand">
        <div className="nav-logo">CM</div>
        <div className="nav-title-wrap">
          <div className="brand-title-bold">{brandName}</div>
          <div className="brand-title-sub">{brandSub}</div>
        </div>
      </div>

      <div className={`nav-links ${isMobile ? "mobile" : ""}`}>
        {/* Universal Links (Shop, About, Contact) always show */}
        {links.map(({ label, href, onClick }) =>
          href ? (
            <Link key={label} to={href} className="nav-btn">
              {label}
            </Link>
          ) : (
            <button
              key={label}
              type="button"
              className="nav-btn"
              onClick={onClick}
            >
              {label}
            </button>
          )
        )}

        {/* --- CONDITIONAL RENDERING STARTS HERE --- */}
        {isLoggedIn ? (
          // WHAT TO SHOW WHEN LOGGED IN
          <>
            <button type="button" className="nav-btn" onClick={onOrdersClick}>
              My Orders
            </button>

            {showNotification && !isMobile && (
              <button type="button" className="nav-btn">
                Notifications 🔔
              </button>
            )}

            {/* User Profile / Greeting */}
            <span className="nav-greeting" style={{ margin: "0 10px", fontWeight: "bold", color: "#800020" }}>
              Hi, {username}!
            </span>

            <button type="button" className="nav-btn" onClick={onLogoutClick} style={{ border: "1px solid #800020", borderRadius: "5px" }}>
              Log Out
            </button>
          </>
        ) : (
          // WHAT TO SHOW WHEN GUEST (LOGGED OUT)
          <>
            <button type="button" className="nav-btn" onClick={onSignInClick} style={{ background: "#800020", color: "white", borderRadius: "5px", padding: "8px 16px" }}>
              Sign In
            </button>
          </>
        )}
        {/* --- CONDITIONAL RENDERING ENDS HERE --- */}

      </div>
    </nav>
  );
}