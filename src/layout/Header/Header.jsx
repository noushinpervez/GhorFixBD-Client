import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { logout, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const activeLinkStyle = {
        transition: "all 0.3s ease-in-out",
        color: "var(--primary-800)",
        background: "var(--accent-100)",
        outline: "none",
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

            <div className="flex justify-center items-center">
                <div className={ `lg:hidden group relative flex flex-col items-center ${user ? 'block' : 'hidden'}` }>
                    <img alt={ user?.displayName } className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-primary-500" src={ user?.photoURL || "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" } />

                    {/* Username tooltip */ }
                    <div className="absolute top-0 flex flex-col items-center hidden mt-8 group-hover:flex">
                        <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                        <span className="relative z-10 p-2 text-xs leading-none whitespace-nowrap bg-primary-300 shadow-lg">{ user?.displayName }</span>
                    </div>
                </div>
                {/* Mobile menu button */ }
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-primary-inverse p-3" onClick={ toggleMenu }>
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop menu */ }
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                {/* Menu items */ }
                <li><NavLink to="/" className="text-sm hover:text-gray-500" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Home</NavLink></li>
                <li><NavLink to="/services" className="text-sm hover:text-gray-500" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Services</NavLink></li>
                <li><NavLink to="/dashboard" className="text-sm hover:text-gray-500" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Dashboard</NavLink></li>
            </ul>

            <div className="flex gap-2 justify-center items-center">
                <div className={ `hidden group relative lg:flex flex-col items-center ${user ? 'block' : 'hidden'}` }>
                    <img alt={ user?.displayName } className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-primary-500" src={ user?.photoURL || "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" } />

                    {/* Username tooltip */ }
                    <div className="absolute top-0 flex flex-col items-center hidden mt-8 group-hover:flex">
                        <div className="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
                        <span className="relative z-10 p-2 text-xs leading-none whitespace-nowrap bg-primary-300 shadow-lg">{ user?.displayName }</span>
                    </div>
                </div>
                {
                    user ? <button onClick={ handleLogout } className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-primary-950 hover:bg-primary-900 text-text-50 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Logout</button> :
                        <Link to="/login" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-primary-950 hover:bg-primary-900 text-text-50 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Sign In</Link>
                }
            </div>

            {/* <button className="inline-flex items-center gap-x-2 py-2 px-3 rounded-full text-sm text-inverse-text bg-primary-400 ml-2" onClick={ handleThemeSwitch }>
                { theme === "dark" ? (
                    <>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    </>
                ) : (
                    <>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    </>
                ) }
            </button> */}

            {/* Mobile menu */ }
            <div className={ `navbar-menu ${isMenuOpen ? '' : 'hidden'}` }>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-background-50 border-r overflow-y-auto">
                    {/* Mobile menu content */ }
                    <div className="flex items-center mb-8">
                        {/* Logo for mobile menu */ }
                        <a className="flex justify-center gap-2 items-center mr-auto text-3xl font-bold leading-none" href="#">
                            <img src="./logo.png"
                                className="w-8" />
                            <h1 className="text-2xl font-extrabold">GhorFix</h1>
                        </a>
                        <Link to="/">

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
                                <NavLink className="block p-4 text-sm font-semibold text-gray-500 hover:text-blue-600 rounded" to="/" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Home</NavLink>
                                <NavLink className="block p-4 text-sm font-semibold text-gray-500 hover:text-blue-600 rounded" to="/services" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Services</NavLink>
                                <NavLink className="block p-4 text-sm font-semibold text-gray-500 hover:text-blue-600 rounded" to="/dashboard" style={ ({ isActive }) => (isActive ? activeLinkStyle : {}) }>Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile menu bottom links */ }
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" to="/login">Sign in</Link>
                            <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-text-50 font-semibold bg-primary-950 hover:bg-primary-900 rounded-xl" to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default Header;