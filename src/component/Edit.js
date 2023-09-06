import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditBlog = () => {
	const { id } = useParams();
	const { blogs, pending, error } = useFetch("http://localhost:8000/blogs/" + id);
	const [newTitle, setNewTitle] = useState("");
	const [newBody, setNewBody] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	const [isPending, setIsPending] = useState(false);
	const redirect = useNavigate();

	useEffect(() => {
		if (blogs) {
			setNewTitle(blogs.title);
			setNewBody(blogs.body);
			setNewAuthor(blogs.author);
		}
	}, [blogs]);

	const handleUpdate = () => {
		setIsPending(true);
		setTimeout(()=>{
			fetch("http://localhost:8000/blogs/" + id, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: newTitle, body: newBody, author: newAuthor }),
		})
			.then(() => {
				setIsPending(false);
				redirect(`/blogs/${id}`);
			})
			.catch((err) => {
				setIsPending(false);
				alert("Error updating blog:", err);
			});
		},1000)
	};

	return (
		<div className="create">
			{pending && <div className="loader"></div>}
			{error && <div>{error}</div>}
			{blogs && (
				<div>
					<h2>Edit Blog</h2>

					<label>Title:</label>
					<input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />

					<label>Body:</label>
					<textarea
						rows={10}
						value={newBody}
						onChange={(e) => setNewBody(e.target.value)}
					></textarea>

					<label>Blog author:</label>
					<input value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
					<button className="btn-prim" onClick={handleUpdate} disabled={isPending}>
						{isPending ? "Updating..." : "Update"}
					</button>
				</div>
			)}
		</div>
	);
};

export default EditBlog;
