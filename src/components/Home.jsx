import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem impsum ...",
      author: "Dastan",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "lorem impsum ...",
      author: "Alisher",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem impsum ...",
      author: "Dastan",
      id: 3,
    },
    {
      title: "Meaning of Life",
      body: "lorem impsum ...",
      author: "Islam",
      id: 4,
    },
  ]);

  const [name, setName] = useState("Dastan");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Bogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Alisher")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
