// import React from "react";

// interface SearchQuestion {
// 	value: string;
// 	onChange: (value: string) => void;
// 	onSubmit: () => void;
// }

// function SearchBar({ value, onChange, onSubmit }: SearchQuestion) {
// 	// standard React event type
// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		onSubmit();
// 	};

// 	return (
// 		<form
// 			onSubmit={handleSubmit}
// 			className="flex flex-col sm:flex-row gap-2 w-full">
// 			<div className="relative flex-grow">
// 				{/* Search Icon (Optional) */}
// 				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// 					<span className="text-gray-400 text-sm">🔍</span>
// 				</div>

// 				<input
// 					type="text"
// 					value={value}
// 					onChange={(e) => onChange(e.target.value)}
// 					placeholder="Search for questions (e.g. 'React', 'Hooks')..."
// 					className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm bg-gray-200 dark:bg-zinc-400 text-gray-900 dark:text-zinc-100"
// 				/>
// 			</div>

// 			<button
// 				type="submit"
// 				className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-sm">
// 				Search
// 			</button>
// 		</form>
// 	);
// }
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchInput}`);
    setSearchInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-1 rounded-sm h-8 pl-2 pr-2 mt-3"
      >
        <input
          placeholder="search"
          className="flex-1 outline-none placeholder-black dark:placeholder-white"
          type="text"
          onChange={handleChange}
          value={searchInput}
        ></input>
      </form>
    </>
  );
}

export default SearchBar;
