import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:navbar shadow-md py-5">
            <div className="md:navbar-start flex items-center justify-between md:block">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/listedBooks">Listed Books</NavLink>
                        <NavLink to="/pagesToRead">Paages to Read</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        <NavLink to="/aboutUs">About Us</NavLink>
                    </ul>
                </div>
                <Link to="/" className="text-2xl md:text-3xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg">
                    <NavLink to="/" className={({ isActive }) => isActive ? "btn border border-[#23BE0A] text-[#23BE0A]" : "btn"}>Home</NavLink>
                    <NavLink to="/listedBooks" className={({ isActive }) => isActive ? "btn border border-[#23BE0A] text-[#23BE0A]" : "btn"}>Listed Books</NavLink>
                    <NavLink to="/pagesToRead" className={({ isActive }) => isActive ? "btn border border-[#23BE0A] text-[#23BE0A]" : "btn"}>Pages to Read</NavLink>
                    <NavLink to="/faq" className={({ isActive }) => isActive ? "btn border border-[#23BE0A] text-[#23BE0A]" : "btn"}>FAQ</NavLink>
                    <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "btn border border-[#23BE0A] text-[#23BE0A]" : "btn"}>About Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5 hidden md:flex">
                <a className="btn bg-[#23BE0A] text-white hover:border-2 hover:border-[#23BE0A] hover:text-black">Sign in</a>
                <a className="btn bg-[#59C6D2] text-white hover:text-black hover:border-2 hover:border-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;