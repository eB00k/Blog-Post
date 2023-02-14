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
      author: "Islam",
      id: 3,
    },
  ]);
  return (
    <div className="home">
     <BlogList blogs={blogs} title="My Bogs"/>
    </div>
  );
};

export default Home;
