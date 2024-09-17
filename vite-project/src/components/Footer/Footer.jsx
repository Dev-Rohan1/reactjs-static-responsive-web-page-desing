import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="footer_line"></span>
        <div className="footer_content">
          <span>© 2024 Edusity. All rights reserved.</span>
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
