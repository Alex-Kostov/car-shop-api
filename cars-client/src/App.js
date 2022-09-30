import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Route
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
		errorElement: <div>Oops, There is an error</div>,
	},
	{
		path: "/all-cars",
		element: <div>All Cars</div>,
		errorElement: <div>Oops, There is an error</div>,
	}
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
