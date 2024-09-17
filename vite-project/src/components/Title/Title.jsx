import "./title.css";

const Title = ({ firstText, secendText }) => {
  return (
    <div className="section_title">
      <p>{firstText}</p>
      <h2>{secendText}</h2>
    </div>
  );
};

export default Title;
