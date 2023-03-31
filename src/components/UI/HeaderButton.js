import { useEffect, useState } from "react";

const HeaderButton = (props) => {
  const onButtonClickedHandler = () => {
    props.onActionClick(props.type);
  };

  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonEnabled(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <button className={props.className} onClick={onButtonClickedHandler} disabled={!buttonEnabled} >
      {props.text}
    </button>
  );
};

export default HeaderButton;