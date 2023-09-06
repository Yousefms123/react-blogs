import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { error, pending, blogs } = useFetch("http://localhost:8000/blogs/" + id);
	const redirect = useNavigate();
	const [isPending, setIsPending] = useState(false);

	const handleDelete = () => {
		setIsPending(true);
		setTimeout(() => {
			fetch("http://localhost:8000/blogs/" + blogs.id, {
				method: "DELETE",
			}).then(() => {
				setIsPending(false);
				redirect("/");
			});
		}, 1000);
	};

	return (
		<div className="blog-details">
			{pending && <div className="loader"></div>}
			{error && <div>{error}</div>}
			{blogs && (
				<article>
					<h2>{blogs.title}</h2>
					<p>Written by {blogs.author}</p>
					<p>{blogs.body}</p>
					<div className="action-btn">
						<button className="btn-delete btn" disabled={isPending} onClick={handleDelete}>
							{isPending ? "Deleting..." : "Delete"}
						</button>
						<Link className="" to={"/edit/" + blogs.id}>
							<button className="btn btn-edit">Edit Blog</button>
						</Link>
					</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
