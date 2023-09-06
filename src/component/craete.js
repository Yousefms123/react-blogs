import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const redirect = useNavigate();
	 
	const handleSubmit = (e) => {
		setIsPending(true)
		e.preventDefault();
		const blog = { title, body, author };

		fetch("http://localhost:8000/blogs/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		})
			.then(() => {
				console.log("new blog added");
				setIsPending(false);
				redirect("/");
			})
			.catch((error) => {
				console.error("Error adding new blog:", error);
				setIsPending(false);
			});
		
	};

	return (
		<div className="create">
			
				<div>
					<h2>Add a New Blog</h2>
					<form onSubmit={handleSubmit}>
						<label>Blog title:</label>
						<input
							type="text"
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<label>Blog body:</label>
						<textarea
							required
							rows={10}
							value={body}
							onChange={(e) => setBody(e.target.value)}
						></textarea>
						<label>Blog author:</label>
						<input onChange={(e) => setAuthor(e.target.value)} />

						<button className="btn-added" type="submit" disabled={isPending}>
							{isPending ? "Adding..." : "Add Blog"}
						</button>
					</form>
				</div>
			
		</div>
	);
};

export default Create;
