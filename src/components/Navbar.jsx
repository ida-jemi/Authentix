import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Authentix
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {/* Icon */}
          {isOpen ? (
            <span className="text-2xl">✖</span> // Close
          ) : (
            <span className="text-2xl">☰</span> // Hamburger
          )}
        </button>

        {/* Menu - Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/fake-news"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Fake News
          </NavLink>

          <NavLink
            to="/legal-analyzer"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Legal Analyzer
          </NavLink>

          <NavLink
            to="/bias-check"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Bias Check
          </NavLink>

          <NavLink
            to="/privacy-scan"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Privacy Scan
          </NavLink>

          {/* ✅ New History link */}
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `hover:text-indigo-600 ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            History
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (visible when open) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/fake-news"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            Fake News
          </NavLink>
          <NavLink
            to="/legal-analyzer"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            Legal Analyzer
          </NavLink>
          <NavLink
            to="/bias-check"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            Bias Check
          </NavLink>
          <NavLink
            to="/privacy-scan"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            Privacy Scan
          </NavLink>

          {/* ✅ New History link (mobile) */}
          <NavLink
            to="/history"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-indigo-600"
          >
            History
          </NavLink>
        </div>
      )}
    </nav>
  );
}
