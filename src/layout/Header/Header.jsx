import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const dropdownRef = useRef(null);
    const { logout, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const activeLinkStyle = {
        transition: "all 0.3s ease-in-out",
        color: "var(--secondart-800)",
        background: "var(--secondary-100)",
        outline: "none",
        borderWidth: "1px",
        borderColor: "var(--secondary-500)",
    };

    // toggle theme
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center">
            {/* Logo */ }
            <Link to="/">
                <div className="flex justify-center gap-2 items-center">
                    <img src="./logo.png"
                        className="w-8" />
                    <h1 className="text-2xl font-extrabold lg:block hidden">GhorFix</h1>
                </div>
            </Link>

            {/* Mobile menu button, user icon and theme switch */ }
            <div className="lg:hidden flex items-center gap-2">
                <button onClick={ handleThemeSwitch }
                    className="h-12 w-12 rounded-full p-2 hover:bg-primary-200">
                    <svg className={ `fill-violet-700 ${theme === "light" ? "block" : "hidden"}` } fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className={ `fill-yellow-500 ${theme === "dark" ? "block" : "hidden"}` } fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className={ `group relative ${user ? "block" : "hidden"}` }>
                    <img alt={ user?.displayName } className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-secondary-500" src={ user?.photoURL || "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" } />
                    <div className="absolute top-0 flex flex-col items-center hidden mt-8 group-hover:flex">
                        <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                        <span className="relative z-10 p-2 text-xs leading-none whitespace-nowrap bg-secondary-300 shadow-lg">{ user?.displayName }</span>
                    </div>
                </div>
                <button className="navbar-burger flex items-center text-primary-inverse p-3" onClick={ toggleMenu }>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop menu */ }
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                {/* Menu items */ }
                <li><NavLink to="/" className="text-sm hover:text-gray-500 px-3 py-1 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Home</NavLink></li>
                <li><NavLink to="/services" className="text-sm hover:text-gray-500 px-3 py-1 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Services</NavLink></li>
                <div className="relative" ref={ dropdownRef }>
                    <button onClick={ toggleDropdown } className={ `text-sm hover:text-gray-500 focus:text-secondary-600 px-3 py-1 rounded-full flex justify-center items-center gap-1 ${user ? "block" : "hidden"}` }>Dashboard<span className="material-symbols-outlined">
                        chevron_right
                    </span></button>
                    { isDropdownOpen && (
                        <ul className={ `absolute -top-2 left-full w-80 bg-secondary-50 border border-gray-200 rounded-2xl shadow-lg z-50 ${user ? "block" : "hidden"}` }>
                            <div className="flex flex-wrap">
                                <li className="w-1/2">
                                    <NavLink to="/dashboard/add-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Add Service</NavLink>
                                </li>
                                <li className="w-1/2">
                                    <NavLink to="/dashboard/manage-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Manage Service</NavLink>
                                </li>
                                <li className="w-1/2">
                                    <NavLink to="/dashboard/booked-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Booked Services</NavLink>
                                </li>
                                <li className="w-1/2">
                                    <NavLink to="/dashboard/service-to-do" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Service To-Do</NavLink>
                                </li>
                            </div>
                        </ul>
                    ) }
                </div>
            </ul>

            {/* Theme switch, user icon and login/logout button */ }
            <div className="hidden lg:flex gap-4 justify-center items-center">
                <button onClick={ handleThemeSwitch }
                    className="h-12 w-12 rounded-full p-2 hover:bg-primary-200">
                    <svg className={ `fill-violet-700 ${theme === "light" ? "block" : "hidden"}` } fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className={ `fill-yellow-500 ${theme === "dark" ? "block" : "hidden"}` } fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </button>

                <div className={ `group relative ${user ? "block" : "hidden"}` }>
                    <img alt={ user?.displayName } className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-secondary-500" src={ user?.photoURL || "https://www.uab.edu/humanresources/home/images/RecordsAdmin/RecordsIcon_Oracle_SelfService.png" } />
                    <div className="absolute top-0 flex-col items-center hidden mt-8 group-hover:flex">
                        <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                        <span className="relative p-2 text-xs leading-none whitespace-nowrap bg-secondary-300 shadow-lg">{ user?.displayName }</span>
                    </div>
                </div>
                { user ? (
                    <button onClick={ handleLogout } className="py-2 px-6 bg-primary-950 hover:bg-primary-900 text-text-50 text-sm text-gray-900 font-bold rounded-full transition duration-200">Logout</button>
                ) : (
                    <Link to="/login" className="py-2 px-6 bg-primary-950 hover:bg-primary-900 text-text-50 text-sm text-gray-900 font-bold rounded-full transition duration-200">Sign In</Link>
                ) }
            </div>

            {/* Mobile menu */ }
            <div className={ `navbar-menu fixed z-10 inset-0 ${isMenuOpen ? "" : "hidden"}` }>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-background-50 border-r overflow-y-auto">
                    {/* Mobile menu content */ }
                    <div className="flex items-center mb-8">
                        {/* Logo for mobile menu */ }
                        <Link className="flex justify-center gap-2 items-center mr-auto text-3xl font-bold leading-none" to="/">
                            <img src="./logo.png" className="w-8" />
                            <h1 className="text-2xl font-extrabold">GhorFix</h1>
                        </Link>
                        {/* Close mobile menu button */ }
                        <button className="navbar-close" onClick={ closeMenu }>
                            <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Mobile menu items */ }
                    <div>
                        <ul>
                            <li className="mb-1">
                                <NavLink className="block p-4 text-sm font-semibold text-gray-500 hover:text-secondary-600 rounded-full" to="/" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Home</NavLink>
                                <NavLink className="block p-4 text-sm font-semibold text-gray-500 hover:text-secondary-600 rounded-full" to="/services" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Services</NavLink>
                                <NavLink className={ `p-4 text-sm font-semibold text-gray-500 hover:text-secondary-600 focus:text-secondary-600 rounded-full flex items-center gap-1 ${user ? "block" : "hidden"}` } onClick={ toggleDropdown }>Dashboard<span className="material-symbols-outlined">
                                    chevron_right
                                </span></NavLink>
                                { isDropdownOpen && (
                                    <ul className={ `${user ? "block" : "hidden"}` }>
                                        <li><NavLink to="/dashboard/add-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Add Service</NavLink></li>
                                        <li><NavLink to="/dashboard/manage-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Manage Service</NavLink></li>
                                        <li><NavLink to="/dashboard/booked-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Booked Services</NavLink></li>
                                        <li><NavLink to="/dashboard/service-to-do" className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-300 rounded-full" style={ ({ isActive }) => (isActive ? activeLinkStyle : undefined) }>Service To-Do</NavLink></li>
                                    </ul>
                                ) }
                            </li>
                        </ul>
                    </div>
                    {/* Mobile menu bottom links */ }
                    <div className="mt-auto">
                        <div className="pt-6">
                            { user ? (
                                <button onClick={ handleLogout } className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-text-50 font-semibold bg-primary-950 hover:bg-primary-900 rounded-full w-full">Logout</button>
                            ) : (
                                <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-text-50 font-semibold bg-primary-950 hover:bg-primary-900 rounded-full" to="/login">Sign In</Link>
                            ) }
                        </div>
                    </div>
                </nav>
            </div>
        </nav >
    );
};

export default Header;