import Header from "./Header";
import { Outlet } from "react-router-dom";

function HomeLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default HomeLayout;
