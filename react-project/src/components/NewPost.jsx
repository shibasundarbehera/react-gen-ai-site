import classes from '../NewPost.module.css'; 
import Modal from './Modal';
import { Form } from 'react-router-dom';


function NewPost(props) {
  
  return (
    <Modal>
    <Form className={classes.form} onSubmit={props.onSubmit}>
 
   <div className={classes.newPost}>
      <h2>Create a New Post</h2>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
      </div>
      </Form>
      </Modal>
  );
}

export default NewPost;

