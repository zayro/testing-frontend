import { useEffect, useState  } from "react";
import Form from "./Form";

function Posts() {
  const [posts, setPosts] = useState([]);

  const createPost = (data) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newPost) => setPosts([newPost, ...posts]));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((posts) => {
        //console.log(posts);
        setPosts(posts)
      });
  }, []);

  return (
    <div>
      <h1>Create new post</h1>
      <hr></hr>
      <h4>By: Marlon Zayro</h4>
      <hr></hr>
      <Form submit={createPost} />
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>             
              <span>{post.id}</span> content: {post.content}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Posts;
