import classes from "./Button.module.css";

const Button = (props) => {
 const onButtonClickedHandler = () => {
    if(props.id !== undefined) {
      props.onActionClick(props.id);
      return;
    }
    props.onActionClick(props.text);
 } 
  
 return (
    <button className={classes.button} onClick={onButtonClickedHandler}>
      {props.text}
    </button>
  );
};

export default Button;