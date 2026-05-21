import "../styles/Contact.css"

function Contact() {
  return (
    <div className="page-content">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <textarea
            placeholder="Enter Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact