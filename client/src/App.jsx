import { Routes, Route, useNavigate,useLocation} from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/MarketPlace";
import Contactpage from "./pages/Contactpage";
import AboutUs from "./pages/AboutUs";
import SellerSide from "./pages/SellerSide/SellerSide";
import ShopPage from "./pages/ShopPage";
import SignUpModal from "./Signupmodal";


export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Modal State Logic
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // 2. Route Check Logic
  // Hide main layout elements when on the Seller Dashboard
  const isSellerDashboard = location.pathname.startsWith("/user/seller");

  // 3. Handlers
  const openSignUp = () => setIsSignUpOpen(true);
  const closeSignUp = () => setIsSignUpOpen(false);

  const handleSwitchToSignIn = () => {
    console.log("Redirecting to Sign In flow...");
    // If you build a separate LoginModal, you'd toggle it here.
  };

  return (
    <div className="app-container">
        {/* NAVBAR:
            We only show this if we aren't in the Seller Dashboard.
            The Sign In button opens the sign up modal.
        */}
      {!isSellerDashboard && (
        <Navbar
          onOrdersClick={() => navigate("/orders")}
            onSignInClick={openSignUp}
        />
      )}

      {/* MAIN CONTENT AREA */}
      <main className="app-content">
        <Routes>
          {/* Main Shop/Home Page */}
          <Route path="/" element={<ShopPage />} />
          
          {/* Marketplace/Landing Page */}
          <Route path="/landing_page" element={<Marketplace />} />
          
          {/* Static Pages */}
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<AboutUs />} />
          
          {/* Seller Dashboard */}
          <Route path="/user/seller/*" element={<SellerSide />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<div style={{ padding: "5rem", textAlign: "center" }}><h1>404</h1><p>Page Not Found</p></div>} />
        </Routes>
      </main>

      {/* GLOBAL SIGN UP MODAL:
          Placed outside the Routes so it can overlay any page 
          without unmounting the background content.
      */}
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={closeSignUp} 
        onSwitchToSignIn={handleSwitchToSignIn}
      />

      {/* FOOTER */}
      {!isSellerDashboard && <Footer />}
    </div>
  );
}