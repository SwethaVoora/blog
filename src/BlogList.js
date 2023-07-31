// PROPS - we use them so that the data can be passed from one component to another.

// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;

const BlogList = ({blogs, title}) => {  //this statement is the same as the lines 3-5 together.

  // console.log(props, blogs);

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;