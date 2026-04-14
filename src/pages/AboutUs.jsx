import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Campus Marketplace</h1>
          <p>Your one-stop shop for official school merchandise.</p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            Campus Marketplace is a platform designed for students, teachers,
            and school organizations to browse and purchase campus merchandise
            in one place.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make campus buying and selling simpler, more
            organized, and more accessible for the whole school community.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <p>
            We offer uniforms, supplies, accessories, and official merchandise
            while giving sellers an easier way to manage available products.
          </p>
        </div>
      </div>
    </section>
  );
}