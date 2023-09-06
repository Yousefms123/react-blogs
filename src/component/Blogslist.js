import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2>All Blogs</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link style={{ textDecoration: "none" }} to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogsList;
