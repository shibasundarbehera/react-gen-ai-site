
import Post from './Post';
import { useState  } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import NewPost from './NewPost';
 
const PostList = (props) => {   

 
 // PostList.jsx:11 Each child in a list should have a unique "key" prop. how to fix it 
 const [postBody, setPostBody] = useState('This is a default post content.');
 const [enteredauthor, setEnteredAuthor] = useState('');

   const [posts, setPosts] = useState([]);
     const addPostHandler = (postData) => {
         setPosts((prevPosts) => [postData, ...prevPosts]);
         
         console.log("Post added:", postData);
     }

 const changeBodyHandler = (event) => {
    setPostBody(event.target.value);
    console.log("Body changed to:", event.target.value);  
 }

 const changeAuthorHandler = (event) => {
     setEnteredAuthor(event.target.value);
    console.log("Author changed to:", event.target.value);
 
 }

 console.log(props.isPosting);
 
  return (
    <> 
    {props.isPosting && (
        <Modal onClose={props.toggleModal}>
          <NewPost 
          />
        </Modal>
      )}
    <ul className="posts">
      {props.payload.map((item, index) => (
        <li  key={index}>
        <Post key={index} author={enteredauthor} body={postBody} onChange={changeBodyHandler} />
        </li> 
      ))}
    </ul>
    <ul >
      {posts.map((post, index) => (
        <li key={index}>
          <Post author={post.author} body={post.body} />
        </li>
      ))}
    </ul>
    </>
  );
}

export default PostList;