import classes from "./Section.module.css";
import closing from "../../assets/closing.png";

const Section = (props) => {
  const onClosingOfertIconHandler = () => {
    props.onClosingIconClicked();
  };

  return (
    <section className={classes.section}>
      <img
        src={closing}
        alt="close ofert"
        className={classes.img}
        onClick={onClosingOfertIconHandler}
      />
      {props.children}
    </section>
  );
};

export default Section;
