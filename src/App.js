import {useReducer } from "react";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import OfertProvider from "./contexts/OfertContext";
import Main from "./components/Main/Main";
import WalletModal from "./components/WalletActions/WalletModal";
import BetProvider from "./contexts/BetContext";
import BetsModal from "./components/BetChecking/BetsModal";

const initialModal = { display: false, modal: "" };

const reducer = (state, action) => {
  if (action.name === "wallet") {
    if (action.type === "open") {
      return { display: true, modal: action.name };
    }
  } else if (action.name === "betCheck") {
    if (action.type === "open") {
      return { display: true, modal: action.name };
    }
  }

  return initialModal;
};

function App() {
  const [modalToDisplay, dispatchModalToDisplay] = useReducer(
    reducer,
    initialModal
  );

  const onHeaderActionButton = (Name) => {
    dispatchModalToDisplay({ name: Name, type: "open" });
  };

  const onBackdropClickedHandler = (Name) => {
    dispatchModalToDisplay({ name: Name, type: "close" });
  };

  const onClosingIconClickedHandler = (Name) => {
    dispatchModalToDisplay({ name: Name, type: "close" });
  };

  return (
    <BetProvider>
      {modalToDisplay.display ? (
        modalToDisplay.modal === "wallet" ? (
          <WalletModal
            onBackdropClicked={onBackdropClickedHandler}
            onClosingIconClicked={onClosingIconClickedHandler}
          />
        ) : (
          <BetsModal
            onBackdropClicked={onBackdropClickedHandler}
            onClosingIconClicked={onClosingIconClickedHandler}
          />
        )
      ) : (
        ""
      )}
      <Header onHeaderActionButtonClicked={onHeaderActionButton} />
      <OfertProvider>
        <Main />
      </OfertProvider>
      <footer className={classes.footer}>Win your life with MasterBET !</footer>
    </BetProvider>
  );
}

export default App;
