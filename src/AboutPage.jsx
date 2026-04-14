import { useState } from "react";

const MAROON = "#8B0000";

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "3rem 2rem 4rem",
    maxWidth: "1100px",
    margin: "0 auto",
    width: "100%",
  },
  hero: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  heroTitle: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.75rem",
  },
  heroSub: {
    color: "#666",
    fontSize: "0.97rem",
    maxWidth: "520px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: "1.5rem",
    alignItems: "start",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "1.75rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "1.25rem",
  },
  statRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1.25rem",
  },
  stat: {
    background: "#fce8e8",
    borderRadius: "10px",
    padding: "1rem 1.1rem",
    textAlign: "center",
  },
  statNum: {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: MAROON,
  },
  statLabel: {
    fontSize: "0.75rem",
    color: "#888",
    marginTop: "2px",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "1.3rem",
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "#fce8e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "2px",
  },
  contactLabel: {
    fontSize: "0.7rem",
    fontWeight: 600,
    color: "#999",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    marginBottom: "2px",
  },
  contactMain: {
    fontSize: "0.97rem",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "2px",
  },
  contactSub: {
    fontSize: "0.82rem",
    color: "#888",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #f0f0f0",
    margin: "1.25rem 0",
  },
  rightTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.35rem",
  },
  rightSub: {
    fontSize: "0.88rem",
    color: "#888",
    marginBottom: "1.4rem",
  },
  sectionHead: {
    fontSize: "1rem",
    fontWeight: 700,
    color: MAROON,
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: MAROON,
    display: "inline-block",
    flexShrink: 0,
  },
  sectionText: {
    fontSize: "0.9rem",
    color: "#555",
    lineHeight: 1.7,
    margin: 0,
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginTop: "0.5rem",
  },
  valueChip: {
    background: "#fce8e8",
    borderRadius: "8px",
    padding: "0.6rem 0.8rem",
    fontSize: "0.82rem",
    fontWeight: 600,
    color: MAROON,
    textAlign: "center",
  },
};

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3H8L2 7h20l-6-4z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>About Us</h1>
          <p style={styles.heroSub}>
            Learn more about Campus Marketplace — who we are, what drives us, and how we're building a better campus shopping experience.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Left Card */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>At a Glance</h2>

            <div style={styles.statRow}>
              {[
                { num: "500+", label: "Active Users" },
                { num: "200+", label: "Products Listed" },
                { num: "50+",  label: "Campus Sellers" },
                { num: "CIT-U", label: "Home Campus" },
              ].map((s) => (
                <div key={s.label} style={styles.stat}>
                  <div style={styles.statNum}>{s.num}</div>
                  <div style={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <hr style={styles.divider} />

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><InfoIcon /></div>
              <div>
                <div style={styles.contactLabel}>Established</div>
                <div style={styles.contactMain}>CIT-U Campus, Cebu City</div>
                <div style={styles.contactSub}>Serving the campus community</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><UsersIcon /></div>
              <div>
                <div style={styles.contactLabel}>Who We Serve</div>
                <div style={styles.contactMain}>Students & Teachers</div>
                <div style={styles.contactSub}>Buyers and sellers within campus</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><ShopIcon /></div>
              <div>
                <div style={styles.contactLabel}>What We Sell</div>
                <div style={styles.contactMain}>Uniforms, Supplies & More</div>
                <div style={styles.contactSub}>Official school merchandise</div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div style={styles.card}>
            <h2 style={styles.rightTitle}>Our Story</h2>
            <p style={styles.rightSub}>A campus-built platform, made for students and teachers.</p>

            <div>
              <div style={styles.sectionHead}>
                <span style={styles.dot} /> About Campus Marketplace
              </div>
              <p style={styles.sectionText}>
                Campus Marketplace is a platform designed for students and teachers to easily browse and purchase school merchandise. From uniforms to accessories, everything is organized in one place.
              </p>
            </div>

            <hr style={styles.divider} />

            <div>
              <div style={styles.sectionHead}>
                <span style={styles.dot} /> Our Mission
              </div>
              <p style={styles.sectionText}>
                Our mission is to simplify buying and selling within the campus by providing a fast, reliable, and user-friendly marketplace that connects the campus community.
              </p>
            </div>

            <hr style={styles.divider} />

            <div>
              <div style={styles.sectionHead}>
                <span style={styles.dot} /> What We Offer
              </div>
              <p style={styles.sectionText}>
                We offer a wide range of school products such as clothing, supplies, and official merchandise while helping sellers manage their inventory and orders efficiently.
              </p>
            </div>

            <hr style={styles.divider} />

            <div>
              <div style={styles.sectionHead}>
                <span style={styles.dot} /> Our Core Values
              </div>
              <div style={styles.valuesGrid}>
                {["Reliability", "Community", "Simplicity", "Transparency"].map((v) => (
                  <div key={v} style={styles.valueChip}>{v}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}