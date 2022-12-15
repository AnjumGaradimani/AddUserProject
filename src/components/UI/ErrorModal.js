import React from "react";
import errorstyles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={errorstyles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={errorstyles.modal}>
      <header className={errorstyles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={errorstyles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={errorstyles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
