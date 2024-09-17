import Title from "../Title/Title";
import prev_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import slider_image1 from "../../assets/user-1.png";
import slider_image2 from "../../assets/user-2.png";
import "./slider.css";

const Slider = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <Title firstText="TESTIMONIALS" secendText="What Student Says" />
        <div className="slider_wrapper">
          <div className="prev_btn">
            <button>
              <img src={prev_icon} alt="prev_icon" />
            </button>
          </div>
          <div className="slider">
            <div className="slide">
              <div className="slider_image">
                <img src={slider_image1} alt="slider_image" />
                <div className="slider-content">
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <div className="slider_info">
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="slider_image">
                <img src={slider_image2} alt="slider_image" />
                <div className="slider-content">
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <div className="slider_info">
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="next_btn">
            <button>
              <img src={next_icon} alt="next_icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
