// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name : 'yoshi', age: 30};
  // const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>App Component</h1> */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>

        /* <p> {person} </p> */
        /* All of the below datatypes will be converted to string type before getting rendered on the browser */}
        {/* <p>{ 10 }</p>
        <p> {'Hello World'} </p>
        <p> { [1,2,3,4,5]} </p>
        <p> { Math.random() * 10 } </p>
        
        <a href={ link }>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;
