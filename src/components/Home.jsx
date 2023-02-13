const Home = () => {
  const handleClick = (e) => {
    console.log("hello, Dastan");
  };

  const handleClickAgain = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("Alish")}>Click me again</button>
    </div>
  );
};

export default Home;
