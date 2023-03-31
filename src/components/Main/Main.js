import MatchesList from "./Match/MatchesList";
import classes from "./Main.module.css";
import { useContext, useEffect, useState } from "react";
import OfertContext from "../../contexts/ofert-context";
import OfertDetails from "./Ofert/OfertDetails";

const Main = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ofertCtx = useContext(OfertContext);

  const { displayContent } = ofertCtx;

  const matches = windowWidth < 1240 && displayContent ? "" : <MatchesList />;
  const ofert = displayContent ? <OfertDetails /> : "";

  return (
    <main className={classes.main}>
      {matches}
      {ofert}
    </main>
  );
};

export default Main;
