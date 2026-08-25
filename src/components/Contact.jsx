import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Have a project or opportunity?</h3>

          <p>
            I'm always interested in learning, collaborating, and exploring
            new opportunities. Feel free to contact me!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>📍</span>

              <div>
                <h4>Location</h4>
                <p>Dombivli, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>✉️</span>

              <div>
                <h4>Email</h4>
                <a href="mailto:harshal14534@gmail.com">
                  harshal14534@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>💼</span>

              <div>
                <h4>Availability</h4>
                <p>Open to Internships & Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>

            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message →"}
          </button>

          {status === "success" && (
            <p className="form-success">
              ✓ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              ✕ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;