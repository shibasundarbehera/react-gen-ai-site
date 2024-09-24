
import Post from './Post';
import { useState, useEffect  } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import NewPost from './NewPost';
 
const PostList = (props) => {   

 
 // PostList.jsx:11 Each child in a list should have a unique "key" prop. how to fix it 
 const [postBody, setPostBody] = useState('This is a default post content.');
 const [enteredauthor, setEnteredAuthor] = useState('');
 const [isFetching, setIsFetching] = useState(false);

useEffect(() => {
 async function fetchPosts() {
   const res = await fetch('https://fakestoreapi.com/products');
   const resdata = await res.json();
   // map resdata to the posts array
    const postsData = resdata.map((item) => ({
       id: item.id, // Assuming each item has a unique id
       author: item.title, // Assuming title is used as author
       body: item.description // Assuming description is used as body
   })); 
    setPosts(postsData);
   setIsFetching(true);
    console.log(resdata);
 }
  fetchPosts();
}, []); // Empty dependency array means this effect runs once after the initial render


   const [posts, setPosts] = useState([]);
     const addPostHandler = (postData) => {
         setPosts((prevPosts) => [postData, ...prevPosts]); 
         console.log("Post added:", postData);
     }
 


 const changeBodyHandler = (event) => {
  // Assuming you want to log the change in author 

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
          <Post author={post.author} body={post.body} counter={post.id} />
        </li>
      ))}
    </ul>
    {isFetching && <p>Loading...</p>} 
    </>
  );
}

export default PostList;