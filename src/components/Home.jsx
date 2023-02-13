import { useState } from "react";

const Home = () => {
  // useState() helps us to make reactive value
  const [name, setName] = useState("Dastan");
  const [age, setAge] = useState(19);

  const changeName = (value) => {
    setName("Alish");
    setAge(20);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old!
      </p>
      <button onClick={changeName}>Click me</button>
    </div>
  );
};

export default Home;
