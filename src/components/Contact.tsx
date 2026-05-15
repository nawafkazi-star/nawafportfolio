import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://wa.me/96560989689"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/nawaf-abdul-karim"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Contact Me</h4>
            <p>
              <a href="mailto:n2wafk@gmail.com" data-cursor="disable">
                n2wafk@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+96560989689" data-cursor="disable">
                +965 60989689
              </a>
            </p>
          </div>
        </div>
        <div className="contact-footer">
          <p>Made by Nawaf Kazi</p>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
