import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader' 


function App() {
 // const [count, setCount] = useState(0)
 let listofbooks = [{id:0, author: "ssb", body: "react is awesome"}, {id:1, author: "ssb2", body: "react is awesome really"}];
 const [modalIsVisible, setModalIsVisible] = useState(false);

 function toggleModal() {
  setModalIsVisible(!modalIsVisible);
  console.log("Modal visibility changed to:", !modalIsVisible);
}


  return (
<>
    <MainHeader onCreatePost={toggleModal}/> 
    <main> 
      <PostList payload = {listofbooks} isPosting ={modalIsVisible} toggleModal={toggleModal}/> 
      <div className="footer">
        <p>Made with ❤️ by Shiba</p>
      </div>
    </main>
    </>
  )
}

export default App
