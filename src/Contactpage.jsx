import { useState } from "react";

const MAROON = "#8B0000";
const MAROON_LIGHT = "#A00000";

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
    maxWidth: "480px",
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
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "1.4rem",
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
  formTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.35rem",
  },
  formSub: {
    fontSize: "0.88rem",
    color: "#888",
    marginBottom: "1.4rem",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "0.88rem",
    fontWeight: 500,
    color: "#333",
  },
  input: {
    padding: "0.6rem 0.85rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#333",
    outline: "none",
    transition: "border 0.2s",
    width: "100%",
    boxSizing: "border-box",
    background: "white",
  },
  select: {
    padding: "0.6rem 0.85rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#888",
    outline: "none",
    width: "100%",
    background: "white",
    appearance: "none",
    cursor: "pointer",
  },
  selectWrap: {
    position: "relative",
  },
  selectArrow: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#999",
    fontSize: "12px",
  },
  textarea: {
    padding: "0.7rem 0.85rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#333",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
    background: "white",
  },
  submitBtn: {
    width: "100%",
    padding: "0.9rem",
    background: MAROON,
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "0.5rem",
    transition: "background 0.2s",
    letterSpacing: "0.3px",
  },
  successBanner: {
    background: "#e6f4ea",
    border: "1px solid #a8d5b0",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#2e7d32",
    fontSize: "0.9rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
};

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.firstName && form.email && form.message) {
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroSub}>
            Whether you have a question about our collections, need styling advice, or require assistance with an order, our dedicated team is here to help.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Left Card */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Contact Information</h2>

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><PhoneIcon /></div>
              <div>
                <div style={styles.contactLabel}>Phone Support</div>
                <div style={styles.contactMain}>+639773761702</div>
                <div style={styles.contactSub}>Mon - Fri, 9am - 6pm EST</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><MailIcon /></div>
              <div>
                <div style={styles.contactLabel}>Email Us</div>
                <div style={styles.contactMain}>marketplace@cit.edu</div>
                <div style={styles.contactSub}>We aim to reply within 24 hours</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconCircle}><MapPinIcon /></div>
              <div>
                <div style={styles.contactLabel}>Flagship Boutique</div>
                <div style={styles.contactMain}>CIT-U Campus, Cebu City</div>
                <div style={styles.contactSub}>(032) 234-4560</div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              height: "195px",
              overflow: "hidden",
              position: "relative",
            }}>
              <iframe
  title="CIT-U Campus Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.7956583694988!2d123.8786985469281!3d10.29447549089875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c015a4bf233%3A0x95d783198f4634f8!2sCebu%20Institute%20of%20Technology%20-%20University!5e0!3m2!1sen!2sph!4v1776146045443!5m2!1sen!2sph"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>

          {/* Right Card — Form */}
          <div style={styles.card}>
            <h2 style={styles.formTitle}>Send a Message</h2>
            <p style={styles.formSub}>Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitted && (
              <div style={styles.successBanner}>
                ✓ Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>First Name</label>
                <input
                  style={styles.input}
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Last Name</label>
                <input
                  style={styles.input}
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <div style={styles.selectWrap}>
                <select
                  style={styles.select}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="other">Other</option>
                </select>
                <span style={styles.selectArrow}>▾</span>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                style={styles.textarea}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you today?"
              />
            </div>

            <button
              style={{
                ...styles.submitBtn,
                background: hoveredBtn ? MAROON_LIGHT : MAROON,
              }}
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              onClick={handleSubmit}
            >
              Send Message <SendIcon />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}