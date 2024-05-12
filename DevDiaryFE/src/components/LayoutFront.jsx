import React from "react";
import { Link, Outlet } from "react-router-dom";

function LayoutFront() {
  return (
    <div className="flex flex-col min-h-screen">
    <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="hover:bg-gray-700 rounded px-3 py-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-gray-700 rounded px-3 py-2">About</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:bg-gray-700 rounded px-3 py-2">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here" className="hover:bg-gray-700 rounded px-3 py-2">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <header className="bg-gray-900 text-white text-center">My Blog App</header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        Footer Content
      </footer>
    </div>
  );
}

export default LayoutFront;
