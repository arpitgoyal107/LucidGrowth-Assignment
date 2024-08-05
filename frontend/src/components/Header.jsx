import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setSticky] = useState(false);

  const onhandleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Reload the page
    window.location.reload();

    // Redirect to home page
    navigate("/");
  };

  // Check if token exists in local storage
  const token = localStorage.getItem("token");

  // handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setSticky(currentScrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white text-black ${
        isSticky ? "shadow-md transition-all duration-200 ease-in-out" : ""
      }`}
    >
      <nav className=" flex justify-between items-center px-6 py-3 ">
        <a
          href="https://www.linkedin.com/in/arpitgoyal107/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-slate-900 rounded-lg text-white text-3xl"
        >
          AG
        </a>

        <div>
          <a className="text-2xl uppercase font-semibold" href="/">
            Portfolio
          </a>
        </div>

        <ul className="flex space-x-6">
          {!token ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-gray-400 transition-all text-lg font-medium py-2 px-4 rounded-lg border-gray-900 border-2 hover:border-gray-400"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={onhandleClick}
                className="text-blue-500 hover:text-blue-700 transition-colors text-lg font-medium py-2 px-4 rounded-lg border border-blue-500 hover:border-blue-700"
              >
                Log Out
              </button>
            </li>
          )}
        </ul>

        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Open Menu"
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Header;
