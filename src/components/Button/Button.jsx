import styles from "./button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ className, text, icon }) => {
  return (
    <>
      <button className={`${styles.btn} ${className ? "blue_btn" : ""}`}>
        {text}
        <img src={icon} />
      </button>
    </>
  );
};

export default Button;
