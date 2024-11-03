import { Contact, Landing, Projects, Skills, CV } from "./pages";

import { Error, HomeLayout } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Landing />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/projects",
					element: <Projects />,
				},
				{
					path: "/skills",
					element: <Skills />,
				},
				{
					path: "/cv",
					element: <CV />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
