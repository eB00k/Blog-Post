import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Dastan");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  //     In version 6, use useNavigate instead of useHistory,
  // navigate = useNavigate() instead of history = useHistory(),
  // and navigate('/') instead of history.push('/'), it should work then^^

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setAuthor("Dastan");
      setBody("");
      setTitle("");
      setIsPending(false);
      console.log("New blog added!");
      // navigate(-1);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Dastan">Dastan</option>
          <option value="Alish">Alish</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
