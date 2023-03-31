import classes from "./WalletModal.module.css";
import Modal from "../UI/Modal";
import WelcomeMessage from "./WelcomeMessage";
import { useContext, useReducer} from "react";
import WalletAction from "./WalletAction";
import BetContext from "../../contexts/bet-context";

const WalletModal = (props) => {
  const betCtx = useContext(BetContext);
  const {amount} = betCtx;
  
  const onButtonClickedHandler = (value) => {
    dispatchContentToDisplay({ type: value });
  };

  const initial_msg = (
    <WelcomeMessage
      onButtonClick={onButtonClickedHandler}
      onClosingIconClicked={props.onClosingIconClicked}
    />
  );

  const reducer = (state, action) => {
    if (action.type === "Withdraw") {
      return (
        <WalletAction
          onClosingIconClicked={props.onClosingIconClicked}
          type='-'
        />
      );
    } else if (action.type === "Charge") {
      return (
        <WalletAction
          onClosingIconClicked={props.onClosingIconClicked}
          type='+'
        />
      );
    }

    return state;
  };

  const [contentToDisplay, dispatchContentToDisplay] = useReducer(
    reducer,
    initial_msg
  );

  return (
    <Modal onBackdropClicked={props.onBackdropClicked}>
      {contentToDisplay}
      <footer className={classes.footer}>{`Your balance: $${amount}`}</footer>
    </Modal>
  );
};

export default WalletModal;
