import { useState } from "react";
import { handleSubmit } from "./FirebaseUtils";

// Contact component for the contact page
function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailStatus, setEmailStatus] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      console.error("All fields are required!");
      return;
    }
    const success = await handleSubmit(name, email, message);

    if (success) {
      setEmailStatus(true);
    }
  }
  
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Contact Orła Gym</h1>
            <p>
              If you have any questions or need further information, feel free
              to contact us through the form below. We’re here to help you
              achieve your fitness goals!
            </p>
            {emailStatus ? (
              <div className="alert alert-success" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-dark" type="submit" >
                  Submit
                </button>
              </form>
            )}
          </div>
          <div className="col-md-6">
            <h2>Visit Us</h2>
            <p>Address: Gym street, Łódź, Woj Łódzkie, Polska</p>
            <p>Phone: +48 123 456 789</p> <p>Email: info@orlagym.pl</p>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086730576103!2d144.95592551561146!3d-37.81634677975164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f1a2c7e09da7!2sOrla+Gym!5e0!3m2!1sen!2spl!4v1633429833708!5m2!1sen!2spl"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Orła Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
