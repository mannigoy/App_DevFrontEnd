import { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="login-page">
      <div className="main">
        <div className="welcome">
          <p>Welcome to</p>
          <h1>
            Campus<span>Marketplace</span>
          </h1>
          <h3>Official school merchandise for the campus community.</h3>
        </div>

        {isLogin ? (
          <div className="login-box">
            <h2>Login</h2>

            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              type="text"
              placeholder="Enter username"
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter password"
            />

            <div className="login-actions">
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </button>

              <button type="button" className="primary-btn">
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="register-box">
            <h2>Register</h2>

            <label htmlFor="register-fullname">Full Name</label>
            <input
              id="register-fullname"
              type="text"
              placeholder="Enter full name"
            />

            <label htmlFor="register-contact">Contact</label>
            <input
              id="register-contact"
              type="text"
              placeholder="Enter contact number"
            />

            <label htmlFor="register-username">Username</label>
            <input
              id="register-username"
              type="text"
              placeholder="Enter username"
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Enter password"
            />

            <div className="login-actions">
              <button
                type="button"
                className="link-btn"
                onClick={() => setIsLogin(true)}
              >
                Back to login
              </button>

              <button type="button" className="primary-btn">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}