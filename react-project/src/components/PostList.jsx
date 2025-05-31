
import Post from './Post';
import { useState } from 'react';

const PostList = (props) => {   

 
 // PostList.jsx:11 Each child in a list should have a unique "key" prop. how to fix it 
 const [postBody, setPostBody] = useState('This is a default post content.');
 const changeBodyHandler = (event) => {
    setPostBody(event.target.value);
    console.log("Body changed to:", event.target.value);  
 }
  return (
    <ul className="posts">
      {props.payload.map((item, index) => (
        <li  key={index}>
        <Post key={index} author={item.author} body={postBody} onChange={changeBodyHandler} />
        </li> 
      ))}
    </ul>
  );
}

export default PostList;