import Title from "../Title/Title";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import "./program.css";
import Program_icon1 from "../../assets/program-icon-1.png";
import Program_icon2 from "../../assets/program-icon-2.png";
import Program_icon3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <section id="program">
      <div className="container">
        <Title firstText="Our PROGRAM" secendText="What We Offer" />
        <div className="program-cards">
          <div className="program-card">
            <img src={program_1} alt="program" />
            <div className="caption">
              <img src={Program_icon1} alt="program" />
              <span>Graduation Degree</span>
            </div>
          </div>
          <div className="program-card">
            <img src={program_2} alt="program" />
            <div className="caption">
              <img src={Program_icon2} alt="program" />
              <span>Masters Degree</span>
            </div>
          </div>
          <div className="program-card">
            <img src={program_3} alt="program" />
            <div className="caption">
              <img src={Program_icon3} alt="program" />
              <span>Post Graduation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
