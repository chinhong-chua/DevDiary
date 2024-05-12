import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {" "}
      {/* Ensure overflow handling */}
      <div className="bg-gray-800 text-white w-60 p-5 h-full">
        {" "}
        {/* Ensure full height */}
        <h1 className="text-xl font-semibold mb-4">Admin Panel</h1>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Blog Posts
            </Link>
          </li>
          <li>
            <Link
              to="/questions"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Coding Questions
            </Link>
          </li>
          <li>
            <Link
              to="/snippets"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Code Snippets
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow p-10 overflow-auto">
        {" "}
        {/* Ensure content area scrolls independently */}
        <Outlet />
      </div>
      {/* <div className="flex-1 p-10 text-2xl font-bold">
        <Outlet />
      </div> */}
    </div>
  );
}

export default Layout;
