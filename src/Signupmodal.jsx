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
  // Step bar
  stepBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.75rem",
  },
  stepItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: "4px",
  },
  stepCircle: (state) => ({
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: 600,
    background:
      state === "done" ? MAROON :
      state === "active" ? MAROON :
      "#eee",
    color:
      state === "done" || state === "active" ? "white" : "#aaa",
    border: state === "active" ? `2px solid ${MAROON}` : "2px solid transparent",
    boxSizing: "border-box",
    transition: "all 0.2s",
  }),
  stepLabel: (state) => ({
    fontSize: "0.65rem",
    color:
      state === "active" ? MAROON :
      state === "done" ? "#555" :
      "#bbb",
    fontWeight: state === "active" ? 600 : 400,
    textAlign: "center",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  }),
  stepConnector: (done) => ({
    flex: 1,
    height: "2px",
    background: done ? MAROON : "#eee",
    marginBottom: "18px",
    transition: "background 0.2s",
  }),
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
  outlineBtn: {
    width: "100%",
    padding: "0.85rem",
    background: "white",
    color: MAROON,
    border: `1.5px solid ${MAROON}`,
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
    letterSpacing: "0.3px",
    marginTop: "0.5rem",
  },
  ssoBtn: {
    width: "100%",
    padding: "0.85rem",
    background: "white",
    color: "#333",
    border: "1.5px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "0.75rem",
    transition: "border 0.2s, background 0.2s",
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
  signinRow: {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#666",
    marginTop: "1rem",
  },
  signinLink: {
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
  infoBox: {
    background: "#fdf3f3",
    border: "1px solid #f5c4c4",
    borderRadius: "8px",
    padding: "0.75rem 0.9rem",
    color: "#666",
    fontSize: "0.82rem",
    marginBottom: "1.25rem",
    lineHeight: 1.5,
  },
  termsText: {
    fontSize: "0.82rem",
    color: "#555",
    lineHeight: 1.6,
    marginBottom: "1.25rem",
    maxHeight: "120px",
    overflowY: "auto",
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "0.75rem",
    background: "#fafafa",
  },
  checkRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "1.25rem",
    fontSize: "0.85rem",
    color: "#333",
    cursor: "pointer",
  },
  phoneRow: {
    display: "flex",
    gap: "8px",
  },
  phonePrefix: {
    padding: "0.65rem 0.9rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#333",
    background: "#f8f8f8",
    width: "80px",
    flexShrink: 0,
    textAlign: "center",
  },
};

const STEPS = ["SSO Auth", "Username", "Verify Phone", "Terms"];

// ── Step 1: SSO Auth ──────────────────────────────────────────────
function StepSSO({ onNext, onSwitchToSignIn }) {
  const [hoveredGoogle, setHoveredGoogle] = useState(false);
  const [hoveredMS, setHoveredMS] = useState(false);

  return (
    <>
      <div style={styles.title}>Create an account</div>
      <div style={styles.subtitle}>Sign up using your school SSO to get started</div>

      <div style={styles.infoBox}>
        Use your <strong>CIT-U school account</strong> to sign up. This ensures your account is linked to your student or faculty profile.
      </div>

      <button
        style={{ ...styles.ssoBtn, border: hoveredGoogle ? `1.5px solid ${MAROON}` : "1.5px solid #ddd", background: hoveredGoogle ? "#fdf3f3" : "white" }}
        onMouseEnter={() => setHoveredGoogle(true)}
        onMouseLeave={() => setHoveredGoogle(false)}
        onClick={onNext}
      >
        <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.332 35 24 35c-6.065 0-11-4.935-11-11s4.935-11 11-11c2.807 0 5.369 1.059 7.318 2.793l5.657-5.656C33.527 7.337 28.992 5 24 5 12.954 5 4 13.954 4 25s8.954 20 20 20c11.046 0 20-8.954 20-20 0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
          <path d="M6.306 14.691l6.571 4.819C14.655 16.108 19.001 13 24 13c2.807 0 5.369 1.059 7.318 2.793l5.657-5.656C33.527 7.337 28.992 5 24 5c-7.682 0-14.337 4.337-17.694 9.691z" fill="#FF3D00"/>
          <path d="M24 45c4.866 0 9.31-1.86 12.674-4.899l-5.851-4.952C29.012 36.663 26.593 37.5 24 37.5c-5.318 0-9.632-3.635-11.294-8.533l-6.525 5.029C9.505 40.556 16.227 45 24 45z" fill="#4CAF50"/>
          <path d="M43.611 20.083H42V20H24v8h11.303a11.57 11.57 0 01-3.923 5.146l5.852 4.951C36.956 39.205 44 34 44 25c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
        </svg>
        Continue with Google
      </button>

      <button
        style={{ ...styles.ssoBtn, border: hoveredMS ? `1.5px solid ${MAROON}` : "1.5px solid #ddd", background: hoveredMS ? "#fdf3f3" : "white" }}
        onMouseEnter={() => setHoveredMS(true)}
        onMouseLeave={() => setHoveredMS(false)}
        onClick={onNext}
      >
        <svg width="18" height="18" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
          <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
          <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
          <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
        </svg>
        Continue with Microsoft
      </button>

      <div style={styles.signinRow}>
        Already have an account?{" "}
        <button style={styles.signinLink} onClick={onSwitchToSignIn}>Sign in</button>
      </div>
    </>
  );
}

// ── Step 2: Choose Username ───────────────────────────────────────
function StepUsername({ onNext, onBack }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", username: "" });
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleNext = () => {
    if (!form.firstName || !form.lastName || !form.username) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (/\s/.test(form.username)) {
      setError("Username cannot contain spaces.");
      return;
    }
    onNext();
  };

  return (
    <>
      <div style={styles.title}>Choose your username</div>
      <div style={styles.subtitle}>This will be your public display name on Campus Marketplace</div>

      {error && <div style={styles.errorMsg}>⚠ {error}</div>}

      <div style={styles.formGroup}>
        <label style={styles.label}>First Name</label>
        <input style={styles.input} name="firstName" value={form.firstName} onChange={handleChange} placeholder="Enter your first name" />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Last Name</label>
        <input style={styles.input} name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Username</label>
        <input style={styles.input} name="username" value={form.username} onChange={handleChange} placeholder="e.g. juan_dela_cruz" />
      </div>

      <button
        style={{ ...styles.submitBtn, background: hovered ? MAROON_LIGHT : MAROON }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleNext}
      >
        Continue
      </button>
      <button style={styles.outlineBtn} onClick={onBack}>Back</button>
    </>
  );
}

// ── Step 3: Verify Phone ──────────────────────────────────────────
function StepPhone({ onNext, onBack }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleSendOtp = () => {
    if (!phone || phone.length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setOtpSent(true);
    setSuccess("OTP sent! Check your messages.");
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleVerify = () => {
    if (!otp || otp.length < 4) {
      setError("Please enter the OTP sent to your phone.");
      return;
    }
    onNext();
  };

  return (
    <>
      <div style={styles.title}>Verify your phone</div>
      <div style={styles.subtitle}>We'll send a one-time code to confirm your number</div>

      {error && <div style={styles.errorMsg}>⚠ {error}</div>}
      {success && <div style={styles.successMsg}>✓ {success}</div>}

      <div style={styles.formGroup}>
        <label style={styles.label}>Phone Number</label>
        <div style={styles.phoneRow}>
          <div style={styles.phonePrefix}>🇵🇭 +63</div>
          <input
            style={{ ...styles.input, flex: 1 }}
            type="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setError(""); }}
            placeholder="9XX XXX XXXX"
          />
        </div>
      </div>

      {!otpSent ? (
        <button
          style={{ ...styles.submitBtn, background: hovered ? MAROON_LIGHT : MAROON }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleSendOtp}
        >
          Send OTP
        </button>
      ) : (
        <>
          <div style={styles.formGroup}>
            <label style={styles.label}>Enter OTP</label>
            <input
              style={{ ...styles.input, letterSpacing: "0.25rem", fontSize: "1.1rem", textAlign: "center" }}
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => { setOtp(e.target.value); setError(""); }}
              placeholder="· · · · · ·"
            />
          </div>
          <button
            style={{ ...styles.submitBtn, background: hovered ? MAROON_LIGHT : MAROON }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleVerify}
          >
            Verify & Continue
          </button>
          <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
            <button style={styles.signinLink} onClick={handleSendOtp}>Resend OTP</button>
          </div>
        </>
      )}

      <button style={styles.outlineBtn} onClick={onBack}>Back</button>
    </>
  );
}

// ── Step 4: Accept Terms ──────────────────────────────────────────
function StepTerms({ onFinish, onBack }) {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleFinish = () => {
    if (!agreed) {
      setError("You must accept the Terms & Conditions to proceed.");
      return;
    }
    onFinish();
  };

  return (
    <>
      <div style={styles.title}>Terms & Conditions</div>
      <div style={styles.subtitle}>Please read and accept before continuing</div>

      {error && <div style={styles.errorMsg}>⚠ {error}</div>}

      <div style={styles.termsText}>
        <strong>Campus Marketplace Terms of Service</strong>
        <br /><br />
        By creating an account, you agree to use Campus Marketplace solely for legitimate transactions within the CIT-U community. You must not post fraudulent listings, misrepresent products, or engage in any activity that violates school policy or applicable law.
        <br /><br />
        <strong>Privacy Policy</strong>
        <br /><br />
        We collect your name, email, phone number, and username to operate your account. Your data is never sold to third parties. You may request account deletion at any time by contacting campus support.
        <br /><br />
        <strong>Community Guidelines</strong>
        <br /><br />
        Treat all buyers and sellers with respect. Any form of harassment, hate speech, or dishonest dealing will result in immediate account suspension.
      </div>

      <label style={styles.checkRow} onClick={() => { setAgreed(!agreed); setError(""); }}>
        <input type="checkbox" checked={agreed} onChange={() => {}} style={{ marginTop: "2px", accentColor: MAROON, width: "16px", height: "16px", flexShrink: 0 }} />
        <span>I have read and agree to the <span style={{ color: MAROON, fontWeight: 600 }}>Terms & Conditions</span> and <span style={{ color: MAROON, fontWeight: 600 }}>Privacy Policy</span>.</span>
      </label>

      <button
        style={{ ...styles.submitBtn, background: hovered ? MAROON_LIGHT : MAROON, opacity: agreed ? 1 : 0.6, cursor: agreed ? "pointer" : "not-allowed" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleFinish}
      >
        Create Account
      </button>
      <button style={styles.outlineBtn} onClick={onBack}>Back</button>
    </>
  );
}

// ── Main Modal ────────────────────────────────────────────────────
export default function SignUpModal({ isOpen, onClose, onSwitchToSignIn }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleFinish = () => setDone(true);

  const handleClose = () => {
    setStep(0);
    setDone(false);
    onClose();
  };

  const stepLabels = ["SSO Auth", "Username", "Verify Phone", "Terms"];

  const StepBar = () => (
    <div style={styles.stepBar}>
      {stepLabels.map((label, i) => {
        const state = i < step ? "done" : i === step ? "active" : "idle";
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={styles.stepItem}>
              <div style={styles.stepCircle(state)}>
                {i < step ? "✓" : i + 1}
              </div>
              <span style={styles.stepLabel(state)}>{label}</span>
            </div>
            {i < stepLabels.length - 1 && (
              <div style={{ ...styles.stepConnector(i < step), flex: 1, marginBottom: "18px" }} />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={handleClose}>✕</button>

        <div style={styles.logo}>
          <div style={styles.logoTitle}>Campus Marketplace</div>
          <div style={styles.logoSub}>CIT-U's official school merchandise store</div>
        </div>

        {!done && <StepBar />}

        {done ? (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <div style={styles.title}>Account Created!</div>
            <div style={{ ...styles.subtitle, marginBottom: "1.5rem" }}>
              Welcome to Campus Marketplace. You're all set!
            </div>
            <div style={styles.successMsg}>✓ Your account has been successfully created.</div>
            <button
              style={styles.submitBtn}
              onClick={handleClose}
            >
              Get Started
            </button>
          </div>
        ) : step === 0 ? (
          <StepSSO onNext={() => setStep(1)} onSwitchToSignIn={onSwitchToSignIn} />
        ) : step === 1 ? (
          <StepUsername onNext={() => setStep(2)} onBack={() => setStep(0)} />
        ) : step === 2 ? (
          <StepPhone onNext={() => setStep(3)} onBack={() => setStep(1)} />
        ) : (
          <StepTerms onFinish={handleFinish} onBack={() => setStep(2)} />
        )}
      </div>
    </div>
  );
}