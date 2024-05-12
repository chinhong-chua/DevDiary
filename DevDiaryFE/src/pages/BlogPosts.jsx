import React, { useEffect, useState } from "react";
import AddBlogPostForm from "../components/Blogs/AddBlogPostForm";
import DOMPurify from 'dompurify';

const tempPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content: "React is a JavaScript library...",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    content: "Let's discuss some advanced topics...",
  },
];

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch("http://localhost:5154/api/BlogPosts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts: " + response.statusText);
      }
      let result = await response.json();
      setPosts(result);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const createMarkup = (htmlContent) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

return(
  <div className="container mx-auto px-4">
  <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
  <div className="mb-4 flex justify-end">
    <AddBlogPostForm onPostAdded={() => getPosts()} />
  </div>
  {isLoading ? <p>Loading...</p> : error ? <p>{error}</p> :
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          {/* <p className="text-gray-600">{post.content}</p> */}
            {/* Safely setting inner HTML */}
            {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
            <div dangerouslySetInnerHTML={createMarkup(post.content)} />
          <div className="flex justify-end space-x-2 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  }
</div>
  );
};

export default BlogPosts;
