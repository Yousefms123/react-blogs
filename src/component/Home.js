import { useEffect, useState } from "react";
import BlogsList from "./Blogslist";
import useFetch from "./useFetch";

const Home = () => {
	const { blogs, pending, error } = useFetch("http://localhost:8000/blogs");
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{pending && <div className="loader"></div>}
			{blogs && <BlogsList blogs={blogs} />}
		</div>
	);
};

export default Home;
