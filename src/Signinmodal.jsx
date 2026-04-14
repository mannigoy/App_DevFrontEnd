import { useState } from "react";

const MAROON = "#8B0000";
const MAROON_LIGHT = "#A00000";

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    borderRadius: "16px",
    padding: "2rem",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
  },
  closeBtn: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#999",
    fontSize: "1.2rem",
    lineHeight: 1,
    padding: "4px",
  },
  logo: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  logoTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: MAROON,
    margin: 0,
  },
  logoSub: {
    fontSize: "0.82rem",
    color: "#888",
    marginTop: "4px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "0.25rem",
  },
  subtitle: {
    fontSize: "0.85rem",
    color: "#888",
    marginBottom: "1.5rem",
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
    padding: "0.65rem 0.9rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#333",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    background: "white",
    transition: "border 0.2s",
  },
  forgotRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1.25rem",
    marginTop: "-0.5rem",
  },
  forgotLink: {
    fontSize: "0.82rem",
    color: MAROON,
    textDecoration: "none",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
  submitBtn: {
    width: "100%",
    padding: "0.85rem",
    background: MAROON,
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
    letterSpacing: "0.3px",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "1.25rem 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "#eee",
  },
  dividerText: {
    fontSize: "0.78rem",
    color: "#bbb",
  },
  signupRow: {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#666",
    marginTop: "1rem",
  },
  signupLink: {
    color: MAROON,
    fontWeight: 600,
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontSize: "0.85rem",
  },
  errorMsg: {
    background: "#fce8e8",
    border: "1px solid #f5c4c4",
    borderRadius: "8px",
    padding: "0.6rem 0.9rem",
    color: MAROON,
    fontSize: "0.85rem",
    marginBottom: "1rem",
  },
  successMsg: {
    background: "#e6f4ea",
    border: "1px solid #a8d5b0",
    borderRadius: "8px",
    padding: "0.6rem 0.9rem",
    color: "#2e7d32",
    fontSize: "0.85rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
};

// ADDED onSwitch to the props here
export default function SignInModal({ isOpen, onClose, onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setForm({ email: "", password: "" });
    }, 1500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        {/* Close Button */}
        <button style={styles.closeBtn} onClick={onClose}>✕</button>

        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.logoTitle}>Campus Marketplace</div>
          <div style={styles.logoSub}>CIT-U's official school merchandise store</div>
        </div>

        <div style={styles.title}>Welcome back</div>
        <div style={styles.subtitle}>Sign in to your account to continue</div>

        {error && <div style={styles.errorMsg}>⚠ {error}</div>}
        {success && <div style={styles.successMsg}>✓ Signed in successfully!</div>}

        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div style={styles.forgotRow}>
          <button style={styles.forgotLink}>Forgot password?</button>
        </div>

        <button
          style={{ ...styles.submitBtn, background: hoveredBtn ? MAROON_LIGHT : MAROON }}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          onClick={handleSubmit}
        >
          Sign In
        </button>

        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerLine} />
        </div>

        <div style={styles.signupRow}>
          Don't have an account?{" "}
          <button 
            style={styles.signupLink} 
            onClick={onSwitch} 
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}