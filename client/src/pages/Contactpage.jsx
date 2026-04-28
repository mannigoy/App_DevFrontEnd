import { useState } from "react";

const MAROON = "#8b0000";
const MAROON_LIGHT = "#a00000";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f3f3",
  },
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "48px 20px 60px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "32px",
  },
  heroTitle: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  heroSub: {
    color: "#666",
    fontSize: "0.98rem",
    maxWidth: "560px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "24px",
    alignItems: "start",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    fontSize: "1.08rem",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "18px",
  },
  contactItem: {
    marginBottom: "18px",
  },
  contactLabel: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: MAROON,
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  contactMain: {
    fontSize: "0.98rem",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "2px",
  },
  contactSub: {
    fontSize: "0.85rem",
    color: "#777",
  },
  mapWrap: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "16px",
    height: "220px",
    overflow: "hidden",
  },
  formTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "6px",
  },
  formSub: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "20px",
    lineHeight: 1.6,
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#333",
  },
  input: {
    padding: "12px 14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#333",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    background: "white",
  },
  selectWrap: {
    position: "relative",
  },
  select: {
    padding: "12px 14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#555",
    outline: "none",
    width: "100%",
    background: "white",
    appearance: "none",
    cursor: "pointer",
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
    padding: "12px 14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#333",
    outline: "none",
    resize: "vertical",
    minHeight: "140px",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
    background: "white",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    background: MAROON,
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "4px",
    transition: "background 0.2s ease",
  },
  successBanner: {
    background: "#e6f4ea",
    border: "1px solid #a8d5b0",
    borderRadius: "8px",
    padding: "12px 14px",
    color: "#2e7d32",
    fontSize: "0.9rem",
    marginBottom: "16px",
    textAlign: "center",
  },
};

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.firstName && form.email && form.message) {
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Contact Us</h1>
          <p style={styles.heroSub}>
            Send us your questions, product concerns, or order inquiries and we
            will get back to you as soon as possible.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Contact Information</h2>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Phone</div>
              <div style={styles.contactMain}>+63 977 376 1702</div>
              <div style={styles.contactSub}>Monday to Friday, 9:00 AM to 6:00 PM</div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Email</div>
              <div style={styles.contactMain}>marketplace@cit.edu</div>
              <div style={styles.contactSub}>We aim to reply within 24 hours</div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactLabel}>Location</div>
              <div style={styles.contactMain}>CIT-U Campus, Cebu City</div>
              <div style={styles.contactSub}>(032) 234-4560</div>
            </div>

            <div style={styles.mapWrap}>
              <iframe
                title="CIT-U Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.7956583694988!2d123.8786985469281!3d10.29447549089875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c015a4bf233%3A0x95d783198f4634f8!2sCebu%20Institute%20of%20Technology%20-%20University!5e0!3m2!1sen!2sph!4v1776146045443!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.formTitle}>Send a Message</h2>
            <p style={styles.formSub}>
              Fill out the form below and we will get back to you shortly.
            </p>

            {submitted && (
              <div style={styles.successBanner}>
                Message sent. We will get back to you within 24 hours.
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
                  <option value="returns">Returns and Exchanges</option>
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
              type="button"
              style={{
                ...styles.submitBtn,
                background: hoveredBtn ? MAROON_LIGHT : MAROON,
              }}
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}