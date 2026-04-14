import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/MarketPlace";
import Contactpage from "./pages/Contactpage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

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
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <Navbar
        onOrdersClick={() => console.log("Orders clicked")}
        onSignInClick={() => navigate("/login")}
      />

      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

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