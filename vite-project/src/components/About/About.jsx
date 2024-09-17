import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./about.css";

const About = () => {
  return (
    <section id="about_us">
      <div className="container">
        <div className="about_content">
          <div className="about_left">
            <img className="about_image" src={about_image} alt="about_image" />
            <img className="play_icon" src={play_icon} alt="play_icon" />
          </div>
          <div className="about_right">
            <h4>ABOUT UNIVERSITY</h4>
            <h1>Nurturing Tomorrow's Leaders Today</h1>
            <p>
              Embark on a transformative educational journey with our
              university's comprehensive education programs. Our cutting-edge
              curriculum is designed to empower students with the knowledge,
              skills, and experiences needed to excel in the dynamic field of
              education.
            </p>
            <p>
              With a focus on innovation, hands-on learning, and personalized
              mentorship, our programs prepare aspiring educators to make a
              meaningful impact in classrooms, schools, and communities.
            </p>
            <p>
              Whether you aspire to become a teacher, administrator, counselor,
              or educational leader, our diverse range of programs offers the
              perfect pathway to achieve your goals and unlock your full
              potential in shaping the future of education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
