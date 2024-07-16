import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressBook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <div className="container  p-5">
        <div className=" row">
          <div className="contact-info col-12 col-md-12 col-lg-6">
            <div className="contact-item " data-aos="flip-up">
              <div className="icon">
                <FaSquarePhone />
              </div>
              <div>
                <p>Phone number</p>
                <p>
                  <Link
                    className="text-dark text-decoration-none"
                    to="tel:01015948735"
                  >
                    01015948735
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item " data-aos="flip-up">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div>
                <p>Email address</p>
                <p>
                  <Link
                    className="text-dark text-decoration-none"
                    to="mailto:aaaaa@gmail.com"
                  >
                    aaaaa@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item " data-aos="flip-up">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>Location</p>
                <p>
                  <Link
                    className="text-dark text-decoration-none"
                    to="https://www.google.com/maps?q=your+location+address"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Your Location
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item " data-aos="flip-up">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div>
                <p>Fax address</p>
                <p>
                  <Link
                    className="text-dark text-decoration-none"
                    to="tel:01015948735"
                  >
                    01015948735
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form col-12 col-md-12 col-lg-6">
            <h2 data-aos="flip-up">Contact Us</h2>
            <p data-aos="flip-up">
              Lorem ipsum dolor sit met, connecter adipiscing elit, Carabid tur
              auctor Justo Lorem ipsum dolor sit met, connecter adipiscing elit
            </p>
            <form>
              <input
                data-aos="flip-up"
                type="text"
                className="form-control border-0 border-bottom"
                placeholder="Name"
              />
              <input
                data-aos="flip-up"
                type="email"
                className="form-control border-0 border-bottom"
                placeholder="Email"
              />
              <textarea
                data-aos="flip-up"
                placeholder="Message"
                className="form-control border-0 border-bottom"
              ></textarea>
              <input
                data-aos="flip-up"
                type="text"
                className="form-control border-0 border-bottom"
                placeholder="Code"
              />
              <button type="submit" data-aos="flip-up">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
