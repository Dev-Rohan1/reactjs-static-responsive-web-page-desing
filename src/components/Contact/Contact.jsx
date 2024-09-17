import Button from "../Button/Button";
import Title from "../Title/Title";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact_us">
      <div className="container">
        <Title firstText="Contact" secendText="Get in Touch" />
        <div className="contact_wrapper">
          <div className="conatact_col">
            <div className="contact_title">
              <h2>Send us a message</h2>
              <img src={msg_icon} alt="msg_icon" />
            </div>
            <div className="contact_info">
              <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>
            </div>
            <div className="contact_box">
              <img src={mail_icon} alt="mail_icon" />
              <span>Contact@xyz.dev</span>
            </div>
            <div className="contact_box">
              <img src={phone_icon} alt="mail_icon" />
              <span>+1 123-456-7890</span>
            </div>
            <div className="contact_box">
              <img src={location_icon} alt="mail_icon" />
              <span>
                77 Massachusetts Ave, Cambridge <br />
                MA 02139, United State{" "}
              </span>
              <span> </span>
            </div>
          </div>
          <div className="conatact_col">
            <form>
              <label>Your name</label>
              <input type="text" placeholder="Enter Your Name" />
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Your Name" />
              <label>Your Email</label>
              <input type="text" placeholder="Enter Your Name" />
              <label>Write your messages here</label>
              <textarea placeholder="Write your message"></textarea>
              <Button className={"blue"} text="Submit" icon={white_arrow} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
