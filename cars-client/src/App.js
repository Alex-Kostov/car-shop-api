import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import Home from './components/home';


const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<Home />
				<Link to="about">About Us</Link>
			</div>
		),
	},
	{
		path: "about",
		element: <div>About</div>,
	},
]);


function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
