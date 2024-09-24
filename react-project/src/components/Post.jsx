import { useState  } from "react";

const names =['Shiba', 'Luna', 'Max', 'Bella', 'Charlie'];

 
let Post =(props)=>{
    const chosenName = names[Math.floor(Math.random() * names.length)];
    let author  = props.author || chosenName;
    let body = props.body || "This is a default post content."; 
    let counter = props.counter || 0;
    const [postBody, setPostBody] = useState(body);

    const changeBodyHandler = (event) => {
        body = event.target.value;
        setPostBody(body);
        console.log("Body changed to:", body);
    }
    
  return (
    <div className="post"  > 
      <h2> {counter } Post Title</h2>
      <p>Author: { author }</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>This is post body : {postBody}</p>
      <p> This is body :{body}</p>
      <p> 
        <textarea className="comment-box" placeholder="Add a comment..." onChange={props.onChange}></textarea>
      </p>
      <p>
      <textarea className="comment-box" placeholder="Add a comment..." onChange={changeBodyHandler}></textarea>
      </p>
    </div>
  );
}

export default Post;