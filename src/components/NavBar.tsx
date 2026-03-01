import { NavLink } from "react-router-dom";

function NavBar() {
  // Common styles for all links
  const baseStyle = "px-4 py-2 rounded-md transition-colors duration-200 font-medium";
  
  // Style function for NavLink active state
  const getLinkStyle = ({ isActive }:{isActive:boolean}) => 
    isActive 
      ? `${baseStyle} bg-blue-600 text-white` 
      : `${baseStyle} text-gray-700 hover:bg-gray-100 hover:text-blue-600`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0 font-bold text-xl text-blue-600">
            MyLogo
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <NavLink to="/" className={getLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/search" className={getLinkStyle}>
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;