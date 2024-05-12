import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import BlogPosts from "./pages/BlogPosts";
import CodeSnippets from "./pages/CodeSnippets";
import CodingQuestions from "./pages/CodingQuestions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<BlogPosts />} />
          <Route path="questions" element={<CodingQuestions />} />
          <Route path="snippets" element={<CodeSnippets />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

function Layout2() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


export default App;
