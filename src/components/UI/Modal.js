import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props)=>{
  return (
    <div className={classes.backdrop} onClick={props.onClick}></div>
  );
}
const ModalOverlay = (props)=>{
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById("overlays");
const Modal = (props)=>{
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

























// const Backdrop = (props) => {
//   return <div className={classes.backdrop}></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };
// const Modal = (props) => {
//   return (
//     <>
//       {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         document.getElementById("overlays")
//       )}
//     </>
//   );
// };

export default Modal;
