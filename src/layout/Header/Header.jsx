import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
            {/* Logo */ }
            <Link to="/">
                <div className="flex justify-center gap-2 items-center">
                    <img src="./logo.png"
                        className="w-8" />
                    <h1 className="text-2xl font-extrabold">GhorFix</h1>
                </div>
            </Link>

            {/* Mobile menu button */ }
            <div className="lg:hidden">
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
                <li><Link to="/" className="text-sm text-gray-400 hover:text-gray-500">Home</Link></li>
                <li><Link to="/" className="text-sm text-text-secondary font-bold">Home</Link></li>
            </ul>

            {/* Sign in and Sign up buttons */ }
            <button className="inline-flex items-center gap-x-2 py-2 px-3 rounded-full text-sm text-inverse-text" onClick={ handleThemeSwitch } style={ { background: "linear-gradient(120deg, var(--primary), var(--accent))" } }>
                { theme === "dark" ? (
                    <>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Light
                    </>
                ) : (
                    <>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Dark
                    </>
                ) }
            </button>
            <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
            <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>

            {/* Mobile menu */ }
            <div className={ `navbar-menu ${isMenuOpen ? '' : 'hidden'}` }>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    {/* Mobile menu content */ }
                    <div className="flex items-center mb-8">
                        {/* Logo for mobile menu */ }
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                                {/* Your SVG path for logo */ }
                            </svg>
                        </a>
                        {/* Close mobile menu button */ }
                        <button className="navbar-close" onClick={ closeMenu }>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Mobile menu items */ }
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            {/* Other mobile menu items */ }
                        </ul>
                    </div>
                    {/* Mobile menu bottom links */ }
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl" href="#">Sign Up</a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default Header;