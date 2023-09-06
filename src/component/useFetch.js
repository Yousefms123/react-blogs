import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [blogs, setBlogs] = useState(null);
	const [pending, isPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error("couldn't fetching data");
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					isPending(false);
					setError(null);
				})
				.catch((err) => {
					isPending(false);
					setError(err.message);
				});
		}, 1000);
	}, [url]);
	return { blogs, pending, error};
}
export default useFetch;