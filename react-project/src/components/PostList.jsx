
import Post from './Post';
const PostList = (props) => {   
  if (!props.payload || props.payload.length === 0) {
    return <p className="empty">No posts available</p>;
  }
 // PostList.jsx:11 Each child in a list should have a unique "key" prop. how to fix it 


  return (
    <ul className="posts">
      {props.payload.map((item, index) => (
        <li  key={index}>
        <Post key={index} author={item.author} body={item.body} />
        </li> 
      ))}
    </ul>
  );
}

export default PostList;