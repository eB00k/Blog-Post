const Home = () => {
  const handleClick = (e) => {
    console.log("hello, Dastan", e.target);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello, ${name}`, e);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Alish", e)}>Click me again</button>
    </div>
  );
};

export default Home;
