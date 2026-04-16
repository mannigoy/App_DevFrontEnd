import { Routes, Route, useNavigate,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/MarketPlace";
import Contactpage from "./pages/Contactpage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SellerSide from "./pages/SellerSide/SellerSide";


export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSellerDashboard = location.pathname === "/user/seller";

  return (
    <div className="app-page">
      {/* Note: You might want to hide the Navbar/Footer on the seller dashboard later! */}
      {!isSellerDashboard && (
        <Navbar
          onOrdersClick={() => console.log("Orders clicked")}
          onSignInClick={() => navigate("/login")}
        />
      )}

      <div className="app-content">
        <Routes>
          <Route path="/landing_page" element={<Marketplace />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/seller" element={<SellerSide />} /> {/* <-- Uncommented */}
        </Routes>
      </div>

     {!isSellerDashboard && <Footer />}
    </div>
  );
}