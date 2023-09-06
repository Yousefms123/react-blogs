import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./component/craete";
import BlogDetails from "./component/BlogDetails";
import NotFound from "./component/NotFound";
import EditBlog from "./component/Edit";
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
						<Route path="/edit/:id" element={<EditBlog />} />
						<Route path="/blogs/:id" element={<BlogDetails />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
