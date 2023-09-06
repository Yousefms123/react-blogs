import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="notFound">
			<div>
				<h2>Sorroy...!</h2>
				<Link to={"/"}>
					<span className="btn-prim">Home page</span>
				</Link>
			</div>

			<img
				src="https://ouch-cdn2.icons8.com/cxf1RFcoXCI7pN0IKqF6AXBpeaqHFQC8i9qHwdsRdxY/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDIz/LzU5Nzg1MjgwLWZk/NzQtNDhmNy1hYTZi/LTIwYTA3YmVlMTQw/Yy5zdmc.png"
				alt=""
			/>
		</div>
	);
};

export default NotFound;
