import OfertContext from "./ofert-context";
import { useState } from "react";

const OfertProvider = (props) => {
  const [shouldContentBeDisplayed, setShouldContentBeDisplayed] =
    useState(false);

  const onButtonClickedHandler = (value) => {
    setShouldContentBeDisplayed(value);
  };

  const ofertContext = {
    onButtonClicked: onButtonClickedHandler,
    displayContent: shouldContentBeDisplayed,
  };

  return (
    <OfertContext.Provider value={ofertContext}>
      {props.children}
    </OfertContext.Provider>
  );
};

export default OfertProvider;
