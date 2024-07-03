import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/logo dark.png";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar h-12 my-7">
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>ABout us</a>
              </li>
            </ul>
          </div>
          <img className="hover:cursor-pointer w-32 h-8" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline hover:bg-base-300 hover:text-[#343268] text-base border-[#343268]">
            Appointment <GoArrowUpRight className="text-xl font-bold"/>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
