import { useEffect, useState } from "react";

const styles = {
  footer: { background: "#800000", width: "100%", padding: "24px 40px 0", boxSizing: "border-box" },
  footerTablet: { padding: "24px 28px 0" },
  footerMobile: { padding: "20px 16px 0" },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 24, paddingBottom: 16,
  },
  footerGridMobile: { gridTemplateColumns: "1fr", gap: 18 },
  
  // ─── NEW BRANDING STYLES (Matched to your Navbar/Sidebar) ───
  brandTitleBold: { color: "#FFD700", fontWeight: 700, fontSize: 18, lineHeight: 1.2 },
  brandTitleSub: { color: "#FFD700", fontSize: 12, opacity: 0.85, marginTop: 2, marginBottom: 8 },
  
  footerTitle: { color: "#FFD700", fontSize: 14, fontWeight: 700, marginBottom: 10 },
  footerMuted: { color: "#FFD700", fontSize: 11, lineHeight: 1.7 },
  footerLink: {
    display: "block", color: "white", fontSize: 11,
    textDecoration: "none", lineHeight: 2, transition: "color 0.2s",
  },
  footerContact: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 },
  footerContactText: { color: "white", fontSize: 11 },
  socialBtn: {
    width: 28, height: 28, background: "rgba(255,255,255,0.15)", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "white", fontSize: 11, textDecoration: "none", transition: "background 0.2s",
    fontWeight: 600,
  },
  footerDivider: { border: "none", borderTop: "1px solid rgba(255,215,0,0.35)", margin: "8px 0 0" },
  footerCopy: { textAlign: "center", color: "#FFD700", fontSize: 11, padding: "10px 0" },
};

/**
 * Footer
 */
export default function Footer({
  brandName = "Campus Marketplace",
  brandSub = "CIT-U Official Store", // <-- Added the sub-brand prop
  brandDescription = "The official online store for Cebu Institute of Technology - University students. Quality uniforms, merchandise, and school supplies.",
  quickLinks = [
    { label: "Shop", href: "#" },
    { label: "My Orders", href: "#" },
    { label: "Notifications", href: "#" },
    { label: "Sell with Us", href: "#" },
  ],
  contactInfo = [
    { icon: "📍", text: "CIT-U Campus, Cebu City" },
    { icon: "📞", text: "(032) 261-7900" },
    { icon: "✉️", text: "marketplace@cit.edu" },
  ],
  socialLinks = [
    { label: "F", name: "Facebook", href: "#" },
    { label: "In", name: "Instagram", href: "#" },
    { label: "T", name: "Twitter", href: "#" },
  ],
  followTagline = "Stay updated with new products and exclusive deals!",
  copyrightText = "© 2026 CIT-U Campus Marketplace. All rights reserved.",
}) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <footer
      style={{
        ...styles.footer,
        ...(isMobile ? styles.footerMobile : isTablet ? styles.footerTablet : {}),
      }}
    >
      <div
        style={{
          ...styles.footerGrid,
          ...(isMobile ? styles.footerGridMobile : {}),
        }}
      >
        {/* Brand Section */}
        <div>
          <div style={styles.brandTitleBold}>{brandName}</div>
          <div style={styles.brandTitleSub}>{brandSub}</div>
          <p style={styles.footerMuted}>{brandDescription}</p>
        </div>

        {/* Quick Links */}
        <div>
          <p style={styles.footerTitle}>Quick Links</p>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={styles.footerLink}
              onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={styles.footerTitle}>Contact Us</p>
          {contactInfo.map((item) => (
            <div key={item.text} style={styles.footerContact}>
              <span style={{ fontSize: 13 }}>{item.icon}</span>
              <span style={styles.footerContactText}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Follow Us */}
        <div>
          <p style={styles.footerTitle}>Follow Us</p>
          <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href || "#"}
                title={s.name}
                style={styles.socialBtn}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,215,0,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
          <p style={styles.footerMuted}>{followTagline}</p>
        </div>
      </div>

      <hr style={styles.footerDivider} />
      <p style={styles.footerCopy}>{copyrightText}</p>
    </footer>
  );
}