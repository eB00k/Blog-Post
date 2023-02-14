import { useState } from "react";
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
      author: "Aliher",
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
  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Bogs"/>
     <BlogList blogs={blogs.filter((blog) => blog.author === "Dastan")} title="Dastan's Bogs"/>
    </div>
  );
};

export default Home;
