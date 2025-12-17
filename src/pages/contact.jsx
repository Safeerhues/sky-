const Contact = () => {
  return (
    <>
      <div className="father" id="contact">
        <div className="son">
          <p className="cu">Contact</p>
          <h1 className="u">Travel Worry-free With</h1>
          <h1 className="m">Our Reliable Support</h1>
          <div className="uu"><h1>Seamless Journeys, Trusted Support</h1></div>
          <div className="ppp">
            <p>
            🌍 Ready to plan your next adventure? Reach out today! Our team is here to answer questions, customize itineraries, and provide expert guidance. Call, email us at <strong>info@yourtravelagency.com</strong>, or visit—we’ll make your journey seamless and memorable. Let’s turn your travel dreams into reality with trusted support every step.
          </p>
          </div>
          <div className="pp">
            <p>Plan your adventure today! Email info@yourtravelagency.com for expert guidance, seamless journeys, trusted support.
</p>
          </div>

          <form className="contact-form">
              <input type="text" className="form-input" placeholder="Your Name" required />
              <input type="email" className="form-input" placeholder="Your Email" required />
            <textarea className="form-textarea" placeholder="Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;