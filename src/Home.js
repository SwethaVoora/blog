import { useState } from "react";
import BlogList from "./BlogList";



const Home = () => {

  // Every function has access to event details. Incase we need it, we use the 'e' parameter.
  // const handleClick = (e) => {
  //   console.log('Hello World', e);
  // }

  // REACTIVE VALUE - RE RENDERS THE CHANGED VALUE ON THE PAGE - START
  // When we need a reative value(which might change at some point), we use useState hook
  // for which we use a initial value and output that value in the component and then we call the set function to update
  // and then re-render it on the webpage.
  const [name, setName] = useState('mario');
  const [age,setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
  }
  // REACTIVE VALUE - RE RENDERS THE CHANGED VALUE ON THE PAGE - END

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name,  e.target);
  }

  // OUTPUTTING LISTS - START
  const [blogs, setBlogs] = useState([
    {title:'My New Website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
  ]);
  return (
    <div className="Home">
      <h2>Homepage</h2>


      {/* Below is the REACTIVE VALUE, WHICH RE-RENDERS THE ENTIRE COMPONENT, when the name value IS CHANGED */}
      <p>{ name } is { age } years old</p>


      {/* having a paranthesis(with/without arguments in it) after the function will invoke it directly even before the button is clicked. 
      So, we do not include parenthesis after the function name.
      Instead, we create an anonymous function and provide the arguments to it. 
      Example: Click me again button below */}
      <button onClick={handleClick}>Click me</button> 


      {/* <button onClick={handleClickAgain('mario')}>Click me again</button> */}
      <button onClick={(e) => {
        handleClickAgain('Voora!', e)
      }}>Click me again</button>


      <BlogList blogs = {blogs} title = "All blogs"/>

    </div>
  );
}
 
export default Home;