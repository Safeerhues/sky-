import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="services-grid-page">

      {/* HERO */}
      <section className="services-hero-img">
        <h1>Our Travel Services</h1>
        <p>
          Explore our complete range of travel services — designed to make your
          journeys smooth, memorable, and stress-free.
        </p>
      </section>

      {/* GRID SERVICE CARDS */}
      <section className="services-grid-section">
        <h2 className="services-heading">What We Offer</h2>

        <div className="services-card-grid">

          <Link className="service-grid-card">
            <img
              src="src/sultan-BpuceCQOE2c-unsplash.jpg"
              alt="Umrah Service"
            />
            <div className="service-content">
              <h3>Umrah Packages</h3>
              <p>
                Complete Umrah services including hotel, visa, transport, and guided tours.
              </p>
              <span className="learn-more">Learn more →</span>
            </div>
          </Link>

          <Link  className="service-grid-card">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
              alt="Hotel Booking"
            />
            <div className="service-content">
              <h3>Hotel Booking</h3>
              <p>
                Book premium, affordable, and luxury hotels worldwide with upfront pricing.
              </p>
              <span className="learn-more">View hotels →</span>
            </div>
          </Link>

          <Link  className="service-grid-card">
            <img
              src="nicole-geri-gMJ3tFOLvnA-unsplash.jpg"
              alt="Ticket Booking"
            />
            <div className="service-content">
              <h3>Flight Tickets</h3>
              <p>
                Domestic & international flights at the best prices — with instant confirmation.
              </p>
              <span className="learn-more">Book tickets →</span>
            </div>
          </Link>

          <Link to="/contact" className="service-grid-card">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Transport"
            />
            <div className="service-content">
              <h3>Transport & Tours</h3>
              <p>
                Airport pickups, private drivers, and personalized city tours anywhere you go.
              </p>
              <span className="learn-more">Hire transport →</span>
            </div>
          </Link>

          <Link to="/contact" className="service-grid-card">
            <img
              src="src/derek-thomson-TWoL-QCZubY-unsplash.jpg"
              alt="Holiday Packages"
            />
            <div className="service-content">
              <h3>Holiday Packages</h3>
              <p>
                Explore Dubai, Turkey, Malaysia, and more with our curated travel packages.
              </p>
              <span className="learn-more">See packages →</span>
            </div>
          </Link>

          <Link to="/contact" className="service-grid-card">
            <img
              src="src/geojango-maps-CWbbJW_7Fsw-unsplash.jpg"
              alt="Custom Trips"
            />
            <div className="service-content">
              <h3>Customized Trips</h3>
              <p>
                Tell us your dates and budget — we’ll design your perfect travel itinerary.
              </p>
              <span className="learn-more">Plan trip →</span>
            </div>
          </Link>

        </div>
      </section>

      <Outlet />
    </div>
  );
}

export default Services;
