import classes from "./WelcomeMessage.module.css";
import Button from "../UI/Button";
import Section from "../UI/Section";

const WelcomeMessage = (props) => {
   const onButtonClickedHandler = (value) => {
    props.onButtonClick(value);
  };

  return (
    <Section onClosingIconClicked={props.onClosingIconClicked}>
      <p className={classes.message}>Choose an action: </p>
      <div className={classes.buttons}>
        <Button text="Withdraw" onActionClick={onButtonClickedHandler} />
        <Button text="Charge" onActionClick={onButtonClickedHandler}/>
      </div>
    </Section>
  );
};

export default WelcomeMessage;
