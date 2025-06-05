import classes from "../Modal.module.css";
import { useNavigate } from "react-router-dom";
import { Form } from 'react-router-dom';

 const Modal = (props) => {
  const navigate = useNavigate();
  function closeHandler(event) {
    navigate("..");
  }
 
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <Form className="form" onSubmit={props.onSubmit}>
          {props.children}
          <div className="actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={closeHandler}>Cancel</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Modal;
