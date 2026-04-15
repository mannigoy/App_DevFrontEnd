<<<<<<< HEAD
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marketplace from "./MarketPlace";
import Contactpage from "./Contactpage";
import AboutPage from "./AboutPage";
import SignInModal from "./Signinmodal";
import SignUpModal from "./Signupmodal";
=======
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/MarketPlace";
import Contactpage from "./pages/Contactpage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
>>>>>>> latest

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
  },
};

export default function App() {
<<<<<<< HEAD
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUp = () => {
    setShowSignIn(false); // Close Sign In
    setShowSignUp(true);  // Open Sign Up
  };

  const openSignIn = () => {
    setShowSignUp(false); // Close Sign Up
    setShowSignIn(true);  // Open Sign In
  };
=======
  const navigate = useNavigate();
>>>>>>> latest

  return (
    <div style={styles.page}>
      <Navbar
        onOrdersClick={() => console.log("Orders clicked")}
<<<<<<< HEAD
        onSignInClick={() => setShowSignIn(true)}
      />
      
      <SignInModal 
        isOpen={showSignIn} 
        onClose={() => setShowSignIn(false)} 
        onSwitch={openSignUp} // Changed this to use the function you defined above
      />

      <SignUpModal 
        isOpen={showSignUp} 
        onClose={() => setShowSignUp(false)} 
        onSwitchToSignIn={openSignIn} // Added this to pass the switch function to the Sign Up modal
      />
      
=======
        onSignInClick={() => navigate("/login")}
      />

>>>>>>> latest
      <div style={styles.content}>
        <Routes>
          <Route path="/landing_page" element={<Marketplace />} />
          <Route path="/contact" element={<Contactpage />} />
<<<<<<< HEAD
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      
=======
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

>>>>>>> latest
      <Footer
        brandName="Campus Marketplace"
        brandDescription="The official online store for Cebu Institute of Technology - University students. Quality uniforms, merchandise, and school supplies."
        quickLinks={[
          { label: "Shop", href: "#" },
          { label: "My Orders", href: "#" },
          { label: "Notifications", href: "#" },
          { label: "Sell with Us", href: "#" },
        ]}
        contactInfo={[
          { icon: "📍", text: "CIT-U Campus, Cebu City" },
          { icon: "📞", text: "(032) 261-7900" },
          { icon: "✉️", text: "marketplace@cit.edu" },
        ]}
        socialLinks={[
          { label: "F", name: "Facebook", href: "#" },
          { label: "In", name: "Instagram", href: "#" },
          { label: "T", name: "Twitter", href: "#" },
        ]}
        copyrightText="© 2026 CIT-U Campus Marketplace. All rights reserved."
      />
    </div>
  );
}