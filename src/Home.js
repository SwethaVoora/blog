const Home = () => {

  // Every function has access to event details. Incase we need it, we use the 'e' parameter.
  const handleClick = (e) => {
    console.log('Hello World', e);
  }

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name,  e.target);
  }

  return (
    <div className="Home">
      <h2>Homepage</h2>
      {/* having a paranthesis(with/without arguments in it) after the function will invoke it directly even before the button is clicked. 
      So, we do not include parenthesis after the function name.
      Instead, we create an anonymous function and provide the arguments to it. 
      Example: Click me again button below */}
      <button onClick={handleClick}>Click me</button> 
      {/* <button onClick={handleClickAgain('mario')}>Click me again</button> */}
      <button onClick={(e) => {
        handleClickAgain('Voora!', e)
      }}>Click me again</button>

    </div>
  );
}
 
export default Home;