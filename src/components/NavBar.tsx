import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
// import { IoSearch } from "react-icons/io5";

function NavBar() {
	return (
		<nav
			className="flex justify-between md:justify-end gap-10 h-15 border-1 px-5 bg-gray-300 text-zinc-900 dark:bg-zinc-400 dark:text-white
        ">
			<NavLink to="/" className="mt-4">
				Home
			</NavLink>
			<SearchBar />
		</nav>
	);
}

export default NavBar;
