import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import GradientSlideshow from "../assets/components/GradientSlideshow";
import { NavLink } from "react-router-dom";

 // Make sure this file exists and includes the CSS below

function Home() {
  return (
    <div className="container" id="Home">
      <div className="grid1">
        <div className="left-side">
          <h1>Let’s Plan Your Next Great Escape Adventure</h1>
          <p>
            Whether it’s a weekend getaway or a world tour, we’ll make it
            seamless and spectacular.
          </p>
          <NavLink to="/contact">
          <button>
            Let's talk <span><FaLongArrowAltRight /></span>
          </button>
          </NavLink>
        </div>

        <div className="rightside">
          <div className="her-img">
            <img src="world.png" alt="world" />
          </div>
        </div>
      </div>

<div className="plan">
    <h1>Your Trip Starts Here</h1>
    <div className="contant gridk">
        <div className="fi"><img src="light_bundle_and_save.png" alt="bundle"/>
        <h2>Bundle & Save</h2>
        <p>Get more, spend less wherever you see Bundle & Save deals</p>
        <button>Learn more</button>
        </div>
        <div className="fi">
            <img src="light__luggage.png" alt="luggage" />
        <h2>More flights, one search</h2>
        <p>We have more flights than any travel booking site</p>
        <button>Explore flights</button>
        </div>
        <div className="fi">
            <img src="light_ftc (2).webp" alt="" />
        <h2>Upfront pricing</h2>
        <p>We’re not like the others—we include taxes and fees</p>
        <button>Explore stays</button>
        </div>
    </div>

    <div className="content">
        <div className="fii">
            <h2>Where to Go in 2026</h2>
            <p>Discover Expedia’s travel trends and take the first step toward your next unforgettable trip.</p>
            <button>Unpack the trends  </button>
        </div>
        <div className="fii">
            <h2>Save on stays for Thanksgiving</h2>
            <p>Uncover the best hotel, flight, and package deals.</p>
            <button>Shop deals now </button>
        </div>
    </div>
  </div>

  <div className="fiii">
    <h1>We turn travel complexity into clarity and confidence</h1>
    <p>Plan smarter, book faster, and travel better—with proactive support every step of the way.</p>
    <div className="next">
        <div className="div fs top">
            <img src="light__flight.svg" alt="" />
            <h2>Enhance traveler satisfaction and on-time arrival rates</h2>
        </div>
        <div className="div top">
            <img src="light__cruise.svg" alt="" />
            <h2>Automate confirmations, reminders, and travel updates</h2>
        </div>
        <div className="div fs top">
            <img src="light__ticket.svg" alt="" />
            <h2>Minimize itinerary disruptions and booking errors</h2>
        </div>
        <div className="div fs bor">
            <img src="light__car.svg" alt="" />
            <h2>Reduce manual coordination and support costs</h2>
        </div>
        <div className="div bor">
            <img src="light__package.svg" alt="" />
            <h2>Boost operational efficiency and real-time visibility</h2>
        </div>
        <div className="div fs bor">
            <img src="light__bed.svg" alt="" />
            <h2>Optimize partner performance across airlines, hotels, and transport</h2>
        </div>
    </div>
  </div>

<hr />
      {/* Travel Logo Loop */}
      
<div className="travel-logo-section">
    <div className="hre"><h1>Trusted by the world's most innovative companies</h1></div>
  {/* Top row: scrolls left to right */}
  <div className="travel-logo-mask">
    <div className="travel-logo-track reverse">
      <img src="654bb71a7de5dc1f5bfd8a5d_experian.svg" alt="Expedia" />
      <img src="654bb71a7de5dc1f5bfd8a5e_cisco.svg" alt="Booking.com" />
      <img src="654bb71a7de5dc1f5bfd8a5f_ikea.svg" alt="Airbnb" />
      <img src="654bb71a7de5dc1f5bfd8a6d_sega.svg" alt="TripAdvisor" />
      <img src="654bb71a7de5dc1f5bfd8a6e_zoho.svg" alt="Skyscanner" />
      <img src="654bb71a7de5dc1f5bfd8a59_bentley.svg" alt="Kayak" />
      <img src="654bb71a7de5dc1f5bfd8a6f_wix.svg" alt="Agoda" />
      <img src="654bb71a7de5dc1f5bfd8a5d_experian.svg" alt="Expedia" />
      <img src="654bb71a7de5dc1f5bfd8a5e_cisco.svg" alt="Booking.com" />
      <img src="654bb71a7de5dc1f5bfd8a5f_ikea.svg" alt="Airbnb" />
      <img src="654bb71a7de5dc1f5bfd8a6d_sega.svg" alt="TripAdvisor" />
      <img src="654bb71a7de5dc1f5bfd8a6e_zoho.svg" alt="Skyscanner" />
      <img src="654bb71a7de5dc1f5bfd8a59_bentley.svg" alt="Kayak" />
      <img src="654bb71a7de5dc1f5bfd8a6f_wix.svg" alt="Agoda" />
    </div>
  </div>

  {/* Bottom row: scrolls right to left */}
  <div className="travel-logo-mask">
    <div className="travel-logo-track">
      <img src="654bb71a7de5dc1f5bfd8a69_roblox.svg" alt="TUI Group" />
      <img src="654bb71a7de5dc1f5bfd8a68_repl-it.svg" alt="Lonely Planet" />
      <img src="654bb71a7de5dc1f5bfd8a64_nespresso.svg" alt="Trivago" />
      <img src="654bb71a7de5dc1f5bfd8a61_h-m.svg" alt="Expedia" />
      <img src="654bb71a7de5dc1f5bfd8a6d_sega.svg" alt="Booking.com" />
      <img src="654bb71a7de5dc1f5bfd8a59_bentley.svg" alt="Airbnb" />
      <img src="654bb71a7de5dc1f5bfd8a6e_zoho.svg" alt="TripAdvisor" />
      <img src="654bb71a7de5dc1f5bfd8a69_roblox.svg" alt="TUI Group" />
      <img src="654bb71a7de5dc1f5bfd8a68_repl-it.svg" alt="Lonely Planet" />
      <img src="654bb71a7de5dc1f5bfd8a64_nespresso.svg" alt="Trivago" />
      <img src="654bb71a7de5dc1f5bfd8a61_h-m.svg" alt="Expedia" />
      <img src="654bb71a7de5dc1f5bfd8a6d_sega.svg" alt="Booking.com" />
      <img src="654bb71a7de5dc1f5bfd8a59_bentley.svg" alt="Airbnb" />
      <img src="654bb71a7de5dc1f5bfd8a6e_zoho.svg" alt="TripAdvisor" />
    </div>
  </div>
  
<div className="plan">
  <div className="heading"><h1>Some Famous Places to Visit</h1></div>
  <div className="headin"><h1>Some Famous Places to Visit</h1></div>
  <GradientSlideshow />
</div>

  
</div>

      
      </div>
    
  );
}

export default Home;