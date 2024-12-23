const names =['Shiba', 'Luna', 'Max', 'Bella', 'Charlie'];

let Post =()=>{
    const chosenName = names[Math.floor(Math.random() * names.length)];
  return (
    <div className="post">
      <h2>Post Title</h2>
      <p>Author: {chosenName}</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>This is a sample post content.by Shiba ..</p>
    </div>
  );
}

export default Post;