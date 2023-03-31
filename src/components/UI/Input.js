import classes from "./Input.module.css";
import { useState, useEffect } from "react";

const Input = (props) => {
  const [value, setValue] = useState(0);

  const onChangeHandler = (event) => {
    props.onChange(parseFloat(event.target.value));
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.valueToAdd === undefined) {
    } else {
      props.onChange(parseFloat(value) + props.valueToAdd);
      setValue((prevValue) => {
        return parseFloat(prevValue) + props.valueToAdd;
      });
    }
  }, [props.counter]);

  return (
    <input
      className={!props.valid ? classes.input : classes["invalid--input"]}
      type="number"
      min="0"
      max="1000000"
      value={value}
      onChange={onChangeHandler}
      step="0.01"
    ></input>
  );
};

export default Input;
