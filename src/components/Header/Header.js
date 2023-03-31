import classes from "./Header.module.css";
import HeaderButton from "../UI/HeaderButton";

const Header = (props) => {
  const onButtonClicked = (type) => {
    props.onHeaderActionButtonClicked(type);
  };

  return (
    <header className={classes.header}>
      <div className={classes["text-container"]}>
        <p className={classes["text--mb"]}>Master Bet</p>
      </div>
      <HeaderButton
        text="Wallet"
        onActionClick={onButtonClicked}
        className={classes["button--wallet"]}
        type="wallet"
      />
      <HeaderButton
        text="Check your bets"
        onActionClick={onButtonClicked}
        className={classes["button--check"]}
        type="betCheck"
      />
    </header>
  );
};

export default Header;
