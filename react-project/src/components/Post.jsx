const names =['Shiba', 'Luna', 'Max', 'Bella', 'Charlie'];

 
let Post =(props)=>{
    const chosenName = names[Math.floor(Math.random() * names.length)];
    let author  = props.author || chosenName;
    let body = props.body || "This is a default post content.";
  return (
    <div className="post">
      <h2>Post Title</h2>
      <p>Author: { author }</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p> {body}</p>
    </div>
  );
}

export default Post;