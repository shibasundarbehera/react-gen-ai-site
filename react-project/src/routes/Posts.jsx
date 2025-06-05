import { useState ,useEffect} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Post from '../components/Post'
import PostList from '../components/PostList'
import MainHeader from '../components/MainHeader' 
import { Outlet } from 'react-router-dom'

function Posts() {
 // const [count, setCount] = useState(0)
 let listofbooks = [{id:0, author: "ssb", body: "react is awesome"}, {id:1, author: "ssb2", body: "react is awesome really"}];
 const [modalIsVisible, setModalIsVisible] = useState(false);

 function toggleModal() {
  setModalIsVisible(!modalIsVisible);
  console.log("Modal visibility changed to:", !modalIsVisible);
}


  return (
<>
 <Outlet />
    <main> 
      <PostList payload = {listofbooks} isPosting ={modalIsVisible} toggleModal={toggleModal}/>  
    </main>
    </>
  )
}

export default Posts;

export function loader() {
  // Simulate fetching posts from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, author: 'John Doe', body: 'This is the first post.' },
        { id: 2, author: 'Jane Smith', body: 'This is the second post.' },
      ]);
    }, 500);
  });
}
