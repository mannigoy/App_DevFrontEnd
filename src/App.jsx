import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marketplace from "./MarketPlace";
import Contactpage from "./Contactpage";

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
  return (
    <div style={styles.page}>
      <Navbar
        onOrdersClick={() => console.log("Orders clicked")}
        onSignInClick={() => console.log("Sign in clicked")}
      />
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/contact" element={<Contactpage />} />
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