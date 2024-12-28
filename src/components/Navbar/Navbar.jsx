import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

    let links = <>
       <li><NavLink to='/'>Home</NavLink></li>  
       <li><NavLink to={'/statistics'}>Statistics</NavLink></li>  
       <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>  
    </>

  return (
    <div>
      <div className="navbar bg-[#9538E2] text-white rounded-t-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadgets</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
           <div className="bg-white p-1 rounded-full text-black">
           <NavLink to={'/cart'}><MdOutlineShoppingCart></MdOutlineShoppingCart></NavLink>
           </div>
           <div className="bg-white p-1 rounded-full text-black">
            <Link to={'/wishlist'}><CiHeart></CiHeart></Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
