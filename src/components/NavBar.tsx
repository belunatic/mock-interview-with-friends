// import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

// function NavBar() {
//   // Common styles for all links
//   const baseStyle = "px-4 py-2 rounded-md transition-colors duration-200 font-medium";
  
//   // Style function for NavLink active state
//   const getLinkStyle = ({ isActive }:{isActive:boolean}) => 
//     isActive 
//       ? `${baseStyle} bg-blue-600 text-white border` 
//       : `${baseStyle} text-gray-700 hover:bg-gray-100 hover:text-blue-600 border`;

//   return (
//     <nav className="bg-gray-200 dark:bg-zinc-400 text-gray-900 dark:text-zinc-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo or Brand */}
//           {/* <div className="flex-shrink-0 font-bold text-xl text-blue-600">
//             MyLogo
//           </div> */}
          
//           {/* Navigation Links */}
//           <div className="flex space-x-4">
//             <NavLink to="/" >
//               Home
//             </NavLink>
            
//               <SearchBar/>
           
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"
// import { IoSearch } from "react-icons/io5";


function NavBar() {
    return(
        <nav className="flex justify-end gap-10 dark:bg-[#B0A4A4] dark:text-white h-15 border-1 pr-5 bg-[#FAF1E6] bg-gray-200 dark:bg-zinc-400 text-gray-900 dark:text-zinc-100">

     <NavLink to="/" className="mt-4">Home</NavLink>
     <SearchBar/> 
 
        </nav>
    )
}

export default NavBar