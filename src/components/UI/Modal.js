import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalContent = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onBackdropClicked} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
