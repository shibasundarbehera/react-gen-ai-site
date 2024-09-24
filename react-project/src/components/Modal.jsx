import classes from "../Modal.module.css";
import { useNavigate } from "react-router-dom";


 const Modal = (props) => {
  const navigate = useNavigate();
  function closeHandler(event) {
    navigate("..");
  }
 
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <form className="form" onSubmit={props.onSubmit}>
          {props.children}
          <div className="actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={props.onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
